<!--  -->
<template>
	<main>
		<ul>
			<span class='next'>＞</span>
			<li><a href=""><img src="@/assets/img/index/top1.jpg"></a></li>
			<li><a href=""><img src="@/assets/img/index/top2.jpg"></a></li>
		</ul>
		
		<div id='promotion'>
			<a href="" v-for='item in promotionUrl'>
				<img :src="item.imgUrl">
			</a>
		</div>	

		<div id='program'>
			<div>
				<h2>星享俱乐部</h2>
				<p>
					开启您的星享之旅，星星越多、会员等级越高、
				</p>
				<p>
					好礼越丰富。<a href="" style="color: #C2A661;">了解更多 › </a>
				</p>
				<a href='/register' class="aInput">注册</a>
				<a href='/login' class="aInput login-in">登录</a>
			</div>
			<div>
				<img src="@/assets/svg/logo-msr-new.svg">
			</div>
		</div>

		<div id='tmall'>
			<div class="tmall-top">
				<h2 >星巴克精选</h2><br>
				<p>
					在星巴克天猫旗舰店发现更多咖啡心意
				</p>
			</div>
			<ul>
				<li v-for='item in tmallD'>
					<img :src="item.imgUrl">
					<p><strong>{{item.title}}</strong></p>
					<p>{{item.p1}}</p>
					<p>{{item.p2}}</p>
					<p><a href="" style="color: #C2A661;">了解更多 ›</a></p>
				</li>
			</ul>
		</div>

		<div id='tmall' style="background:rgb(253,253,253)">
			<div class="tmall-top">
				<h2 >1912 派克街 | 咖啡星讲堂</h2><br>
				<p>
					了解更多星巴克咖啡文化
				</p>
			</div>
			
			<div class="tmall-screen">
				<span class="screen-left"><img src="@/assets/svg/screen-left.svg"></span>
				<span class="screen-right"><img src="@/assets/svg/screen-right.svg"></span>
				<a href="" v-for='item in tmallCulture'>
					<div :style="{backgroundImage: 'url(' + item.imgUrl + ')'}">
						<span>{{item.title}}</span>
					</div>
					<p>{{item.p}}</p>
				</a>
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
export default {
	data() {
		return {	
			promotionUrl:[
				{imgUrl:require('@/assets/img/index/program1.jpg'),text:'1'},
				{imgUrl:require('@/assets/img/index/program2.jpg'),text:'1'},
				{imgUrl:require('@/assets/img/index/program3.jpg'),text:'1'}
			],
			tmallD:[
				{title:'会员星礼包',p1:'星享卡新升级',p2:'更多心意好礼',imgUrl:require('@/assets/img/index/tmall1.png')},
				{title:'星礼卡',p1:'用一份心礼',p2:'让心意相随',imgUrl:require('@/assets/img/index/tmall2.png')},
				{title:'电子产品券',p1:'心意',p2:'从这一杯开始',imgUrl:require('@/assets/img/index/tmall3.png')},
				{title:'咖啡生活',p1:'星巴克',p2:'用心制作',imgUrl:require('@/assets/img/index/tmall4.png')},
			],
			tmallCulture: [
				{title:'咖啡知识',p:'咖啡的起源于栽培',imgUrl:require('@/assets/img/index/coffeehouse1.jpg')},
				{title:'咖啡品鉴',p:'咖啡调制',imgUrl:require('@/assets/img/index/coffeehouse2.jpg')},
				{title:'咖啡知识',p:'咖啡烘焙',imgUrl:require('@/assets/img/index/coffeehouse3.jpg')},
				{title:'咖啡品鉴',p:'手冲咖啡',imgUrl:require('@/assets/img/index/coffeehouse4.jpg')},
			]
		}
	},

	mounted() {
		$(function() {
			$('.next').click(() => {
				alert('等待完善')
			})

			$('#promotion > a > img, #tmall > ul > li, #tmall > .tmall-screen > a ').mouseenter(function() {
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
				alert('等待完善')
			})

			$('.screen-left').click(function() {
				alert('等待完善哦')
			})

		})
	}

}

</script>

<style scoped>
	main {
		width: 70%;
		height: 100%;
		float: right;
	}
	main > ul {
		width: 200%;
		list-style: none;
		display: inline-block;
	}
	main > ul > li {
		width: 100%;
	}
	main > ul > li > a{
		width: 100%;
	}
	main > ul > li > a > img {
		width: 50%;
		float: left;
	}
	.next {
		font-size: 80px;
		font-weight: 100;
		color: white;
		position: relative;
		bottom: -285px;
		right: -46%;
		z-index: 100;
		cursor: pointer;
		user-select: none;
	}
/* ************************ */
	#promotion {
		width: 99.6%;
		background: rgb(247,247,247);
		float:right;
	}
	#promotion > a > img {
		width: 30%;
		border-radius: 15px;
		box-shadow: 0 2px 3px 1px rgba(0, 0, 0, 0.12);
		margin: 20px 0px 20px 25px;
		transition: all .3s;
	}
/* ************************ */
	#program {
		width: 73%;
		height: 175px;
		background: white;
		margin: 0 auto;
		line-height: 300%;
		clear: both;
	}
	#program > :first-child {
		width: 50%;
		height: 100%;
		float: left;
		margin-top: 35px;
	}
	#program > :first-child > p, #tmall p {
		color: rgba(0, 0, 0, 0.56);
	}
	#program .aInput {
		padding: 3px 12px;
		font-size: 20px;
		text-align: center;
		margin: 0px 10px 0px 0px;
		border: 1px solid #00a862;
		border-radius: 48px;
		color: #00a862;
		background: white;
		outline: none;
		cursor: pointer;
		font-weight: 300;
	}
	#program > :last-child {
		float: right;
		width: 35%;
		height: 100%;
		margin-top: 95px;
	}
	h2 {
		font-weight: 500;
	}
/* ************************ */
	#tmall {
		width: 99.6%;
		background: rgb(247,247,247);
		height: 430px;
		float: right;
	}
	.screen-right, .screen-left {
		display: inline-block;
		width: 30px;
		height: 30px;
		border-radius: 30px;
		cursor: pointer;
		text-align: center;
		line-height: 40px;
		background: white;
		position: relative;
		left: 960px;
		top: -80px;
		z-index: 10;
	}
	.screen-left {
		left: 10px;
		top: -80px;
	}
	#tmall > .tmall-top {
		width: 100%;
		height: 100px;
		padding: 40px 0px 20px 0px;
		text-align: center;
		/* border:1px solid red; */
	}
	#tmall > ul {
		width: 75%;
		margin: 0 auto;
		list-style: none;
	}
	#tmall > ul > li {
		width: 21.2%;
		background: white;
		text-align: center;
		cursor: pointer;
		box-shadow: 0 2px 3px 1px rgba(0, 0, 0, 0.12);
		border-radius: 7px;
		margin: 0px 15px;
		transition: all .3s;
		float: left;
	}
	#tmall > ul > li > img {
		width: 65%;
		height: 80px;
		transform: translate(-2.5px,-30px);
	}
	#tmall > ul > li > p {
		font-size: 14px;
		transform: translateY(-25px);
		margin: 6px 0px;
	}
	#tmall > ul > li > p:first-of-type {
		font-size: 16px;
		color: black;
		margin: 0px 0px 15px 0px;
	}
	#tmall > ul > li > p:last-of-type {
		font-size: 12px;
		padding:20px 0px 0px 0px;
	}
	#tmall > ul > li > p > a:hover {
		opacity: 0.7;
	}
/* ************************ */
	#tmall > .tmall-screen {
		width: 200%;
		height: 50%;
	}
	#tmall > .tmall-screen > a {
		box-shadow: 0 2px 3px 1px rgba(0, 0, 0, 0.12);
		width: 14%;
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
/* ************************ */
	#fotter {
		height: 60px;
		line-height: 80px;
		text-align: center;
		color: #666;
		font-size: 14px;
		font-weight: 300;
	}
</style>