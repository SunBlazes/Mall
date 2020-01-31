import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const index = () => import ('views/index/Index');
const cart=()=>import ('views/cart/Cart.vue');
const profile=()=>import ('views/profile/Profile.vue');
const category=()=>import ('views/category/Category.vue');

const routes = [
	{
		path: '/index',
		component: index,
		meta: {
			title: "购物街"
		}
	},
	{
		path: '/',
		redirect: '/index',
		meta: {
			title: '购物街'
		}
	},
	{
		path:'/cart',
		component:cart,
		meta: {
			title: "购物车"
		}
	},
	{
		path:'/profile',
		component:profile,
		meta: {
			title: '个人'
		}
	},
	{
		path:'/category',
		component:category,
		meta: {
			title: '分类'
		}
	}
]

const router = new VueRouter({
	routes,
	mode: 'history'
})

export default router;