<!--  -->
<template>
	<div id='profile'>
		<h3 style="font-weight:700">{{time}}{{cookiename}}☕</h3>
		<ul>
			<slot name='account'><li><router-link to='/account'>账户一览</router-link></li></slot>
			<slot name='activity'><li><router-link to='/account/activity'>消费记录</router-link></li></slot>
			<slot name='rewards'><li><router-link to='/account/rewards'>星享好礼</router-link></li></slot>
			<slot name='Stargiftcard'><li><router-link to='/account/Star-gift-card'>星礼卡</router-link></li></slot>
			<slot name='profile'><li><router-link to='/account/profile'>管理我的账户</router-link></li></slot>
			<slot name='club'><li><router-link to='/account/club'>关于星享俱乐部</router-link></li></slot>
		</ul>
	</div>
</template>

<script>
// import {request} from '@/network/request'

export default {
	data () {
		return {
			cookiename:null,
			time:'',
			menu: [
				{url:'/account',text:''},
				{url:'/account/',text:''},
				{url:'/account/',text:''},
				{url:'/account/',text:''},
				{url:'/club',text:''},
			],
		}
	},
	mounted() {
		// 判断是否登录，登录就渲染不同的组件
		this.cookiename = this.cookie.getCookie('loginname')
		if(this.cookiename) {
			this.isshow = true;
			// 根据时间来渲染，早上好，中午好，晚上好
			var hr = (new Date()).getHours();
			if(hr >= 6 && hr < 11) {
				this.time = '早上好！'
			} else if(hr >= 11 && hr < 14) {
				this.time = '中午好！'
			} else if(hr >= 14 && hr <= 18) {
				this.time = '下午好！'
			} else {
				this.time = '晚上好！'
			}
			return
		}
		// 判断没有登录就跳转到登录页面
		if(this.cookiename == null) {
			console.log(this.cookiename);
			this.$router.replace('/login')
		}

	}
}
</script>

<style scoped>
	#profile {
		position: absolute;
		top: 260px;
		left: 120px;
		z-index: 999;
	}
	ul > li {
		list-style: none;
		margin: 20px 20px 20px 0px;
	}
	ul > li > a:hover {
		color: black;
	}
	ul > li > a {
		color: #777;
	}
	.active {
		font-weight: 700;
		border-bottom: 3px solid #00a862;
		color: black;
	}

	@media screen and (max-width: 992px){
		#profile {
			top: 75px;
			left: 20px;
		}
		ul > li {
			float: left;
		}
	}
</style>