<template>
	<div class="bscroll" ref='bscroll'>
		<div class="bscroll-content">
			<slot></slot>
		</div>
	</div>
</template>

<script> 
	import BScroll from 'better-scroll'
	export default {
		name: 'BScroll',
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
			this.bscroll.on('scroll', (position) => {
				this.contentScroll(-position.y);
			})
			this.$store.commit('setBScroll', this.bscroll);
		},
		methods: {
			pullUpLoad() {
				this.$emit('pullUpLoad');
				this.bscroll.finishPullUp();
			},
			contentScroll(scrollTop) {
				if(this.$store.state.tabOffsetTop
						&& scrollTop > this.$store.state.tabOffsetTop) {
					this.$bus.$emit('changeTabStyle');
					this.$bus.$emit('changeTabShow', true);
				}else {
					this.$bus.$emit('changeTabShow', false);
				}
			}
		},
		activated() {
			this.bscroll.refresh();
			this.bscroll.scrollTo(0, this.scrollY, 0);
		},
		deactivated() {
			this.scrollY = this.bscroll.y;
		},
		beforeDestroyed() {
			this.$bus.$off('getTabOffset');
		}
	}
</script>

<style scoped="scoped">
	.bscroll {
		height: calc(100% - 93px);
	}
</style>
