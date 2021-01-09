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


// 用户登录
const account = () => import('@/views/nav/user/account.vue')
const raccount = () => import('@/views/main/user/account.vue')
// 消费记录
const activity = () => import('@/views/nav/user/activity.vue')
const ractivity = () => import('@/views/main/user/activity.vue')
// 星享好礼
const rewards = () => import('@/views/nav/user/rewards.vue')
const rrewards = () => import('@/views/main/user/rewards.vue')
// 管理我的账户
const profile = () => import('@/views/nav/user/profile.vue')
const rprofile = () => import('@/views/main/user/profile.vue')
// 关于星享俱乐部
const userclub = () => import('@/views/nav/user/club.vue')
const userrclub = () => import('@/views/main/user/club.vue')
// 星礼卡
const stargiftcard = () => import('@/views/nav/user/stargiftcard.vue')
const rstargiftcard = () => import('@/views/main/user/stargiftcard.vue')
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
			// 以下是用户登录的跳转
			{
				path:'/account',
				components: {
					nav: account,
					main: raccount
				},
			},
			{
				path:'/account/activity',
				components: {
					nav: activity,
					main: ractivity
				}
			},
			{
				path:'/account/rewards',
				components: {
					nav: rewards,
					main: rrewards
				}
			},
			{
				path:'/account/profile',
				components: {
					nav: profile,
					main: rprofile
				}
			},
			{
				path:'/account/club',
				components: {
					nav: userclub,
					main: userrclub
				}
			},
			{
				path:'/account/Star-gift-card',
				components: {
					nav:stargiftcard,
					main:rstargiftcard
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

 

//push
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}
//replace
const VueRouterReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace (to) {
return VueRouterReplace.call(this, to).catch(err => err)
}