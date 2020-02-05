<template>
	<div class="details-tab-bar">
		<tab-bar>
			<tab-bar-item>
				<div class="iconfont" slot="item-img">&#xe65a;</div>
				<span slot="item-text">客服</span>
			</tab-bar-item>
			<tab-bar-item>
				<div class="iconfont" slot="item-img">&#xe655;</div>
				<span slot="item-text">店铺</span>
			</tab-bar-item>
			<tab-bar-item>
				<div class="iconfont" slot="item-img">&#xe60f;</div>
				<span slot="item-text">收藏</span>
			</tab-bar-item>
			<tab-bar-item>
				<div class="cart-btn" slot="item-img" @click="addCart">
					<span>加入购物车</span>
				</div>
			</tab-bar-item>
			<tab-bar-item>
				<div class="purchase-btn" slot="item-img">
					<span>购买</span>
				</div>
			</tab-bar-item>
		</tab-bar>
	</div>
</template>

<script>
	import TabBar from 'components/common/tabBar/TabBar.vue';
	import TabBarItem from 'components/common/tabBar/TabBarItem.vue';
	export default {
		name: 'DetailsTabBar',
		components: {
			TabBar,
			TabBarItem
		},
		props: {
			good: {
				type: Object,
				default() {
					return {}
				}
			},
		},
		methods: {
			addCart() {
				this.$store.commit('addCartQueue', this.good);
				this.$emit('changeToast');
			},
		},
	}
</script>

<style scoped="scoped">
	.purchase-btn,
	.cart-btn {
		line-height: 49px;
		background-color: red;
		color: white;
		font-size: 14px;
	}
	.cart-btn {
		background-color: #EEEE00;
		color: black;
	}
	.purchase-btn {
		background-color: var(--color-high-text);
	}
</style>
