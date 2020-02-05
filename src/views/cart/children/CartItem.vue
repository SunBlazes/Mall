<template>
	<div class="cart-item">
		<div class="item-wrapper">
			<div class="iconfont" @click="check = !check">
				<span class="checked" v-show="check">&#xe643;</span>
				<span class="unchecked" v-show="!check"></span>
			</div>
			<div class="image">
				<img :src="commodity.topImages[0]" alt="">
			</div>
			<div class="comm-info">
				<h4>{{commodity.title}}</h4>
				<p>{{commodity.desc}}</p>
				<div class="bot-info">
					<span class="left" style="color: orange;">￥{{commodity.realPrice}}</span>
					<span class="right">x{{count}}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'CartItem',
		data() {
			return {
				check: false,
				count: 1,
				isCounted: false
			}
		},
		props: {
			commodity: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		mounted() {
			this.$bus.$on('addCount', (id) => {
				if(id == this.commodity.id) {
					this.count++;
				}
			});
			this.$bus.$on('allCheck', (flag) => {
				this.check = flag;
			});
			this.$bus.$on('calc', () => {
				let price = parseFloat(this.commodity.realPrice);
				if(this.check && !this.isCounted) {
					this.$store.commit('addPrice', price);
					this.isCounted = !this.isCounted;
				}else if(this.isCounted && !this.check) {
					this.$store.commit('addPrice', -price);
					this.isCounted = !this.isCounted;
				}
			})
		}
	}
</script>

<style scoped="scoped">
	.cart-item {
		padding: 7px;
		border-bottom: 1px solid rgba(0, 0, 0, .1);
		overflow: hidden;
	}
	.item-wrapper {
		position: relative;
		display: flex;
		justify-content: space-between;
	}
	.iconfont > span {
		display: inline-block;
		height: 20px;
		width: 20px;
		border-radius: 100%;
		background-color: pink;
		font-size: 18px;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}
	.image {
		height: 100px;
		border-radius: 12px;
		overflow: hidden;
	}
	.image img {
		height: 100%;
	}
	.comm-info {
		padding: 0 5px;
		vertical-align: baseline !important;
		display: block !important;
		width: 60%;
	}
	.comm-info h4, h4 + p {
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		font-weight: 550;
		line-height: 1.5;
	}
	.comm-info > p {
		font-weight: 300 !important;
		font-size: 14px;
	}
	.bot-info {
		position: absolute;
		bottom: 20%;
		width: 60%;
		font-size: 16px;
	}
</style>
