<template>
	<div class="feature">
		<a href="https://act.mogujie.com/zzlx67">
			<img src="~assets/imgs/index/recommend_bg.jpg" alt="">
		</a>
	</div>
</template>

<script>
	export default {
		name: 'Feature',
		props: {
			features: {
				type: String,
				default() {
					return '';
				}
			}
		}
	}
</script>

<style scoped="">
	img {
		width: 100%;
	}
</style>
