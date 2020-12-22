<!--  -->
<template>
	<main>
			<span class='next'>＞</span>
		<ul>
			<li><a href=""><img src="@/assets/img/index/top1.jpg"></a></li>
			<li><a href=""><img src="@/assets/img/index/top2.jpg"></a></li>
		</ul>
		
		<div id='promotion'>
			<a href="" v-for='item in promotionUrl'>
				<img :src="item.imgUrl">
			</a>
		</div>	

		<div id='program'>
			<div class="program-left">
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
				<li></li>
			</ul>
		</div>
	</main>
</template>

<script>
import $ from 'jquery'
export default {
	data() {
		return {
			promotionUrl:[
				{imgUrl:require('@/assets/img/index/program1.jpg'),text:'1'},
				{imgUrl:require('@/assets/img/index/program2.jpg'),text:'1'},
				{imgUrl:require('@/assets/img/index/program3.jpg'),text:'1'}
			]
		}
	},

	mounted() {
		$(function() {
			$('.next').click(() => {
				alert('等待完善')
			})

			$('#promotion > a > img').mouseenter(function() {
				$(this).css({
					'transform':'translateY(-5px)',
					'box-shadow': '0 1px 3px 2px rgba(0, 0, 0, 0.15)'
				})
			}).mouseleave(function() {
				$(this).css({
					'transform':'translateY(0px)',
					'box-shadow': '0 1px 3px 2px rgba(0, 0, 0, 0)'
					})
			})
		})
	}

}

</script>

<style scoped>
	main {
		width: 70%;
		height: 200%;
		float: right;
		transform: translateY(-105px);
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
		top: 20%;
		left: 91%;
		z-index: 10;
		cursor: pointer;
		user-select: none;
	}
/* ************************ */
	#promotion {
		background: rgb(247,247,247)
	}
	#promotion > a > img {
		width: 30%;
		border-radius: 15px;
		margin: 20px 0px 20px 25px;
		transition: all .3s;
	}
/* ************************ */
	#program {
		width: 73%;
		height: 210px;
		background: white;
		margin: 0 auto;
		padding: 40px 0px;
		line-height: 300%;
		/* border: 1px solid red; */
	}
	#program > :first-child {
		width: 50%;
		height: 100%;
		float: left;
		/* border: 1px solid yellow; */
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
		padding-top: 65px;
		/* border: 1px solid blue; */
	}
	h2 {
		font-weight: 500;
	}
	#tmall {
		width: 100%;
		background: rgb(247,247,247);
		/* border:1px solid red; */
		height: 400px;
	}
	#tmall > .tmall-top {
		width: 100%;
		height: 100px;
		padding: 30px 0px;
		text-align: center;
	}
</style>