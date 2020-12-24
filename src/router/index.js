import Vue from 'vue'
import VueRouter from 'vue-router'


const index = () => import('@/views/index')						//主要渲染
const navindex = () => import('@/views/nav/index')		//left默认渲染
const stores = () => import('@/views/nav/stores')			//门店
const menu = () => import('@/views/nav/menu')					//菜单
const register = () => import('@/views/nav/register')	//注册
const login = () => import('@/views/nav/login')				//登录
const club = () => import('@/views/nav/club')					//俱乐部



const mainindex = () => import('@/views/main/index')	//right默认渲染

const rstores = () => import('@/views/main/stores.vue')

Vue.use(VueRouter)

const routes = [
  {
		path: '/',
		component: index,
		children:[
			{
				path:'/',
				components:{
					nav: navindex,
					main: mainindex
				}
			},
			{
				path:'/stores',
				components: {
					nav: stores,
					main: rstores
				}
			},
			{
				path:'/menu',
				components: {
					nav: menu
				}
			},
			{
				path:'/login',
				components: {
					nav: login
				}
			},
			{
				path:'/register',
				components: {
					nav: register
				}
			},
			{ 
				path:'/club',
				components: {
					nav: club
				}
			}
		]
	},
]

const router = new VueRouter({
	routes,
	mode:'history'
})

export default router
