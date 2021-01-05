<!--  -->
<template>
		<div class="container-fluid">
			<div class="row">
				<div class="col-sm-12 col-md-12 col-lg-5 col-xl-4">
					<nav class="nav">
						<a href="/"><img src="@/assets/img/logo.png" width="40"></a>
						<router-link to='/stores' class="nav-link">门店</router-link>
						<router-link to='/login' class="nav-link">我的账户</router-link>
						<router-link to='/menu' class="nav-link">菜单</router-link>
					</nav>
					<div style="float:right"><a class='sidebar-more'>☰</a></div>
						<div id='nav-container'>
							<a href="/"><img src="@/assets/img/logo.png" width="40"></a>
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
				</div>

				<div class="col-sm col-md col-lg col-xl">
					<keep-alive>
						<router-view name='main' class="main"/>
					</keep-alive>
				</div>
			</div>
		</div>
</template>

<script>
import axios from 'axios'
export default {
	data () {
		return {
			container1:[],
			container2:[]
		}
	},
	created() {
		axios.all([
			axios({url:'/data.json'}).then(data => {
				// console.log(data);
				this.container1 = data.data.container1
				this.container2 = data.data.container2
			}),
		])
	},
	mounted() {
		$(function() {
			$('.sidebar-more').click(function() {
				$(this).hide()
				$('.nav').hide(100)
				$('.view').hide(100)
				$('#nav-container').show(100)
			})

			$('.sidebar-close').click(function() {
				$('.sidebar-more').show()
				$('#nav-container').hide(100)
				$('.nav').show(100)
				$('.view').show(100)
			})
		})
	}
}
</script>

<style scoped>
	@media screen and (max-width: 991px){
		.main {
			transform: translateY(120px);
		}
	}
	.container-fluid {
		margin: 0;
		padding: 0;
	}
	.container-fluid > .row > div:first-child {
		height: 100vh;
		border:1px solid #eeeeee;
		position: sticky;
		top: 0;
	}
	nav {
		float: left;
	}
	nav > a:first-child {
		margin-top: 10px;
		margin-left: 20px;
	}
	nav > a {
		font-weight: 600;
		margin: 15px 15px 0px 5px;
	}
	a {
		color: black;
	}
	#nav-container {
		box-sizing: border-box;
		padding: 20px 0px 0px 20px;
		display: none;
	}
	#nav-container > a {
		margin: 15px 0px 0px 25px;
	}
	.sidebar-more {
		line-height: 70px;
		font-size: 25px;
		margin-right: 20px;
		cursor: pointer;
		user-select: none;
	}
	.sidebar-close {
		float: right;
		margin: 12px 24px;
		user-select: none;
	}
	#nav-container ul {
		width: 80%;
		padding: 35px 0px 0px 60px;
	}
	hr {
		background: rgba(0, 0, 0, 0.12);
    border: none;
    height: 1px;
	}
	#nav-container ul > li {
		padding-bottom: 10px;
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
		margin: 20px 0px 0px 0px;
		color: rgba(0,0,0,0.4);
		font-size: 12px;
	}
	p {
		margin: 3px 0px 0px 0px;
	}
	p:first-child {
		font-size: 14px;
	}

	@media screen and (max-width: 992px) {
		.container-fluid > .row > div:first-child {
			width: 100%;
			height: auto;
			box-shadow: none;
			position: static;
		}
		#nav-container {
			width: 100vh;
			height: 100vh;
			background: white;
		}
	}
	
</style>