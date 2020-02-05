<template>
	<transition name="fade">
		<div class="toast">
			<div class="toast-wrapper">
				<slot name="toast-content"></slot>
			</div>
		</div>
	</transition>
</template>

<script>
	export default {
		name: 'Toast'
	}
</script>

<style scoped="scoped">
	.toast {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: gray;
		font-size: 17px;
	}
	.toast > .toast-wrapper {
		width: 30vw;
		height: 20vw;
		background-color: rgba(0, 0, 0, .1);
		text-align: center;
		line-height: 20vw;
		padding: 10px;
		box-sizing: content-box;
	}
	.fade-enter-active, .fade-leave-active {
	  transition: opacity .5s;
	}
	.fade-enter, .fade-leave-to {
	  opacity: 0;
	}
</style>
