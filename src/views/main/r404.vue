<!--  -->
<template>
	<div id='box'>
		<div class="container">
			<div class="row">
				<div class="col-sm">
					<h1>很抱歉</h1>
					<h4>我们的页面存在一些问题，暂时无法访问</h4>
				</div>
			</div>
			<div class="row">
				<div class="col-sm">
					<h2>有什么可能造成这个问题？</h2>
					<h5>我们的网站目前存在一些技术故障，在修复网站技术故障的过程中，可能将这个网页删掉了。
					另一种可能是您点击的这个网址已经失效了，或者您在浏览器中输入了错误的网址。</h5>

					<h2>您现在可以做什么？</h2>
					<h5>您可以再次尝试在浏览器中输入您想访问的网址，或者您可以回到<router-link to="/">星巴克首页</router-link> 。</h5>

					<h3>另外,</h3>
					<h5>如果您想帮助我们解决这个问题，请您联系我们并且告诉我们您在哪里遇到了障碍。
					同时，我们需要您告知我们在这个问题发生的时候，您正在使用的操作系统和浏览器是什么。</h5>
				</div>
			</div>
			<div class="logo">
				<img src="@/assets/img/logo.png" width="180px">
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {

		}
	},

}

</script>

<style scoped>
	#box {
		height: 100vh;
		background: rgb(247, 247, 247);
	}
	.container {
		width: 70%;
	}
	.container > .row > div > h1{
		font-size: 32px;
		padding: 30px 0px 10px 10px;
	}
	.container > .row > div > h4{
		font-size: 22px;
		color: rgba(0, 0, 0, 0.56);
		padding: 0px 10px 40px 10px;
		border-bottom: 1px solid #ccc;
	}

	.container >.row > div > h2 {
		font-size: 22px;
		padding: 20px 0px 20px 10px;
	}
	.container >.row > div > h3 {
		font-size: 18px;
		padding: 20px 0px 20px 10px;
	}
	.container >.row > div > h5 {
		font-size: 16px;
		padding: 0px 0px 0px 10px;
		color: rgba(0, 0, 0, 0.56);
	}
	.container >.row > div > h5 > a{
		color: #00A862;
	}

	.logo {
		opacity: 0.7;
		padding-top: 10px;
		text-align: center;
		margin: 0 auto;
	}
</style>