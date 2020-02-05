<template>
	<div class="cart-bar">
		<div class="iconfont left" @click="allChecked">
			<span class="all-checked" v-show="allCheck">&#xe643;</span>
			<span class="unchecked" v-show="!allCheck"></span>
			<i>  全选</i>
		</div>
		<div class="left" style="margin-left: 12px;">
			<span style="vertical-align: -0.75px;">合计: ￥{{$store.state.totalPrice}}</span>
		</div>
		<div class="right calc" @click='calc'>
			<span>计算总价钱</span>
		</div>
		<div class="clearfix"></div>
	</div>
</template>

<script>
	export default {
		name: 'CartBar',
		data() {
			return {
				allCheck: false,
			}
		},
		methods: {
			allChecked() {
				this.allCheck = !this.allCheck;
				this.$bus.$emit('allCheck', this.allCheck);
			},
			calc() {
				this.$bus.$emit('calc');
				this.$emit('changeToast');
			}
		}
	}
</script>

<style scoped="scoped">
	.cart-bar {
		position: fixed;
		bottom: 49px;
		width: 100%;
		background-color: lightgray;
		padding-left: 10px;
		user-select: none;
	}
	.left {
		position: relative;
		top: 6px;
	}
	.iconfont > span {
		border-radius: 100%;
		overflow: hidden;
		background-color: pink;
		display: inline-block;
		width: 20px;
		height: 20px;
		font-size: 18px;
	}
	.iconfont > i {
		font-style: normal;
		color: rgba(0, 0, 0, .3);
		vertical-align: 3px;
	}
	.calc {
		background-color: darkorange;
		color: white;
		padding: 10px;
	}
</style>
