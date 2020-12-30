import Vue from 'vue'
import VueRouter from 'vue-router'

// 左边渲染
const index = () => import('@/views/index')						//主要渲染
const navindex = () => import('@/views/nav/index')		//left默认渲染
const stores = () => import('@/views/nav/stores')			//门店
const menu = () => import('@/views/nav/menu')					//菜单
const register = () => import('@/views/nav/register')	//注册
const login = () => import('@/views/nav/login')				//登录
const club = () => import('@/views/nav/club')					//俱乐部


// 右边渲染
const mainindex = () => import('@/views/main/index')		//right默认渲染
const rstores = () => import('@/views/main/stores')			//right门店
const rlogin = () => import('@/views/main/login')				//right登录
const rregister = () => import('@/views/main/register')	//right注册
const rclub = () => import('@/views/main/club')				 	//right俱乐部
const rmenu = () => import('@/views/main/menu')					//right菜单

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
				path:'/login',
				components: {
					nav: login,
					main: rlogin,
				}
			},
			{
				path:'/menu',
				components: {
					nav: menu,
					main: rmenu
				}
			},
			{
				path:'/register',
				components: {
					nav: register,
					main: rregister
				}
			},
			{ 
				path:'/club',
				components: {
					nav: club,
					main:rclub
				}
			}
		]
	},
]

const router = new VueRouter({
	mode:'history',
	routes
})

export default router
