<!--  -->
<template>
	<div style="height:2000px">
		<a href="/register"><img src="@/assets/img/main/club/top.jpeg" class='img-fluid'></a>

		<club class="rewards">
			<img src="@/assets/img/main/club/rewards-title.png" width="260" slot='titleImg'>

			<div class="col-sm" v-for='item in rewards' slot='container'>
				<img :src="item.imgUrl" width="120">
				<h5>{{item.title}}</h5>
				<p>{{item.p}}</p>
			</div>
			<img src="@/assets/img/main/club/rewards-banner.jpg" class="img-fluid" slot='footerImg'>
		</club>

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


<!-- 
	<div>
		<div class="container-fuild">
			<slot name='titleImg'></slot>

			<div class="row">
				<slot name='container'>
				</slot>
			</div>

				<p class="treaty">详情以<span>《星享俱乐部活动的条款和条件》</span>的规定为准</p>
				<slot name='footerImg'></slot>
		</div>
	</div> -->

		<club class="stars">
			<img src="@/assets/img/main/club/stars-title.png" width="250" slot='titleImg'>

			<div class="col-sm" v-for='item in stars' slot='container'>
				<img :src="item.imgUrl" width="150">
					<ul>
						<li>购买绑定会员星礼包可直通玉星级</li>
						<li>各类奖励星星活动</li>
					</ul>
			</div>
			<img src="@/assets/img/main/club/stars-banner.png" class="img-fluid" slot='footerImg'>
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
				{imgUrl:require('@/assets/img/main/club/stars1.png')},
				{imgUrl:require('@/assets/img/main/club/stars2.png')},
				{imgUrl:require('@/assets/img/main/club/stars3.png')},	
			]
		}
	},
	components: {
		club
	}
}

</script>
<style scoped>

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
</style>