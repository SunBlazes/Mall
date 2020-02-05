<template>
	<div class="cart-scroll" ref='bscroll'>
		<div class="bscroll-content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default {
		name: 'CartScroll',
		data() {
			return {
				bscroll: null,
				scrollY: 0
			}
		},
		mounted() {
			this.bscroll = new BScroll(this.$refs.bscroll, {
				probeType: 2,
				pullUpLoad: {
					threshold: 200
				},
				pullDownRefresh: {
					threshold: 200
				},
				click: true,
				mouseWheel: true
			});
			this.bscroll.on('pullingUp', this.pullUpLoad);
			this.bscroll.on('pullingDown', () => {
				this.bscroll.refresh();
				this.bscroll.finishPullDown();
			});
			this.$store.commit("setCartScroll", this.bscroll);
		},
		methods: {
		},
		activated() {
			this.bscroll.refresh();
			this.bscroll.scrollTo(0, this.scrollY, 0);
		},
		deactivated() {
			this.scrollY = this.bscroll.y;
		}
	}
</script>

<style scoped="scoped">
	.cart-scroll {
		height: calc(100% - 131px);
	}
</style>
