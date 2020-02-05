<template>
	<div id="index">
		<nav-bar>
			<div slot="center">{{title}}</div>
		</nav-bar>
		<div style="height: 44px;"></div>
		<tab-control 
			v-show="isShowTop" 
			:tabNames='tabNames' 
			@tagClick='tagClick' 
			ref='tabControl' />
		<b-scroll @pullUpLoad='pullUpLoad'>
			<scroll :swiperSlides="banners" />
			<rec-views :recommends = 'recommends' />
			<feature />
			<tab-control 
				:tabNames='tabNames' 
				@tagClick='tagClick' 
				ref='tabControl'
				v-show="!isShowTop" />
			<goods-list :goods='goods' :clickWhat='clickWhat' />
		</b-scroll>
	</div>
</template>

<script>
	import { getIndexMultidata, getIndexGoods } from 'network/index.js'
	import Scroll from 'components/common/scroll/Scroll.vue'
	import NavBar from 'components/common/navbar/NavBar.vue'
	import RecViews from './childComponents/RecViews.vue'
	import Feature from './childComponents/Feature.vue'
	import TabControl from 'components/content/TabControl/TabControl.vue'
	import GoodsList from 'components/content/Goods/GoodsList.vue'
	import BScroll from 'components/common/BScroll/BScroll'
	export default {
		created() {
			this.getIndexMultidata();
			for( let item in this.goods){
				this.getIndexGoods(item, this.goods[item].page);
			}
		},
		mounted() {
			const refresh = this.debounce();
			this.$bus.$on('loadImage', () => {
				refresh();
			});
			this.$bus.$on('loadScrollImage', () => {
				setTimeout(() => {
					this.$store.commit('setTabOffsetTop',
						this.$refs.tabControl.$el.offsetTop)
				})
			})
			this.$bus.$on('changeTabShow', (flag) => {
				if(flag) {
					this.isShowTop = true;
				}else {
					this.isShowTop = false;
				}
			})
		},
		methods: {
			tagClick(index) {
				this.clickWhat = this.goodsIndex[index];
			},
			pullUpLoad() {
				this.getIndexGoods(this.clickWhat, this.goods[this.clickWhat].page);
			},
			/* 
			网络监听事件
			 */
			getIndexMultidata() {
				getIndexMultidata().then(res => {
					this.banners = res.data.banner.list;
					this.recommends = res.data.recommend.list;
				});
			},
			getIndexGoods(type, page) {
				let p = page + 1;
				getIndexGoods(type, p).then(res => {
					this.goods[type].page++;
					this.goods[type].list.push(...res.data.list);
				})
			},
			debounce() {
				let timer = null;
				let that = this;
				return function() {
					if(timer) {
						clearTimeout(timer);
					}
					timer = setTimeout(() => {
						timer = null;
						that.$store.state.bscroll.refresh();
						console.log('hh')
					}, 4)
				}
			}
		},
		data() {
			return {
				banners: [],
				title: '购物街',
				recommends: [],
				tabNames: ["流行", "新款", "精选"],
				goodsIndex:{
					0: 'pop',
					1: 'new',
					2: 'sell'
				},
				goods: {
					pop: {
						page: 0,
						list: []
					},
					new: {
						page: 0,
						list: []
					},
					sell: {
						page: 0,
						list: []
					},
				},
				clickWhat: 'pop',
				isShowTop: false
			}
		},
		name: 'Index',
		components: {
			Scroll,
			NavBar,
			RecViews,
			Feature,
			TabControl,
			GoodsList,
			BScroll,
		},
		beforeDestroyed() {
			this.$bus.off('loadImage');
			this.$bus.off('loadScrollImage');
			this.$bus.off('changeTabShow');
		},
	}
</script>

<style scoped="">
	#index {
		width: 100%;
		height: 100vh;
	}
</style>
