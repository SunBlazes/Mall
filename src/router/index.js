import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const index = () => import ('views/index/Index');
const cart=()=>import ('views/cart/Cart.vue');
const profile=()=>import ('views/profile/Profile.vue');
const category=()=>import ('views/category/Category.vue');
const details=()=>import ('views/details/Details.vue');

const routes = [
	{
		path: '/index',
		component: index,
		meta: {
			title: "购物街",
			keepAlive: true
		}
	},
	{
		path: '/',
		redirect: '/index',
		meta: {
			title: '购物街',
			keepAlive: true
		}
	},
	{
		path:'/cart',
		component:cart,
		meta: {
			title: "购物车",
			keepAlive: true
		},
	},
	{
		path:'/profile',
		component:profile,
		meta: {
			title: '个人',
			keepAlive: true
		}
	},
	{
		path: '/category',
		component: category,
		meta: {
			title: '分类',
			keepAlive: true
		}
	},
	{
		path: '/details',
		component: details,
		keepAlive: false
	}
]

const router = new VueRouter({
	routes,
	mode: 'history'
})

export default router;