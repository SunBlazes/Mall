<template>
	<div class="details">
		<nav-bar bgc='white'>
			<template v-slot:left>
				<div>
					<span 
						class="iconfont" 
						style="font-size: 25px;"
						@click='detailsBack'>
						&#xe749;
					</span>
				</div>
			</template>
			<template v-slot:center>
				<div class="center-content">
					<div @click='goodsClick'>
						<span :class="{sele: sele == 0}">商品</span>
					</div>
					<div @click='paramsClick'>
						<span :class="{sele: sele == 1}">参数</span>
					</div>
					<div @click='commentClick'>
						<span :class="{sele: sele == 2}">评论</span>
					</div>
					<div @click="recClick">
						<span :class="{sele: sele == 3}">推荐</span>
					</div>
				</div>
			</template>
		</nav-bar>
		<div style="height: 44px;" />
		<details-b-scroll @toggleTo='toggleTo'>
			<details-scroll :swiperSlides='topImages'/>
			<div v-if="good">
				<details-base-info :good='good' />
				<div class="bar" />
				<details-shop-info :services="good.services"/>
				<div class="bar" />
				<details-display :detailInfo="good.detailInfo"/>
				<div class="bar" />
				<good-size 
					:itemParams='good.itemParams'
					ref='goodSize'/>
				<div class="bar" />
				<commentary />
			</div>
		</details-b-scroll>
		<details-tab-bar :good='good' @changeToast='changeToast'/>
		<toast v-show="toast">
			<span slot="toast-content">加入购物车成功</span>
		</toast>
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar.vue';
	import DetailsScroll from './children/DetailsScroll.vue';
	import DetailsTabBar from 'components/content/DetailsTabBar/DetailsTabBar.vue'
	import DetailsBaseInfo from './children/DetailsBaseInfo.vue'
	import DetailsShopInfo from './children/DetailsShopInfo.vue'
	import DetailsBScroll from 'components/common/BScroll/DetailsBscroll.vue'
	import DetailsDisplay from './children/DetailsDisplay.vue'
	import Commentary from './children/Commentary.vue'
	import GoodSize from './children/GoodSize.vue'
	import Toast from 'components/common/toast/Toast'
	import { getDetailsData, Good } from 'network/details.js'
	export default {
		name: 'Details',
		data() {
			return {
				iid: null,
				topImages: [],
				good: null,
				sizeTop: null,
				sele: 0,
				toast: false,
			}
		},
		components: {
			NavBar,
			DetailsScroll,
			DetailsTabBar,
			DetailsBaseInfo,
			DetailsShopInfo,
			DetailsBScroll,
			DetailsDisplay,
			GoodSize,
			Commentary,
			Toast,
		},
		created() {
			this.iid = 
				this.$route.query.iid;
		},
		mounted() {
			this.setGoodInfo();
			const refresh = this.debounce(() => {
				this.$store.state.dBscroll.refresh();
				this.setSizeOffset(
					this.$refs.goodSize.$el.offsetTop - 44);
				this.$store.commit('setGoodSizeOffsetTop', this.sizeTop);
			}, 500);
			this.$bus.$on('loadDetailsImage', refresh);
		},
		methods: {
			detailsBack() {
				this.$router.push('/index');
			},
			setTopImages(topImages) {
				for(let item of topImages) {
					this.topImages.push({
						link: null,
						image: item
					})
				}
			},
			setGoodInfo() {
				getDetailsData(this.iid)
					.then((res) => {
						let result = res.result;
						console.log(result)
						this.good = new Good(result.itemInfo,
							result.columns, result.shopInfo, result.detailInfo, result.itemParams);
						this.good.services.services.pop();
						this.setTopImages(this.good.topImages);
				})
			},
			debounce(fn, delay) {
				let timer = null;
				return function() {
					if(timer) {
						clearTimeout(timer);
					}
					timer = setTimeout(() => {
						timer = null;
						fn.call(this);
					}, delay)
				}
			},
			setSizeOffset(top) {
				this.sizeTop = top;
			},
			paramsClick() {
				this.$store.state.dBscroll.refresh();
				this.$store.state.dBscroll.scrollTo(0, -this.sizeTop, 0);
				this.sele = 1;
			},
			goodsClick() {
				this.$store.state.dBscroll.refresh();
				this.$store.state.dBscroll.scrollTo(0, 0, 0);
				this.sele = 0;
			},
			commentClick() {
				this.sele = 2;
			},
			recClick() {
				this.sele = 3;
			},
			//修改商品到参数
			toggleTo(payload) {
				if(this.sele == payload) {
					return;
				}
				this.sele = payload;
			},
			changeToast() {
				this.toast = true;
					setTimeout(() => {
					this.toast = false;
				}, 2000);
			}
		},
		beforeDestroy() {
			this.$bus.$off('loadDetailsImage');
		},
	}
</script>

<style scoped="">
	.center span {
		color: black;
		font-size: 18px;
	}
	.center-content {
		display: flex;
		text-align: center;
		justify-content: space-around;
	}
	.nav-bar {
		box-shadow: none;
	}
	.bar {
		height: 3px;
		background-color: rgba(0, 0, 0, .1);
	}
	.details {
		height: 100vh;
	}
	.sele {
		border-bottom: 3px solid var(--color-high-text);
	}
</style>
