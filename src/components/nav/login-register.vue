<!--  -->
<template>
	<div id='profile'>
		<p>登录或创建一个新帐户 🌟</p>
		<ul>
			<slot name='login'><li><a href="/login">登录</a></li></slot>
			<slot name='register'><li><a href="/register">注册</a></li></slot>
			<slot name='club'><li><a href="/club">关于星享俱乐部</a></li></slot>
		</ul>
	</div>
</template>

<style scoped>
	#profile {
		position: absolute;
		top: 280px;
		left: 40px;
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
	


	.active {
		font-weight: 700;
		border-bottom: 3px solid #00a862;
		color: black;
	}
</style>