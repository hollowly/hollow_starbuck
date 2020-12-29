<!--  -->
<template>
	<div style="height:5000px">
		<a href="/register"><img src="@/assets/img/main/club/top.jpeg" class='img-fluid'></a>

		<!-- 星享俱乐部 -->
		<club class="rewards">
			<img src="@/assets/img/main/club/rewards-title.png" width="260" slot='titleImg'>

			<div class="col-sm" v-for='item in rewards' slot='container'>
				<img :src="item.imgUrl" width="120">
				<h5>{{item.title}}</h5>
				<p>{{item.p}}</p>
			</div>
			<img src="@/assets/img/main/club/rewards-banner.jpg" class="img-fluid" slot='footerImg'>
		</club>

		<!-- 积分升级 -->
		<club class="upgrade">
			<img src="@/assets/img/main/club/upgrade-title.png" width="380" slot='titleImg'>

			<div class="col-sm" v-for='item in upgrade' slot='container'>
				<img :src="item.imgUrl" width="150">
				<p>{{item.p1_1}}<span>{{item.p1_span}}</span>{{item.p1_2}}</p>
				<p>{{item.p2_1}}<span style="color:#00A862">{{item.p2_span}}</span>{{item.p2_2}}</p>
				<p>{{item.p3_1}}<span style="color:#C2A661">{{item.p3_span}}</span>{{item.p3_2}}</p>
			</div>
			<img src="@/assets/img/main/club/upgrade-banner.jpg" class="img-fluid" slot='footerImg'>
		</club>

		<!-- 等级会员权益 -->
		<club class="stars">
			<img src="@/assets/img/main/club/stars-title.png" width="240" slot='titleImg'>
			<div class="col-sm" v-for='item in stars' slot='container'>
				<img :src="item.imgUrl" width="150">
				<div></div>
					<ul>
						<li>{{item.text[0]}}</li>
						<li>{{item.text[1]}}</li>
						<li>{{item.text[2]}}</li>
						<li>{{item.text[3]}}</li>
						<li>{{item.text[4]}}</li>
					</ul>
			</div>
			<img src="@/assets/img/main/club/stars-banner.png" class="img-fluid" slot='footerImg'>
		</club>

		<!-- 会员星礼包 -->
		<div class="container-fuild giftbag">
			<img src="@/assets/img/main/club/giftbag-title.png" width="320">
			<div class="row">
				<div class="col-sm">
					<img src="@/assets/img/main/club/giftbag1.png" width="70%">
				</div>
				<div class="col-sm">
					<img src="@/assets/img/main/club/giftbag2.png" width="80%">
				</div>
				<div class="col-sm">
					<h6>选购会员星礼包，丰富好礼随心享：</h6>
					<ul>
						<li>6张电子好礼券*，适用多种商品种类</li>
						<li>附赠一张精美星礼卡**，可绑定至星巴克中国App 内充值并支付</li>
						<li>银星级会员初次将会员星礼包成功绑定至帐户后，即可升级成为玉星级会员</li>
					</ul>
					<p>* 每份券将在添加至您的星享俱乐部帐户的当天生效，有效期为90天。** 附赠星礼卡的初始余额为0元。</p>
				</div>
			</div>
				<img src="@/assets/img/main/club/giftbag-banner.jpg" class="img-fluid" slot='footerImg'>
		</div>

		<!-- 更多获得星星的途径 -->
		<club class="channel">
			<img src="@/assets/img/main/club/channel-title.png" width="280" slot='titleImg'>

			<div class="col-sm" v-for='item in channel' slot='container'>
				<img :src="item.imgUrl" height="70">
				<p>{{item.p1}}</p>
				<p>{{item.p2}}</p>
			</div>
			<img src="@/assets/img/main/club/channel-banner.jpg" class="img-fluid" slot='footerImg'>
		</club>


	</div>
</template>
<script>
import club from '@/components/main/club'
export default {
	data () {
		return {
			rewards: [
				{imgUrl:require('@/assets/img/main/club/rewards1.png'),title:'消费累积星星',p:'每累计消费￥50元累积一颗星星使用星巴克指定的方式，可享加速积星'},
				{imgUrl:require('@/assets/img/main/club/rewards2.png'),title:'积星升级 好礼享不停',p:''},
				{imgUrl:require('@/assets/img/main/club/rewards3.png'),title:'会员专享星星奖励活动',p:''},
				{imgUrl:require('@/assets/img/main/club/rewards4.png'),title:'星星兑换丰富好礼',p:''},
			],
			upgrade: [
				{imgUrl:require('@/assets/img/main/club/upgrade1.png'),p1_1:'注册星享俱乐部帐户',p1_span:'',p1_2:'',p2_1:'即成为',p2_span:'银星级',p2_2:'会员',p3_1:'可开始消费积星星',p3_span:'',p3_2:''},
				{imgUrl:require('@/assets/img/main/club/upgrade4.png'),p1_1:'累积',p1_span:'4',p1_2:'颗星星',p2_1:'升级至',p2_span:'玉星级',p2_2:'会员'},
				{imgUrl:require('@/assets/img/main/club/upgrade20.png'),p1_1:'玉星级',p2_1:'再累积',p2_span:'16',p2_2:'颗星星',p3_1:'升级至',p3_span:'金星级',p3_2:'会员'},
			],
			stars: [
				{imgUrl:require('@/assets/img/main/club/stars1.png'),text:['购买绑定会员星礼包可直通玉星级','各类奖励星星活动']},
				{imgUrl:require('@/assets/img/main/club/stars2.png'),text:['玉星晋级饮品券','金星在望饮品券','生日饮品券','永享玉星级保级','各类奖励星星活动']},
				{imgUrl:require('@/assets/img/main/club/stars3.png'),text:['金星晋级饮品券','周年庆饮品券','生日饮品券','永享玉星级保级','好礼星星兑换','各类奖励星星活动']},	
			],
			giftbag: [
				{imgUrl:require('@/assets/img/main/club/giftbag1.png')},
				{imgUrl:require('@/assets/img/main/club/giftbag2.png')},
			],
			channel: [
				{imgUrl:require('@/assets/img/main/club/channel1.png'),p1:'星巴克门店',p2:''},
				{imgUrl:require('@/assets/img/main/club/channel2.png'),p1:'专星送™',p2:'（仅限已开通门店）'},
				{imgUrl:require('@/assets/img/main/club/channel3.png'),p1:'啡快™',p2:'（仅限已开通门店）'},
				{imgUrl:require('@/assets/img/main/club/channel4.png'),p1:'星巴克天猫',p2:'会员旗舰店'},
				{imgUrl:require('@/assets/img/main/club/channel5.png'),p1:'星星奖励',p2:'活动'},
			]
		}
	},
	components: {
		club,
	}
}

</script>
<style scoped>
/* 默认样式 */
.container-fuild {
	margin: 0 auto;
	padding-top: 30px;
	text-align: center;
	font-family: "Gotham", Helvetica, Arial, PingFangSC-Regular, "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
}
.container-fuild > .row {
	margin-top: 30px;
	width: 100%;
	margin-left:0px;
}
/* 星享俱乐部 */
	.rewards {
		background: #023529;
		color: white;
	}
	.rewards::before {
		content: '';
		position: relative;
		top: 14px;
		left: 48.5%;
		width: 2px;
		border-width: 15px;
		border-style: solid;
		border-color: #14767c transparent transparent transparent;
	}
	/* 积分升级 */
	.upgrade {
		background: #EBF3F5;
		color: black;
	}
	.upgrade p {
		font-size: 16px !important;
		padding: 0 !important;
	}
	.upgrade .row p span{
		font-weight: 700;
	}
	/* 等级会员权益 */
	ul > li {
		list-style: none;
		padding: 5px 0px;
		font-size: 15px;
	}
	.stars .row > div > div {
		width: 30px;
		height: 3px;
		margin: 0 auto;
		margin-top: 20px;
		margin-bottom: 10px;
		border-radius: 10px;
		background: #C2A661;
	}
	/* 会员星礼包 */
	.giftbag > div > div  > img {
		display: inline-block;
		transform: translateY(20%);
		vertical-align: middle;
	}
	.giftbag > div > div > h6 {
		font-weight: 700;
	}
	.giftbag > div > div > p {
		font-size: 12px;
	}
	/* 多种获得星星的图片 */
	.channel {
		background: #023529;
		color: white;
	}
	.channel > div > img {
		margin-top: 5px;
	}
	.channel > div > div > div img {
		margin: 10px 0px 5px 0px;
	}
</style>