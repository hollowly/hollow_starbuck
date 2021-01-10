<!--  -->
<template>
<div style="">
	<div class="container-fluid beverages">
		<!-- 咖啡融合冰淇淋 -->
		<div>
			<h6>咖啡融合冰淇淋</h6>
			<div class="row">
				<div class="col-sm" v-for='item in coffeePlusIceCream'>
					<oneimgbox>
						<img :src="$host + item.imgUrl" slot='img'>
						<strong slot='text'>{{item.text}}</strong>
					</oneimgbox>
				</div>
			</div>
			<hr>
		</div>

		<!-- 星巴克冷萃咖啡系列 -->
		<div>
			<h6>星巴克冷萃咖啡系列</h6>
			<div class="row">
				<div class="col-sm" v-for='item in coldBrew'>
					<oneimgbox>
						<img :src="$host + item.imgUrl" slot='img' :class="item.class">
						<strong slot='text'>{{item.text}}</strong>
					</oneimgbox>
				</div>
			</div>
			<hr>
		</div>

		<!-- 手工调制浓缩咖啡 -->
		<div>
			<h6>手工调制浓缩咖啡</h6>
			<div class="row">
				<div class="col-sm" v-for='item in espresso1'>
					<oneimgbox>
						<img :src="$host + item.imgUrl" slot='img'>
						<strong slot='text'>{{item.text}}</strong>
					</oneimgbox>
				</div>
			</div>
			<div class="row">
				<div class="col-sm" v-for='item in espresso2'>
					<oneimgbox>
						<img :src="$host + item.imgUrl" slot='img'>
						<strong slot='text'>{{item.text}}</strong>
					</oneimgbox>
				</div>
			</div>
			<div class="row">
				<div class="col-sm" v-for='item in espresso3'>
					<oneimgbox>
						<img :src="$host + item.imgUrl" slot='img' :class="item.class">
						<strong slot='text'>{{item.text}}</strong>
					</oneimgbox>
				</div>
			</div>
			<hr>
		</div>
		
		<!-- 星冰乐® -->
		<div>
			<h6>星冰乐®</h6>
			<div class="row">
				<div class="col-sm" v-for='item in frappuccinoBlendedBeverage1'>
					<oneimgbox>
						<img :src="$host + item.imgUrl" slot='img'>
						<strong slot='text'>{{item.text}}</strong>
					</oneimgbox>
				</div>
			</div>
			<div class="row">
				<div class="col-sm" v-for='item in frappuccinoBlendedBeverage2'>
					<oneimgbox>
						<img :src="$host + item.imgUrl" slot='img' :class="item.class">
						<strong slot='text'>{{item.text}}</strong>
					</oneimgbox>
				</div>
			</div>
			<hr>
		</div>

		<!-- 星巴克玩味冰调™ -->
		<div>
			<h6>星巴克玩味冰调™</h6>
			<div class="row">
				<div class="col-sm" v-for='item in modernMixology'>
					<oneimgbox>
						<img :src="$host + item.imgUrl" slot='img'>
						<strong slot='text'>{{item.text}}</strong>
					</oneimgbox>
				</div>
			</div>
			<hr>
		</div>

		<!-- 气致™冷萃咖啡 -->
		<div>
			<h6>气致™冷萃咖啡</h6>
			<div class="row">
				<div class="col-sm" v-for='item in nitroColdBrew'>
					<oneimgbox>
						<img :src="$host + item.imgUrl" slot='img' :class="item.class">
						<strong slot='text'>{{item.text}}</strong>
					</oneimgbox>
				</div>
			</div>
			<hr>
		</div>

		<!-- 经典巧克力饮品 -->
		<div>
			<h6>经典巧克力饮品</h6>
			<div class="row">
				<div class="col-sm" v-for='item in signatureChocolateBeverage'>
					<oneimgbox>
						<img :src="$host + item.imgUrl" slot='img' :class="item.class">
						<strong slot='text'>{{item.text}}</strong>
					</oneimgbox>
				</div>
			</div>
			<hr>
		</div>

		<!-- 茶瓦纳™ -->
		<div>
			<h6>茶瓦纳™</h6>
			<div class="row">
				<div class="col-sm" v-for='item in teavana1'>
					<oneimgbox>
						<img :src="$host + item.imgUrl" slot='img'>
						<strong slot='text'>{{item.text}}</strong>
					</oneimgbox>
				</div>
			</div>
			<div class="row">
				<div class="col-sm" v-for='item in teavana2'>
					<oneimgbox>
						<img :src="$host + item.imgUrl" slot='img'>
						<strong slot='text'>{{item.text}}</strong>
					</oneimgbox>
				</div>
			</div>
		</div>


	</div>
</div>
</template>

<script>
import oneimgbox from '@/components/main/menu/oneimgbox'
import { request } from '@/network/request'

//引用 Bus 来进行兄弟组件中之间通信
import Bus from '@/utils/bus'
export default {
	data () {
		return {
			coffeePlusIceCream: [], //咖啡融合冰淇淋
			coldBrew: [],	//星巴克冷萃咖啡系列
			espresso1: [],	//手工调制浓缩咖啡1
			espresso2: [],	//手工调制浓缩咖啡2
			espresso3: [],	//手工调制浓缩咖啡3
			frappuccinoBlendedBeverage1: [],	//星冰乐®1
			frappuccinoBlendedBeverage2: [],	//星冰乐®2
			modernMixology: [],	//星巴克玩味冰调™
			nitroColdBrew: [],	//气致™冷萃咖啡
			signatureChocolateBeverage: [],	//经典巧克力饮品
			teavana1: [],	//茶瓦纳™1
			teavana2: [],	//茶瓦纳™2
			text: '全部',
			istext:['全部','咖啡融合冰淇淋','星巴克冷萃咖啡系列','手工调制浓缩咖啡','星冰乐®','星巴克玩味冰调™','气致™冷萃咖啡','经典巧克力饮品','茶瓦纳™']
		}
	},
	components: {
		oneimgbox
	},
	mounted() {
		// 数据请求
		request({
			url:'/data.json',
		}).then(res => {
			this.coffeePlusIceCream = res.data.menu_beverages.coffeePlusIceCream
			this.coldBrew = res.data.menu_beverages.coldBrew
			this.espresso1 = res.data.menu_beverages.espresso1
			this.espresso2 = res.data.menu_beverages.espresso2
			this.espresso3 = res.data.menu_beverages.espresso3
			this.frappuccinoBlendedBeverage1 = res.data.menu_beverages.frappuccinoBlendedBeverage1
			this.frappuccinoBlendedBeverage2 = res.data.menu_beverages.frappuccinoBlendedBeverage2
			this.modernMixology = res.data.menu_beverages.modernMixology
			this.nitroColdBrew = res.data.menu_beverages.nitroColdBrew
			this.signatureChocolateBeverage = res.data.menu_beverages.signatureChocolateBeverage
			this.teavana1 = res.data.menu_beverages.teavana1
			this.teavana2 = res.data.menu_beverages.teavana2
		}).catch(err => {
			console.log(err);
		})
		
		// 使用 Bus 来接收 beverages 组件传过来的文本，在经过逻辑判断来进行渲染
		Bus.$on('texttitle', texttitle => {
			this.text = texttitle

			for(let i = 0; i < this.istext.length;i++) {
				if(this.text == this.istext[i]) {
					if(i == 0) {
						$('.beverages > div').show()
					} else {
						$('.beverages > div').hide()
						$('.beverages > div').eq(i-1).show()
					}
				}
			}
		})
	}
	
}
</script>

<style scoped>
	.hidden {
		display: none;
	}
	hr {
		background: rgba(0, 0, 0, 0.12);
	}
	.container-fluid {
		background:rgb(247,247,247);
		text-align: center;
		margin: 0  auto;
	}
	.container-fluid > div > h6 {
		text-align: left;
		font-weight: 700;
		color: rgba(0, 0, 0, 0.56);
		font-size: 14px;
		padding: 20px;
	}
	.container-fluid > div > .row {
		margin: 0  auto;
	}
	.container-fluid > div > .row > div {
		margin-left: 4%;
		margin-right: 4%;
	}
	
	@media screen and (max-width: 992px){
		.container-fluid > .row > div {
			width: 40%;
		}
		.container-fluid {
			margin: 90px auto;
		}
	}
	@media screen and (max-width: 593px){
		.container-fluid {
			margin: 160px auto;
		}
	}
	@media screen and (max-width: 576px){
		.container-fluid .row > div {
			width: 15% !important;
		}
	}
</style>