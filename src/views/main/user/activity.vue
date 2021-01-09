<!--  -->
<template>
	<div style="width:100%; background:rgb(248,248,248);padding-bottom:50px">
		<header>
			<button>消费记录</button>
			<button>星星记录</button>
			<p>交易记录通常会在您消费后的24小时内记录到您的星享俱乐部帐户中。</p>
		</header>

		<div class="container">
			<div class="row">
				<div class="col-sm">
					<div>
						<span class="span1">日期</span>
						<span class="span2">门店名称</span>
						<span class="span3">金额</span>
						<span class="span4">累计星星</span>
					</div>	
					<ul>
						<li v-for='item in info'>
							<span class="span1"><img src="@/assets/svg/user/activity/phone_glass.svg"></span>
							<span class="span2">{{item.span1}}</span>
							<span class="span3">{{item.span2}}</span>
							<span class="span4">{{item.span3}}</span>
							<span class="span5"><img src="@/assets/svg/user/activity/waring.svg"></span>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<p class="fotter-p">如需了解12个月之前的交易记录，请致电我们的服务热线 <span>400-820-6998</span> 。</p>
	</div>
</template>

<script>
export default {
	data () {
		return {	
			info: [
				{span1:'2021/01/02 12:42 AM',span2:"金桥佳邻坊店(Joy Link Hub Store)",span3:'￥61.00'},
				{span1:'2021/01/02 18:00 PM',span2:"金桥佳邻坊店(Joy Link Hub Store)",span3:'￥35.00'},
				{span1:'2021/01/04 11:04 AM',span2:"金桥佳邻坊店(Joy Link Hub Store)",span3:'￥100.00'},
				{span1:'2021/01/04 10:32 PM',span2:"金桥佳邻坊店(Joy Link Hub Store)",span3:'￥38.00'},
				{span1:'2021/01/07 12:42 PM',span2:"金桥佳邻坊店(Joy Link Hub Store)",span3:'￥33.00'},
				{span1:'2021/01/09 19:31 PM PM',span2:"金桥佳邻坊店(Joy Link Hub Store)",span3:'￥76.00'},
			]
		}
	},

}
</script>

<style scoped>
	header {	
		text-align: center;
		margin: 0 auto;
	}
	header > button {
		width: 130px;
		margin: 30px 0px 20px 0px;
		color: #00a862;
		background: white;
    border: 1px solid #00a862;
		outline: none;
	}
	header > button:first-of-type {
		background: #00a862;
		color: white;
		border-radius: 20px 0px 0px 20px;
	}
	header > button:last-of-type {
		border-radius: 0px 20px 20px 0px;
	}
	header > p {
		font-size: 12px;
    font-weight: 400;
    color: rgba(0,0,0,.56);
	}

	.container {
		text-align: center;
		width: 70%;
		background: white;
		box-shadow: 0 1px 1px 1px rgba(0,0,0,.12);
	}
	.container > .row > div > div > span {
		padding: 30px 0px 20px 0px;
		font-size: 16px;
		border-bottom: 4px solid #e0e0e0;
	}
	.container > .row > div > div > .span1 {
		display: inline-block;
		width: 20%;
	}
	.container > .row > div > div > .span2 {
		display: inline-block;
		width: 40%;
	}
	.container > .row > div > div > .span3 {
		display: inline-block;
		width: 20%;
	}
	.container > .row > div > div > .span4 {
		display: inline-block;
		width: 20%;
	}	
	.container > .row ul > li  {
		padding: 20px 0px;
		margin: 0 auto;
		list-style: none;
		border-bottom: 1px solid #e0e0e0;
	}
	.container > .row ul > li:last-of-type {
		border: none;
		margin-bottom: -10px;
	}
	.container > .row ul > li > span {
		display: inline-block;
		text-align: center;
	}
	.container > .row ul > li > .span1 {
		margin-left: 1%;
		line-height: 20%;
		width: 5%;
	}
	.container > .row ul > li > .span2 {
		width: 25%;
		font-size: 16px;
	}
	.container > .row ul > li > .span3 {
		width: 30%;
		font-size: 16px;
	}
	.container > .row ul > li > .span4 {
		width: 20%;
		font-size: 22px;
		font-weight: 700;
	}
	.container > .row ul > li > .span5 {
		width: 16%;
	}

	.fotter-p {
		padding-top: 20px;
		text-align: center;
		font-size: 12px;
		color: rgba(0,0,0,.56);
	}
	.fotter-p > span {
		color: #00a862;
	}
</style>