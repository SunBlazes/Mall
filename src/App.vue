<template>
  <div id="app">
		<keep-alive>
			<router-view v-if="$route.meta.keepAlive"/>
		</keep-alive>
		<router-view v-if="!$route.meta.keepAlive"/>
		<main-tab-bar v-show="$route.path.indexOf('details')==-1" />
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
