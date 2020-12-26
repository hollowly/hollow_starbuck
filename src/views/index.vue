<!--  -->
<template>
		<div class="container-fluid">
			<div class="row">
				<div class="col-sm-12 col-md-12 col-lg-4 col-xl-4">
					<nav class="navbar navbar-expand-lg navbar-light">
						<a href="/" style="float:left"><img src="@/assets/svg/logo.svg" width="40"></a>
						<div class="navbar-collapse">
							<ul class="navbar-nav mr-auto">
								<li class="nav-item active">
									<router-link to='/stores' class="nav-link">门店</router-link>
								</li>
								<li class="nav-item active">
									<router-link to='/login' class="nav-link">我的账户</router-link>
								</li>
								<li class="nav-item active">
									<router-link to='/menu' class="nav-link">菜单</router-link>
								</li>
								<li class="nav-item">
								<a class='sidebar-more'>☰</a>
								</li>
							</ul>
						</div>
					</nav>

					<nav>
						<div id='nav-container'>
							<a href="/"><img src="@/assets/svg/logo.svg" width="40"></a>
							<img src="@/assets/svg/close.svg" class="sidebar-close">
							<ul>
								<li v-for='item in container1'>
									<a :href="item.url">{{item.text}}</a>
								</li>
								<li><hr></li>
								<li v-for='item in container2'>
									<a :href="item.url">{{item.text}}</a>
								</li>
								<li><hr></li>
								<a href='/login' class="aInput login-in">
									<img src="@/assets/svg/sign-in.svg">登录
								</a>
								<a href='/register' class="aInput">注册</a> <br>
								<footer>
									<p>English | 隐私政策 | 使用条款</p>
								</footer>
							</ul>
						</div>
					<keep-alive>
						<router-view class="view" name='nav' />
					</keep-alive>
						</nav>
				</div>


				<div class="col-sm col-md col-lg col-xl">
					<keep-alive>
						<router-view name='main' />
					</keep-alive>
				</div>
			</div>
		</div>
</template>

<script>
import $ from 'jquery'

export default {
	data () {
		return {
			container1:[
				{text:'门店',url:'/stores'},
				{text:'星享俱乐部',url:'/club'},
				{text:'菜单',url:'/menu'},
			],
			container2:[		
				{text:'星巴克移动应用',url:'/apps'},
				{text:'星礼卡',url:'/gift-card'},
				{text:'星巴克臻选™',url:'/reserve'},
				{text:'啡快™ - 在线点 到店取',url:'/now'},
				{text:'专星送™',url:'/delivers'},
				{text:'咖啡星讲堂',url:'/coffee-blog'},
				{text:'上海烘焙工坊',url:'/baking'},
				{text:'关于星巴克',url:'/about'},
				{text:'帮助中心',url:'/help'}
			]
		}
	},
	mounted() {
		$(function() {
			$('.sidebar-more').click(function() {
				$('#sidebar-header').hide(100)
				$('.view').hide()
				$('#nav-container').show(100)
			})

			$('.sidebar-close').click(function() {
				$('#nav-container').hide(100)
				$('.view').show()
				$('#sidebar-header').show(100)
			})
		})


		
	}
	

}

</script>

<style scoped>
	.container-fluid {
		margin: 0;
		padding: 0;
		/* border: 1px solid red; */
	}
	.container-fluid > .row {
		/* border: 1px solid blue; */
	}
	.container-fluid > .row > div {
		border: 2px solid yellow;
	}
	.navbar {
		border: 1px solid green;
	}
	.navbar > .navbar-collapse {
		border: 1px solid skyblue;
	}

	#nav-container {
		display: none;
	}
	a {
		display: inline-block;
		color: black;
	}
	.sidebar-more {
		float: right;
		margin: 2px 20px;
		font-size: 25px;
		cursor: pointer;
		user-select: none;
	}

	#nav-container {
		box-sizing: border-box;
		padding: 20px 0px 0px 20px;
		display: none;
	}
	.sidebar-close {
		float: right;
		margin: 12px 24px;
		user-select: none;
	}
	#nav-container ul {
		width: 80%;
		padding: 45px 0px 0px 45px;
	}
	hr {
		background: rgba(0, 0, 0, 0.12);
    border: none;
    height: 1px;
	}
	#nav-container ul > li {
		padding-bottom: 15px;
		list-style: none;
		font-weight: 700;
		font-size: 18px;
	}
	#nav-container .aInput {
		padding: 2px 10px;
		font-size: 17px;
		text-align: center;
		margin: 0px 20px 0px 0px;
		border: 1px solid #00a862;
		border-radius: 48px;
    color: #00a862;
		background: white;
		outline: none;
		cursor: pointer;
		font-weight: 400;
	}
	#nav-container .login-in {
		border: none;
	}
	#nav-container .aInput > img {
		vertical-align: middle;
		margin-right: 5px;
	}
	footer {
		display: block;
		margin: 25px 0px 0px 0px;
		color: rgba(0,0,0,0.4);
		font-size: 12px;
	}
	p {
		margin: 3px 0px 0px 0px;
	}
	p:first-child {
		font-size: 14px;
	}

</style>