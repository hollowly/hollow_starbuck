<!--  -->
<template>
	<main>
		<div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
			<div class="carousel-inner">
				<div class="carousel-item active" data-interval="4000">
					<img src="@/assets/img/main/index/top1.jpg" class="w-100">
				</div>
				<div class="carousel-item" data-interval="4000">
					<img src="@/assets/img/main/index/top2.jpg" class="w-100">
				</div>
			</div>
			<a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
				<img src="@/assets/svg/screen-left-white.svg">
			</a>
			<a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
				<img src="@/assets/svg/screen-right-white.svg">
			</a>
		</div>

		<div class="container-fuild" id='promotion'>
			<div class="row">
				<div class="col-sm" v-for='item in promotionUrl'>
					<a href="">
						<img :src="item.imgUrl">
					</a>
				</div>
			</div>
		</div>
		
		<div class="container-fuild" id='program'>
			<div class="row">
				<div class="col-sm">
					<h4>星享俱乐部</h4>
					<p>
						开启您的星享之旅，星星越多、会员等级越高、
					</p>
					<p>
						好礼越丰富。<router-link to="/club" style="color: #C2A661;">了解更多 › </router-link>
					</p>
					<router-link to='/register' class="aInput" v-if='!isshow'>注册</router-link>
					<router-link to='/login' class="aInput login-in" v-if='!isshow'>登录</router-link>
				</div>

				<div class="col-sm">
					<br><br>
					<img src="@/assets/svg/logo-msr-new.svg">
				</div>
			</div>
		</div>

		<div class="container-fuild" id='tmall'>
			<div>
				<h4 style="padding-bottom:15px">星巴克精选</h4>
				<p>
					在星巴克天猫旗舰店发现更多咖啡心意
				</p>
			</div>

			<div class="row">
				<div class="col-sm" v-for='item in tmallD'>
					<img :src="item.imgUrl">
					<p><strong>{{item.title}}</strong></p>
					<p>{{item.p1}}</p>
					<p>{{item.p2}}</p>
					<p><a href="" style="color: #C2A661;">了解更多 ›</a></p>
				</div>
			</div>
		</div>

		<div id='tmall' class="" style="background:rgb(253,253,253)">
			<div class="tmall-top">
				<h4>1912 派克街 | 咖啡星讲堂</h4><br>
				<p>
					了解更多星巴克咖啡文化
				</p>
			</div>
			
			<div class="tmall-screen">
				<span class="screen-left"><img src="@/assets/svg/screen-left.svg"></span>
				<a href="" v-for='item in tmallCulture'>
					<div :style="{backgroundImage: 'url(' + item.imgUrl + ')'}">
						<span>{{item.title}}</span>
					</div>
					<p>{{item.p}}</p>
				</a>
				<span class="screen-right"><img src="@/assets/svg/screen-right.svg"></span>
			</div>

			<div id='fotter'>
				<a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010402000253">
					<img src="@/assets/img/icpicon.png" width="12px">
				</a>
				沪公网安备 31010402000253号 | 沪ICP备17003747号
			</div>
		</div>
	</main>
</template>

<script>
import {request} from '@/network/request'
export default {
	data() {
		return {
			// promotionUrl:[],
			promotionUrl: [
				{"imgUrl":require('@/assets/img/main/index/program1.jpg')},
				{"imgUrl":require('@/assets/img/main/index/program2.jpg')},
				{"imgUrl":require('@/assets/img/main/index/program3.jpg')}
			],
			tmallD:[
				{"title":"会员星礼包","p1":"星享卡新升级","p2":"更多心意好礼","imgUrl":require('@/assets/img/main/index/tmall1.png')},
				{"title":"星礼卡","p1":"用一份心礼","p2":"让心意相随","imgUrl":require('@/assets/img/main/index/tmall2.png')},
				{"title":"电子产品券","p1":"心意","p2":"从这一杯开始","imgUrl":require('@/assets/img/main/index/tmall3.png')},
				{"title":"咖啡生活","p1":"星巴克","p2":"用心制作","imgUrl":require('@/assets/img/main/index/tmall4.png')}
			],
			tmallCulture: [
				{"title":"咖啡知识","p":"咖啡的起源于栽培","imgUrl":require('@/assets/img/main/index/coffeehouse1.jpg')},
				{"title":"咖啡品鉴","p":"咖啡调制","imgUrl":require('@/assets/img/main/index/coffeehouse2.jpg')},
				{"title":"咖啡知识","p":"咖啡烘焙","imgUrl":require('@/assets/img/main/index/coffeehouse3.jpg')},
				{"title":"咖啡品鉴","p":"手冲咖啡","imgUrl":require('@/assets/img/main/index/coffeehouse4.jpg')}
			],
			// tmallD:[],
			// tmallCulture: [],
			isshow:false,
		}
	},
	mounted() {
		// 判断是否登录，登录就渲染不同的组件
		this.cookiename = this.cookie.getCookie('loginname')
		if(this.cookiename) {
			this.isshow = true;
		}
		// 数据请求
		// request({
		// 	url:'/data3.json',
		// }).then(res => {
		// 	this.promotionUrl = res.data.promotionUrl
		// 	this.tmallD = res.data.tmallD
		// 	this.tmallCulture = res.data.tmallCulture
		// }).catch(err => {
		// 	console.log(err);
		// })

		$(function() {
			$('#promotion > div > div > a > img, #tmall > div > div, #tmall > .tmall-screen > a').mouseover(function() {
				$(this).css({
					'transform':'translateY(-5px)',
					'box-shadow': '0 1px 3px 2px rgba(0, 0, 0, 0.15)'
				})
			}).mouseleave(function() {
				$(this).css({
					'transform':'translateY(0px)',
					'box-shadow': '0 2px 3px 1px rgba(0, 0, 0, 0.12)'
				})
			})

			$('.screen-right').click(function() {
				$('#tmall > .tmall-screen').css({	
					'transform': 'translateX(200px)'
				})
			})

			$('.screen-left').click(function() {
				$('#tmall > .tmall-screen').css({	
					'transform': 'translateX(-200px)'
				})
			})
		})
	}

}
</script>

<style scoped>
	main {
		overflow: hidden;
	}
	.carousel > a > img {
		width: 70px;
	}
/* ************************ */
	#promotion {
		padding: 20px;
		text-align: center;
		background: rgb(247,247,247);
	}
	#promotion  a > img {
		width: 90%;
		border-radius: 15px;
		box-shadow: 0 2px 3px 1px rgba(0, 0, 0, 0.12);
		transition: all .3s;
	}
/* ************************ */
	#program {
		padding: 30px 20px;
		text-align: center;
	}
	#program > .row > div:first-child {
		margin-left: 10%;
		text-align: left;
		line-height: 40px;
	}
	#program > .row > div > p{
		color: rgba(0, 0, 0, 0.56);
	}
	#program .aInput {
		padding: 3px 12px;
		font-size: 16px;
		text-align: center;
		margin: 0px 10px 0px 0px;
		border: 1px solid #00a862;
		border-radius: 48px;
		color: #00a862;
		outline: none;
		cursor: pointer;
		font-weight: 300;
	}
/* ************************ */
	#tmall {
		background: rgb(247,247,247);
		padding: 30px 0px;
	}
	#tmall:last-child {
		padding: 30px 0px 0px 0px;
	}
	#tmall > div:first-child {
		text-align: center;
	}
	#tmall > div:first-child > p {
		color: rgba(0, 0, 0, 0.56);
	}
	#tmall > .row {
		width: 70%;
		margin: 0 auto;
	}
	@media screen and (max-width: 1250px){
		#tmall > .row {
			width: 100%;
		}
	}
	#tmall > .row > div {
		text-align: center;
		background: white;
		height: 200px;
		border-radius: 5px;
		margin: 50px 10px 10px 10px;
		cursor: pointer;
		box-shadow: 0 2px 3px 1px rgba(0, 0, 0, 0.12)
	}
	#tmall > .row > div:last-child {
		margin-right: 0;
	}
	#tmall > .row > div > img {
		transform: translateY(-30px);
		height: 70px;
	}
	#tmall > .row  p {
		margin: 0;
		padding: 5px 0px;
		font-size: 14px;
		color: rgba(0, 0, 0, 0.56);
		transform: translateY(-20px);
	}
	#tmall > .row p > strong {
		font-size: 16px;
		color: black;
	}
	#tmall > .row p:last-child {
		padding-top: 15px;
		font-size: 12px;
		color:rgb(194, 166, 97);
	}
/* ************************ */
	#tmall > .tmall-top {
		width: 100%;
		height: 100px;
		text-align: center;
	}
	#tmall > .tmall-screen {
		width: 250%;
		height: 220px;
		transform: translateX(200px);
	}
	#tmall > .tmall-screen > a {
		box-shadow: 0 2px 3px 1px rgba(0, 0, 0, 0.12);
		width: 280px;
		height: 100%;
		margin: 0px 10px 0px 10px;
		display: inline-block;
		transition: all .3s;
	}
	#tmall > .tmall-screen > a > p {
		color: black;
		font-size: 16px;
		line-height: 50px;
		text-indent: 1rem;
	}
	#tmall > .tmall-screen > a > div {
		width: 100%;
		height: 75%;
		background-size: 100%;
	}
	#tmall > .tmall-screen > a > div > span {
		font-size: 14px;
		display: inline-block;
		margin-top: 8px;
		padding: 8px 12px;
    background: #C2A661;
    color: #FFF;
	}
	.screen-right, .screen-left {
		display: inline-block;
		width: 30px;
		height: 30px;
		border-radius: 30px;
		cursor: pointer;
		text-align: center;
		background: white;
		position: relative;
		left: 50px;
		top: -90px;
		z-index: 10;
	}
	.screen-right {
		left: -70px;
		top: -90px;
	}
/* ************************ */
	#fotter {
		height: 50px;
		line-height: 70px;
		text-align: center;
		color: #666;
		font-size: 14px;
		font-weight: 300;
	}
</style>