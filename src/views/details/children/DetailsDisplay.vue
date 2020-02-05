<template>
	<div class="details-display">
		<div class="details-desc">
			<div class="outer-left">
				<div class="square"></div>
				<div class="bar"></div>
			</div>
			<div class="words" style="padding: 13px 0 5px 0;">
				{{detailInfo.desc}}
			</div>
			<div class="outer-right">
				<div class="bar"></div>
				<div class="square"></div>
			</div>
			<div class="clearfix"></div>
		</div>
		<div class="image-display">
			<div 
				v-for="(item, index) in detailInfo.detailImage"
				:key="index">
				<h4>{{item.key}}</h4>
				<div v-for="(item1, index1) in item.list" :key='index1'>
					<img :src="item1" alt="" @load='loadDetailsImage'>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'DetailsDisplay',
		props: {
			detailInfo: {
				type: Object,
				default() {
					return {};
				}
			}
		},
		methods: {
			loadDetailsImage() {
				this.$nextTick(() => {
					this.$bus.$emit('loadDetailsImage');
				})
			}
		},
	}
</script>

<style scoped="scoped">
	.outer-left > div,
	.outer-right > div {
		display: inline-block;
	}
	.square {
		width: 5px;
		height: 5px;
		background-color: black;
	}
	.bar {
		height: 2px;
		width: 120px;
		background-color: rgba(0, 0, 0, .1);
	}
	.outer-right {
		float: right;
	}
	.details-display {
		padding: 0 5px;
	}
	.image-display img {
		width: 100%;
	}
</style>
