<template>
	<div class="rec-views" style="margin-top: 5px;">
		<div>
			<div v-for="(item, index) in recommends" :key='index'>
				<a href="item.link">
					<img :src="item.image" alt="">
					<span style="margin-top: 5px;display: inline-block;">{{item.title}}</span>
				</a>
			</div>
		</div>
		<div class="bar"></div>
	</div>
</template>

<script>
	export default {
		name: 'RecViews',
		props: {
			recommends: {
				type: Array,
				default() {
					return []
				}
			}
		}
	}
</script>

<style scoped="">
	.rec-views div:first-child{
		display: flex;
		text-align: center;
		font-size: 14px;
	}
	.rec-views div:first-child div {
		flex: 1;
	}
	img {
		width: 80%;
	}
	.rec-views img {
		display: block;
		margin: 0 auto;
	}
	.bar {
		margin-top: 20px;
		height: 12px;
		background-color: #eee;
	}
</style>
