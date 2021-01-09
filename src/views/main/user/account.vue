<!--  -->
<template>
	<div style="width:100%; height:2000px; background:rgb(248,248,248)">
		<wrapper></wrapper>
		<indexframe>
			<h4 slot='titletext'>管理星礼卡</h4>
			<strong slot='titlenum'>24</strong>
			<img src="@/assets/svg/user/index/card-title.svg" width="30" slot='titleimg'>
			<div slot='main'>
				<div class="row main">
					<div class="col-sm scroll">
						<div class="card-item">
							<p>￥200</p>
							<img src="@/assets/img/main/user/star_gift_card/1.jpg">
							<span>7310 2332 6124 1994</span>
						</div>
						<div class="card-item">
							<p>￥200</p>
							<img src="@/assets/img/main/user/star_gift_card/2.jpg">
							<span>7310 2332 6124 1994</span>
						</div>
					</div>
				</div>
			</div>
			<router-link to="/account/Star-gift-card" slot='footterUrl'>查看所有卡片</router-link>
		</indexframe>

		<indexframe>
			<h4 slot='titletext'>星享好礼</h4>
			<strong slot='titlenum'>6</strong>
			<img src="@/assets/svg/user/index/gift.svg" width="30" slot='titleimg'>
			<div slot="main">
				<ul class="mainul">
					<li v-for='item in star_gift'>
						<img :src="item.imgUrl">
						<span>{{item.titletext}}</span><br><span>{{item.date}}</span>
					</li>
				</ul>
			</div>
			<router-link to="/account/rewards" slot='footterUrl'>查看好礼详情</router-link>
		</indexframe>
		
		<indexframe>
			<h4 slot='titletext'>消费记录</h4>
			<img src="@/assets/svg/user/index/cardlittle.svg" width="30" slot='titleimg'>
			<div slot="main">
				<ul class="mainul">
					<li v-for='item in records_consumption'>
						<img :src="item.imgUrl">
						<span style="float:right">{{item.money}}</span>
						<span>{{item.titletext}}</span><br><span>{{item.date}}</span>
					</li>
				</ul>
			</div>
			<router-link to="/account/rewards" slot='footterUrl'>查看更多</router-link>
		</indexframe>



	</div>
</template>

<script>
import wrapper from '@/components/main/user/wrapper'
import indexframe from '@/components/main/user/indexframe'
export default {
	data () {
		return {
			star_gift: [
				{imgUrl:require("@/assets/svg/user/index/glass-brown.svg"),titletext:'玉星晋级饮品券',date:'2021/01/10'},
				{imgUrl:require("@/assets/svg/user/index/glass-brown.svg"),titletext:'星巴克玩味冰调™立减5元',date:'2021/01/10'},
				{imgUrl:require("@/assets/svg/user/index/glass-brown.svg"),titletext:'星冰粽单包减28元',date:'2021/01/11'},
				{imgUrl:require("@/assets/svg/user/index/glass-brown.svg"),titletext:'同笔交易两包或以上星冰粽减66元',date:'2021/01/11'},
			],
			records_consumption: [
				{imgUrl:require("@/assets/svg/user/index/glass-black.svg"),titletext:'金桥佳邻坊店(Joy Link Hub Store)',date:'2021/01/3',money:'￥61.00'},
				{imgUrl:require("@/assets/svg/user/index/glass-black.svg"),titletext:'金桥佳邻坊店(Joy Link Hub Store)',date:'2021/01/5',money:'￥35.00'},
				{imgUrl:require("@/assets/svg/user/index/glass-black.svg"),titletext:'金桥佳邻坊店(Joy Link Hub Store)',date:'2021/01/6',money:'￥100.00'},
				{imgUrl:require("@/assets/svg/user/index/glass-black.svg"),titletext:'金桥佳邻坊店(Joy Link Hub Store)',date:'2021/01/8',money:'￥38.00'},
			]
		}
	},
	components: {
		wrapper,
		indexframe
	},
}

</script>
<style scoped>
	.mainul {
		list-style: none;
	}
	.mainul > li {
		padding: 10px 0px;
		font-size: 16px;
		border-bottom: 1px solid rgba(0,0,0,.12);
	}
	.mainul > li:first-child {
		padding-top: 20px;
	}
	.mainul > li:last-child {
		border-bottom: 0px;
	}
	.mainul > li > img {
		width: 30px;
		transform: translateY(10px);
	}
	.mainul > li > span:last-child {
		font-size: 12px;
		padding-left: 30px;
	}
</style>