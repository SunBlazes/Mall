<template>
  <div id="app">
		<keep-alive><router-view/></keep-alive>
		<main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from './components/content/MainTabBar/MainTabBar';
export default {
  name: 'app',
  components: {
		MainTabBar,
  },
	data(){
		return {
			sele:false
		}
	}
}
</script>

<style scoped="">
	@import url("assets/css/base.css");
</style>
