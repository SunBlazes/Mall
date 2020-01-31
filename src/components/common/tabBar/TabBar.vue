<template>
	<div id="tab-bar">
		<slot></slot>
	</div>
</template>

<script>
	module.exports={
		name:'TabBar',
		data(){
			return {
				sele:false
			}
		},
	}
</script>

<style scoped="">
	#tab-bar{
		position: fixed;
		display: flex;
		bottom: 0;
		left: 0;
		right: 0;
		font-size: 12px;
		background-color: #FFFAF0;
		box-shadow: 0px -2px 1px rgba(0,0,0,.005);
	}
</style>
