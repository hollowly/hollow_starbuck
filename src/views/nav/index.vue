<!--  -->
<template>
	<div id='profile' v-if='isshow'>
		<p style="margin-bottom:22px">咖啡会让你脑洞大开哟 ☕</p>
		<hr>
		<div class="usermessage">
			<router-link to="/account">
				<span><span>6</span>/16</span>
				<div class="line">
					<div></div>
				</div>
			</router-link>
			<div>
				<img src="@/assets/svg/user/index/start.svg" width="25" class="start">
				<span><img src="@/assets/svg/user/index/gift.svg">6</span>
			</div>
		</div>
	</div>


	<div id='profile' v-else='isshow'>
		<p style="margin-bottom:22px">心情惬意，来杯咖啡吧 ☕</p>
		<router-link to='/login' class="login-in">
		<img src="@/assets/svg/sign-in.svg">登录</router-link>
		<router-link to='/register'>注册</router-link>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isshow:false
		}
	},
	mounted() {
		// 判断是否登录，登录就渲染不同的组件
		this.cookiename = this.cookie.getCookie('loginname')
		if(this.cookiename) {
			this.isshow = true;
		}
	}
}
</script>

<style scoped>
hr {
	width: 300%;
}
	#profile {
		position: absolute;
		top: 350px;
		left: 80px;
		font-size: 25px;
		font-weight: 700;
	}
	.active {
		color: red;
		border: 1px solid red;
		background: red;
	}
	#profile > a {
		padding: 2px 10px;
		font-size: 17px;
		margin-right: 15px;
		text-align: center;
		border: 1px solid #00a862;
		border-radius: 48px;
    color: #00a862;
		background: white;
		outline: none;
		cursor: pointer;
		font-weight: 500;
	}
	.login-in {
		border: none !important;
	}
	.login-in > img {
		vertical-align: middle;
		margin-right: 5px;
	}
	@media screen and (max-width: 992px) {
		#profile {
			top: 75px;
			left: 20px;
		}
		.usermessage {
			transform: translateY(-20px);
		}
	}

	.usermessage {
		width: auto;
		height: auto;
	}
	.usermessage > a > span {
		font-size: 18px;
		color: rgba(0, 0, 0, 0.4);
	}
	.usermessage > a {
		display: inline-block;
		width: 120px;
		height: 50px;
	}
	.usermessage > a > span > span {
		font-size: 24px;
		color: rgba(0, 0, 0, 1);
	}
	.usermessage > div > span {
		font-size: 18px;
		color: rgba(0, 0, 0, 0.4);
		float: right;
	}
	.usermessage > div:last-child {
		transform: translateY(-30px);
	}
	.line {
		width: 70px;
		height: 4px;
		border-radius: 10px;
		background: rgba(0,0,0,.12);
	}
	.line > div {
		width: 37.5%;
		height: 4px;
		border-radius: 10px;
		background: rgb(0, 168, 98);
	}
	.start {
		margin: 0px 0px 20px 70px;
		display: inline;
	}
</style>