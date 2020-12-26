<!--  -->
<template>
	<div id='profile'>
		<p style="margin-bottom:22px">心情惬意，来杯咖啡吧 ☕</p>
		<router-link to='/login' class="login-in">
		<img src="@/assets/svg/sign-in.svg">登陆</router-link>
		<router-link to='/register'>注册</router-link>
	</div>
</template>

<style scoped>
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
	}
</style>