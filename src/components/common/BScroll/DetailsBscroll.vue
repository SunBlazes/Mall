<template>
	<div class="details-bscroll" ref='bscroll'>
		<div class="bscroll-content">
			<slot></slot>
		</div>
	</div>
</template>

<script> 
	import BScroll from 'better-scroll'
	export default {
		name: 'DetailsBscroll',
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
			this.$store.commit('setDBScroll', this.bscroll);
			this.bscroll.on('scroll', (position) => {
				const top = this.$store.state.goodSizeOffsetTop;
				if(-position.y >= top) {
					this.$emit('toggleTo', 1);
				}else {
					this.$emit('toggleTo', 0);
				}
			})
		},
		methods: {
			pullUpLoad() {
				this.$emit('pullUpLoad');
				this.bscroll.finishPullUp();
			},
		},
		// activated() {
		// 	this.bscroll.refresh();
		// 	this.bscroll.scrollTo(0, this.scrollY, 0);
		// },
		// deactivated() {
		// 	this.scrollY = this.bscroll.y;
		// },
	}
</script>

<style scoped="scoped">
	.details-bscroll {
		height: calc(100% - 93px);
	}
</style>

