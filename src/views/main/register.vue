<!--  -->
<template>
	<div>
		<img src="@/assets/img/main/register/top.jpg" class="img-fluid">
		<div class="container-fuild top">
			<div class="row">
				<div class="col-sm-8">
					<h4>使用星巴克App进行注册</h4>
					<p>现在就下载<span>星巴克App</span>便可直接用手机进行注册、支付、查看消费记录及管理卡片。</p>
				</div>
				<div class="col-sm">
					<img src='@/assets/img/main/register/phone.png' width="200"></div>	
			</div>
		</div>
	</div>
</template>

<style scoped>
	.top > .row {
		margin: 0 auto;
		width: 70%;
		margin-top: 40px;
		margin-bottom: 40px;
	}
	.top > .row > div:first-child {
		padding-top: 15%;
	}
	.top > .row > div > h4 {
		margin: 20px 0px;
	}
	.top > .row > div > p > span {
		color: #00A862;
	}
	@media screen and (max-width:1300px){
		.top > .row {
			width: 90%;
		}
	}
	@media screen and (max-width:1170px){
		.top > .row {
			width: 100%;
		}
	}
	@media screen and (min-width:875px){
		.top > .row {
			width: 70%;
		}
	}
</style>