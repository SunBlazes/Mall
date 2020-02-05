<template>
	<div id="main-tab-bar">
		<tab-bar>
			<tab-bar-item path='/index' active-color='yellow'>
				<div class="iconfont" slot="item-img">&#xe602;</div>
				<span slot="item-text">首页</span>
			</tab-bar-item>
			<tab-bar-item path="/category" active-color='red'>
				<div slot="item-img"><span class="iconfont">&#xe7f8;</span></div>
				<span slot="item-text">分类</span>
			</tab-bar-item>
			<tab-bar-item path="/cart" active-color='skyblue'>
				<div slot="item-img"><span class="iconfont">&#xe621;</span></div>
				<span slot="item-text">购物车</span>
			</tab-bar-item>
			<tab-bar-item path="/profile" active-color='grey'>
				<div class="iconfont" slot="item-img">&#xe699;</div>
				<span slot="item-text">我的</span>
			</tab-bar-item>
		</tab-bar>
	</div>
</template>

<script>
	import TabBar from 'components/common/tabBar/TabBar.vue';
	import TabBarItem from 'components/common/tabBar/TabBarItem.vue';
	
	export default{
		name:'MainTabBar',
		components:{
			TabBar,
			TabBarItem
		}
	}
</script>

<style scoped="">
	#main-tab-bar {
	}
</style>
