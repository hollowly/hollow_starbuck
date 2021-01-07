<!--  -->
<template>
	<div id='profile'>
		<p>登录或创建一个新帐户 🌟</p>
		<ul>
			<slot name='login'><li><router-link to="/login">登录</router-link></li></slot>
			<slot name='register'><li><router-link to="/register">注册</router-link></li></slot>
			<slot name='club'><li><router-link to="/club">关于星享俱乐部</router-link></li></slot>
		</ul>
	</div>
</template>

<style scoped>
	#profile {
		position: absolute;
		top: 280px;
		left: 80px;
	}
	#profile > p {
		font-size: 28px;
		font-weight: 700
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
	ul > li > a:hover {
		color: black;
	}
	@media screen and (max-width: 992px) {
		#profile {
			top: 75px;
			left: 20px;
		}
		ul > li  {
			float: left;
			margin: 5px 20px 20px 0px;
		}
	}


	.active {
		font-weight: 700;
		border-bottom: 3px solid #00a862;
		color: black;
	}
</style>