import Vue from 'vue'
import VueRouter from 'vue-router'


const index = () => import('@/views/index')						//主要渲染
const navindex = () => import('@/views/nav/index')		//left默认渲染
const mainindex = () => import('@/views/main/render')	//right默认渲染
const stores = () => import('@/views/nav/stores')			//门店
const menu = () => import('@/views/nav/menu')					//菜单
const register = () => import('@/views/nav/register')	//注册
const login = () => import('@/views/nav/login')				//登录
const club = () => import('@/views/nav/club')					//俱乐部

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
		component:index,
		children:[
			{
				path:'/',
				component:navindex
			},
			{
				path:'/stores',
				component:stores
			},
			{
				path:'/menu',
				component:menu
			},
			{
				path:'/login',
				component:login
			},
			{
				path:'/register',
				component:register
			},
			{
				path:'/club',
				component:club
			}
		]
	},
]

const router = new VueRouter({
	routes,
	mode:'history'
})

export default router
