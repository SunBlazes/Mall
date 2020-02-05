import Vue from 'vue'
import App from './App'
import router from 'router'
import store from './store'
import 'assets/iconfont/iconfont.css'
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue();
new Vue({
	router,
  render: h => h(App),
	store
}).$mount('#app')

