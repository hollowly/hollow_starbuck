<!--  -->
<template>
<div>
	<div class="container-fluid">

		<h6>咖啡融合冰淇淋</h6>
		<div class="row">
			<div class="col-sm" v-for='item in coffeePlusIceCream'>
				<slotone>
					<img :src="item.imgUrl" slot='img'>
					<strong slot='text'>{{item.text}}</strong>
				</slotone>
			</div>
		</div>

		<h6>星巴克冷萃咖啡系列</h6>
		<div class="row">
			<div class="col-sm" v-for='item in coldBrew'>
				<slotone>
					<img :src="item.imgUrl" slot='img'>
					<strong slot='text'>{{item.text}}</strong>
				</slotone>
			</div>
		</div>

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

	</div>


	
</div>
</template>

<script>
import slotone from './slotone'
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
				{imgUrl:require('@/assets/img/main/menu/beverages/espresso/1.jpg'),text:'冷萃冰咖啡'},
				{imgUrl:require('@/assets/img/main/menu/beverages/espresso/2.jpg'),text:'冷萃冰咖啡'},
				{imgUrl:require('@/assets/img/main/menu/beverages/espresso/3.jpg'),text:'冷萃冰咖啡'},
				{imgUrl:require('@/assets/img/main/menu/beverages/espresso/4.jpg'),text:'冷萃冰咖啡'},
			],
			espresso2: [
				{imgUrl:require('@/assets/img/main/menu/beverages/espresso/5.jpg'),text:'冷萃冰咖啡'},
				{imgUrl:require('@/assets/img/main/menu/beverages/espresso/6.jpg'),text:'冷萃冰咖啡'},
				{imgUrl:require('@/assets/img/main/menu/beverages/espresso/7.jpg'),text:'冷萃冰咖啡'},
				{imgUrl:require('@/assets/img/main/menu/beverages/espresso/8.jpg'),text:'冷萃冰咖啡'},
			]
		}
	},	
	components: {
		slotone
	}

}

</script>

<style scoped>
	.container-fluid {
		background:rgb(247,247,247);
		text-align: center;
		margin: 0  auto;
	}
	.container-fluid > h6 {
		/* width: 100%; */
		text-align: left;
		font-weight: 700;
		color: rgba(0, 0, 0, 0.56);
		/* border: 1px solid red; */
		font-size: 14px;
		padding: 20px;
	}
	.container-fluid > .row {
		margin: 0  auto;
	}
	
	.container-fluid > .row > div {
		margin-left: 4%;
		margin-right: 4%;
	}

	@media screen and (max-width: 576px){
		.container-fluid > .row > div {
			width: 40%;
		}
	}
</style>