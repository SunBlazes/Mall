<template>
	<div class="goods-list">
		<goods-item 
			v-for="(item, index) in goods[clickWhat].list" 
			:key='index' 
			:good='item'>
		</goods-item>
	</div>
</template>

<script>
	import GoodsItem from './GoodsItem.vue'
	export default {
		name: 'GoodsList',
		props: {
			goods: {
				type: Object,
				default() {
					return {};
				}
			},
			clickWhat: {
				type: String,
				default() {
					return 'pop';
				}
			}
		},
		components: {
			GoodsItem
		},
		mounted() {
		}
	} 
</script>

<style scoped="scoped">
	@import url("~assets/css/base.css");
	.goods-list {
		display: flex;
		flex-wrap: wrap;
		text-align: center;
		margin-top: 5px;
	}
</style>
