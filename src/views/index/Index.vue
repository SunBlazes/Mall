<template>
	<div id="index">
		<nav-bar>
			<div slot="center">{{title}}</div>
		</nav-bar>
		<scroll :swiperSlides="banners"></scroll>
		<rec-views :recommends = 'recommends'></rec-views>
		<feature></feature>
		<tab-control :tabNames='tabNames'></tab-control>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
	</div>
</template>

<script>
	import {getIndexMultidata, getIndexGoods} from 'network/index.js'
	import Scroll from 'components/common/scroll/Scroll.vue'
	import NavBar from 'components/common/navbar/NavBar.vue'
	import RecViews from './childComponents/RecViews.vue'
	import Feature from './childComponents/Feature.vue'
	import TabControl from 'components/content/TabControl/TabControl.vue'
	export default {
		created() {
			this.getIndexMultidata();
			this.getIndexGoods('pop', 1);
		},
		methods: {
			getIndexMultidata() {
				getIndexMultidata().then(res => {
					this.banners = res.data.banner.list;
					this.recommends = res.data.recommend.list;
					console.log(res)
				});
			},
			getIndexGoods(type, page) {
				let p = page + 1;
				getIndexGoods(type, p).then(res => {
					this.goods[type].page++;
					this.goods[type].list.push(...res)
				})
			}
		},
		data() {
			return {
				banners: [],
				title: '购物街',
				recommends: [],
				tabNames: ["流行", "新款", "精选"],
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
					}
				}
			}
		},
		name: 'Index',
		components: {
			Scroll,
			NavBar,
			RecViews,
			Feature,
			TabControl
		},
	}
</script>

<style scoped="">
	#index {
		width: 100%;
	}
</style>
