<template>
	<div class="nav-bar" :style="'backgroundColor:'+bgc">
		<div class="left">
			<slot name="left"></slot>
		</div>
		<div class="center">
			<slot name="center"></slot>
		</div>
		<div class="right">
			<slot name="right"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'NavBar',
		props: {
			bgc: {
				type: String,
				default: 'pink'
			}
		}
	}
</script>

<style scoped="">
	.nav-bar {
		display: flex;
		height: 44px;
		line-height: 44px;
		text-align: center;
		box-shadow: 0px 2px 2px grey;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 999;
		user-select: none;
	}
	.left, .right {
		width: 60px;
	}
	.center {
		flex: 1;
		color: white;
		letter-spacing: 2px;
		font-size: 20px;
	}
</style>
