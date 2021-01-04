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
// 菜单左边渲染
const beverages = () => import('@/views/main/menu/beverages/beverages')		//饮料
const food = () => import('@/views/main/menu/food/food')		//美食
const coffee = () => import('@/views/main/menu/coffee/coffee')		//咖啡
const merchandise = () => import('@/views/main/menu/merchandise/merchandise')		//商店


// 右边渲染
const mainindex = () => import('@/views/main/index')		//right默认渲染
const rstores = () => import('@/views/main/stores')			//right门店
const rlogin = () => import('@/views/main/login')				//right登录
const rregister = () => import('@/views/main/register')	//right注册
const rclub = () => import('@/views/main/club')				 	//right俱乐部
const rmenu = () => import('@/views/main/menu/index')		//right菜单
// 菜单右边渲染
const rbeverages = () => import('@/views/main/menu/beverages/rbeverages')		//right饮料
const rfood = () => import('@/views/main/menu/food/rfood')		//right美食
const rcoffee = () => import('@/views/main/menu/coffee/rcoffee')		//right咖啡
const rmerchandise = () => import('@/views/main/menu/merchandise/rmerchandise')		//right商店






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
			},
			{
				path:'/menu',
				components: {
					nav: menu,
					main: rmenu
				},
			},
			{
				path:'/menu/beverages',
				components: {
					nav: beverages,
					main: rbeverages
				}
			},
			{
				path:'/menu/food/',
				components: {
					nav:food,
					main:rfood
				}
			},
			{
				path:'/menu/coffee/',
				components: {
					nav:coffee,
					main:rcoffee
				}
			},
			{
				path:'/menu/merchandise/',
				components: {
					nav:merchandise,
					main:rmerchandise
				}
			},
		]
	},
]

const router = new VueRouter({
	mode:'history',
	routes
})

export default router
