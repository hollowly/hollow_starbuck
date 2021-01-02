<!--  -->
<template>
<div>
	<div class="container-fluid beverages">
		<!-- 咖啡融合冰淇淋 -->
		<div>
			<h6>咖啡融合冰淇淋</h6>
			<div class="row">
				<div class="col-sm" v-for='item in coffeePlusIceCream'>
					<slotone>
						<img :src="item.imgUrl" slot='img'>
						<strong slot='text'>{{item.text}}</strong>
					</slotone>
				</div>
			</div>
			<hr>
		</div>

		<!-- 星巴克冷萃咖啡系列 -->
		<div>
			<h6>星巴克冷萃咖啡系列</h6>
			<div class="row">
				<div class="col-sm" v-for='item in coldBrew'>
					<slotone>
						<img :src="item.imgUrl" slot='img'>
						<strong slot='text'>{{item.text}}</strong>
					</slotone>
				</div>
			</div>
			<hr>
		</div>

		<!-- 手工调制浓缩咖啡 -->
		<div>
			<h6>手工调制浓缩咖啡</h6>
			<div class="row">
				<div class="col-sm" v-for='item in espresso1'>
					<slotone>
						<img :src="item.imgUrl" slot='img'>
						<strong slot='text'>{{item.text}}</strong>
					</slotone>
				</div>
			</div>
			<div class="row">
				<div class="col-sm" v-for='item in espresso2'>
					<slotone>
						<img :src="item.imgUrl" slot='img'>
						<strong slot='text'>{{item.text}}</strong>
					</slotone>
				</div>
			</div>
			<div class="row">
				<div class="col-sm" v-for='item in espresso3'>
					<slotone>
						<img :src="item.imgUrl" slot='img'>
						<strong slot='text'>{{item.text}}</strong>
					</slotone>
				</div>
			</div>
			<hr>
		</div>
		
		<!-- 星冰乐® -->
		<div>
			<h6>星冰乐®</h6>
			<div class="row">
				<div class="col-sm" v-for='item in frappuccinoBlendedBeverage1'>
					<slotone>
						<img :src="item.imgUrl" slot='img'>
						<strong slot='text'>{{item.text}}</strong>
					</slotone>
				</div>
			</div>
			<div class="row">
				<div class="col-sm" v-for='item in frappuccinoBlendedBeverage2'>
					<slotone>
						<img :src="item.imgUrl" slot='img'>
						<strong slot='text'>{{item.text}}</strong>
					</slotone>
				</div>
			</div>
			<hr>
		</div>

		<!-- 星巴克玩味冰调™ -->
		<div>
			<h6>星巴克玩味冰调™</h6>
			<div class="row">
				<div class="col-sm" v-for='item in modernMixology'>
					<slotone>
						<img :src="item.imgUrl" slot='img'>
						<strong slot='text'>{{item.text}}</strong>
					</slotone>
				</div>
			</div>
			<hr>
		</div>

		<!-- 气致™冷萃咖啡 -->
		<div>
			<h6>气致™冷萃咖啡</h6>
			<div class="row">
				<div class="col-sm" v-for='item in nitroColdBrew'>
					<slotone>
						<img :src="item.imgUrl" slot='img'>
						<strong slot='text'>{{item.text}}</strong>
					</slotone>
				</div>
			</div>
			<hr>
		</div>

		<!-- 经典巧克力饮品 -->
		<div>
			<h6>经典巧克力饮品</h6>
			<div class="row">
				<div class="col-sm" v-for='item in signatureChocolateBeverage'>
					<slotone>
						<img :src="item.imgUrl" slot='img'>
						<strong slot='text'>{{item.text}}</strong>
					</slotone>
				</div>
			</div>
			<hr>
		</div>

		<!-- 茶瓦纳™ -->
		<div>
			<h6>茶瓦纳™</h6>
			<div class="row">
				<div class="col-sm" v-for='item in teavana1'>
					<slotone>
						<img :src="item.imgUrl" slot='img'>
						<strong slot='text'>{{item.text}}</strong>
					</slotone>
				</div>
			</div>
			<div class="row">
				<div class="col-sm" v-for='item in teavana2'>
					<slotone>
						<img :src="item.imgUrl" slot='img'>
						<strong slot='text'>{{item.text}}</strong>
					</slotone>
				</div>
			</div>
		</div>


	</div>
</div>
</template>

<script>
import slotone from './slotone'

//引用 Bus 来进行兄弟组件中之间通信
import Bus from '@/utils/bus'
export default {
	data () {
		return {
			coffeePlusIceCream: [
				{imgUrl:require('@/assets/img/main/menu/beverages/coffee-plus-ice-cream/1.jpg'),text:'阿馥奇朵™'},
				{imgUrl:require('@/assets/img/main/menu/beverages/coffee-plus-ice-cream/2.jpg'),text:'麦芽雪冷萃™'},
				{imgUrl:require('@/assets/img/main/menu/beverages/coffee-plus-ice-cream/3.jpg'),text:'冷萃浮乐朵™'},
				{imgUrl:require('@/assets/img/main/menu/beverages/coffee-plus-ice-cream/4.jpg'),text:'气致™冷萃浮乐朵™'},
			],
			coldBrew: [
				{imgUrl:require('@/assets/img/main/menu/beverages/cold-brew/1.jpg'),text:'冷萃冰咖啡'},
				{imgUrl:require('@/assets/img/main/menu/beverages/cold-brew/2.jpg'),text:'轻甜奶油冷萃'},
				{imgUrl:require('@/assets/img/main/menu/beverages/cold-brew/3.jpg'),text:'绵云冷萃'},
				{imgUrl:'',text:''},
			],
			espresso1: [
				{imgUrl:require('@/assets/img/main/menu/beverages/espresso/1.jpg'),text:'美式咖啡（热/冷）'},
				{imgUrl:require('@/assets/img/main/menu/beverages/espresso/2.jpg'),text:'拿铁（热/冷）'},
				{imgUrl:require('@/assets/img/main/menu/beverages/espresso/3.jpg'),text:'摩卡（热/冷)'},
				{imgUrl:require('@/assets/img/main/menu/beverages/espresso/4.jpg'),text:'卡布奇诺（热/冷）'},
			],
			espresso2: [
				{imgUrl:require('@/assets/img/main/menu/beverages/espresso/5.jpg'),text:'焦糖玛奇朵（热/冷）'},
				{imgUrl:require('@/assets/img/main/menu/beverages/espresso/6.jpg'),text:'浓缩咖啡'},
				{imgUrl:require('@/assets/img/main/menu/beverages/espresso/7.jpg'),text:'馥芮白™'},
				{imgUrl:require('@/assets/img/main/menu/beverages/espresso/8.jpg'),text:'榛果风味拿铁（热/冷）'},
			],
			espresso3: [
				{imgUrl:require('@/assets/img/main/menu/beverages/espresso/9.jpg'),text:'香草风味拿铁（热/冷）'},
				{imgUrl:'',text:''},
				{imgUrl:'',text:''},
				{imgUrl:'',text:''},
			],
			frappuccinoBlendedBeverage1: [
				{imgUrl:require('@/assets/img/main/menu/beverages/frappuccino-blended-beverage/1.jpg'),text:'焦糖浓缩咖啡星冰乐'},
				{imgUrl:require('@/assets/img/main/menu/beverages/frappuccino-blended-beverage/2.jpg'),text:'抹茶星冰乐'},
				{imgUrl:require('@/assets/img/main/menu/beverages/frappuccino-blended-beverage/3.jpg'),text:'芒果西番莲果茶星冰乐'},
				{imgUrl:require('@/assets/img/main/menu/beverages/frappuccino-blended-beverage/4.jpg'),text:'摩卡星冰乐'},
			],
			frappuccinoBlendedBeverage2: [
				{imgUrl:require('@/assets/img/main/menu/beverages/frappuccino-blended-beverage/5.jpg'),text:'摩卡可可碎片星冰乐'},
				{imgUrl:require('@/assets/img/main/menu/beverages/frappuccino-blended-beverage/6.jpg'),text:'香草风味星冰乐'},
				{imgUrl:'',text:''},
				{imgUrl:'',text:''},
			],
			modernMixology: [
				{imgUrl:require('@/assets/img/main/menu/beverages/modern-mixology/1.jpg'),text:'气炫冰山美式'},
				{imgUrl:require('@/assets/img/main/menu/beverages/modern-mixology/2.jpg'),text:'橙柚派对'},
				{imgUrl:require('@/assets/img/main/menu/beverages/modern-mixology/3.jpg'),text:'醋意桃桃'},
				{imgUrl:require('@/assets/img/main/menu/beverages/modern-mixology/4.jpg'),text:'酸柠浮冷萃'},
			],
			nitroColdBrew: [
				{imgUrl:require('@/assets/img/main/menu/beverages/nitro-cold-brew/1.jpg'),text:'气致™冷萃咖啡'},
				{imgUrl:'',text:''},
				{imgUrl:'',text:''},
				{imgUrl:'',text:''},
			],
			signatureChocolateBeverage: [
				{imgUrl:require('@/assets/img/main/menu/beverages/signature-chocolate-beverage/1.jpg'),text:'经典巧克力饮品（热/冷）'},
				{imgUrl:'',text:''},
				{imgUrl:'',text:''},
				{imgUrl:'',text:''},
			],
			teavana1: [
				{imgUrl:require('@/assets/img/main/menu/beverages/teavana/1.jpg'),text:'红茶拿铁（热/冷）'},
				{imgUrl:require('@/assets/img/main/menu/beverages/teavana/2.jpg'),text:'抹茶拿铁（热/冷）'},
				{imgUrl:require('@/assets/img/main/menu/beverages/teavana/3.jpg'),text:'茶瓦纳™ 冰摇柚柚蜂蜜红茶'},
				{imgUrl:require('@/assets/img/main/menu/beverages/teavana/4.jpg'),text:'冰摇红莓黑加仑茶'},
			],
			teavana2: [
				{imgUrl:require('@/assets/img/main/menu/beverages/teavana/5.jpg'),text:'冰摇芒果花草茶'},
				{imgUrl:require('@/assets/img/main/menu/beverages/teavana/6.jpg'),text:'茶瓦纳™冰摇桃桃乌龙茶'},
				{imgUrl:require('@/assets/img/main/menu/beverages/teavana/7.jpg'),text:'梨光清润路芭茶'},
				{imgUrl:require('@/assets/img/main/menu/beverages/teavana/8.jpg'),text:'橘香柚柚花草茶'},
			],
			text: '全部',
			istext:['全部','咖啡融合冰淇淋','星巴克冷萃咖啡系列','手工调制浓缩咖啡','星冰乐®','星巴克玩味冰调™','气致™冷萃咖啡','经典巧克力饮品','茶瓦纳™']
		}
	},
	components: {
		slotone
	},
	mounted() {
		Bus.$on('texttitle', texttitle => {
			this.text = texttitle

			for(let i = 0; i < this.istext.length;i++) {
				if(this.text == this.istext[i]) {
					console.log(i);
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
	hr {
		background: rgba(0, 0, 0, 0.12);
	}
	.container-fluid {
		background:rgb(247,247,247);
		text-align: center;
		margin: 0  auto;
	}
	.container-fluid > div > h6 {
		/* width: 100%; */
		text-align: left;
		font-weight: 700;
		color: rgba(0, 0, 0, 0.56);
		/* border: 1px solid red; */
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

	@media screen and (max-width: 576px){
		.container-fluid > .row > div {
			width: 40%;
		}
	}
</style>