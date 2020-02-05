<template>
	<div class="goods-item">
		<a href="#">
			<img 
				:src="good.show.img" 
				alt="" 
				@click='imageClick(good.iid)' />
		</a>
		<div>
			<span style="display: block;">{{good.title}}</span>
			<span style="color: var(--color-high-text)">{{good.price}}  </span>
			<span class='iconfont'
				:class="{clickStyle: isClick}" 
				@click='isClick = !isClick;good.popularStar++'>
				&#xe639;
			</span>
			<span v-show="good.popularStar!=null">{{good.popularStar}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'GoodsItem',
		props: {
			good: {
				type: Object,
				default() {
					return {};
				}
			}
		},
		data() {
			return {
				isClick: false,
			}
		},
		methods: {
			// loadImage() {
			// 	this.debounce(() => {
			// 		this.$store.state.bscroll.refresh();
			// 	})
			// },
			// debounce(fn) {
			// 	if(this.$store.state.imageTimer) {
			// 		clearTimeout(this.$store.state.imageTimer);
			// 	}
			// 	this.$store.commit('setImageTimer', setTimeout(() => {
			// 		fn.apply(this);
			// 	},200) )
			// },
			imageClick(iid) {
				this.$router.push({
					path: '/details',
					query: {
						iid
					}
				})
			}
		},
		mounted() {
			this.$nextTick(() => {
				this.$bus.$emit('loadImage');
			})
		}
	}
</script>

<style scoped="scoped">
	.goods-item img {
		width: 90%;
	}
	.goods-item {
		width: 50%;
		overflow: hidden;
		font-size: 12px;
		white-space: nowrap;
	}
	.goods-item > a img {
		border-radius: 20px;
		overflow: hidden;
		display: inline-block;
	}
	.goods-item span:first-of-type {
		width: 80%;
		margin: 0 auto;
		overflow: hidden;
		line-height: 2;
		text-overflow: ellipsis;
	}
	.clickStyle {
		color: var(--color-high-text);
	}
</style>
