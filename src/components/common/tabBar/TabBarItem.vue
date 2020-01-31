<template>
	<div class="tab-bar-item" @click='tagClick' :class="{selected:sele}" :style="activeStyle">
		<slot name="item-img"></slot>
		<slot name='item-img-active'></slot>
		<slot name="item-text"></slot>
	</div>
</template>

<script>
	module.exports={
		name:'TabBarItem',
		methods:{
			tagClick(){
				this.$router.push(this.path).catch(err => {err});
			}
		},
		props:{
			path:String,
			activeColor:{
				type:String,
				default:'red'
			}
		},
		computed:{
			sele(){
				return this.$route.path.indexOf(this.path)==-1?false:true
			},
			activeStyle(){
				return !this.sele?{}:{color:this.activeColor};
			}
		}
	}
</script>

<style scoped="">
.iconfont {
	font-family: "iconfont" !important;
	font-size: 28px;
	font-style: normal;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
.tab-bar-item{
	height: 49px;
	flex: 1;
	text-align: center;
}
</style>
