<template>
	<div id="cart">
		<nav-bar>
			<template v-slot:center>
				<span>购物车({{cartCount}})</span>
			</template>
		</nav-bar>
		<div style="height: 44px;"></div>
		<cart-scroll>
			<div v-if="goods.length != 0">
				<cart-item
					v-for="(item, index) in goods" 
					:key='index'
					:commodity='item'
				/>
			</div>
			<!-- div[style=height:44px]{$}*100 -->
		</cart-scroll>
		<cart-bar @changeToast="changeToast"/>
		<toast v-show="toast">
			<span slot='toast-content'>计算成功</span>
		</toast>
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar.vue'
	import CartItem from './children/CartItem.vue'
	import CartBar from './children/CartBar.vue'
	import CartScroll from './children/CartScroll.vue'
	import Toast from 'components/common/toast/Toast.vue'
	export default {
		name: 'Cart',
		data() {
			return {
				cartCount: 0,
				goods: [],
				toast: false
			}
		},
		components: {
			NavBar,
			CartItem,
			CartBar,
			CartScroll,
			Toast
		},
		mounted() {
		},
		activated() {
			let queue = this.$store.state.cartQueue;
			for(let comm of queue) {
				this.judgeAddCart(comm);
			}
			this.$store.commit('clearCartQueue');
			this.$store.state.cartScroll.refresh();
		},
		methods: {
			judgeAddCart(commodity) {
				if(!this.goods.find(value => commodity.id == value.id)) {
					this.goods.push(commodity);
					this.cartCount++;
				}else {
					this.$nextTick(() => {
						this.$bus.$emit('addCount', commodity.id);
					})
				}
			},
			changeToast() {
				this.toast = true;
					setTimeout(() => {
					this.toast = false;
				}, 2000);
			}
		}
	}
</script>

<style scoped="">
	#cart {
		height: 100vh;
	}
</style>
