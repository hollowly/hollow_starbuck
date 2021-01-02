<!--  -->
<template>
<div style="">
	<div class="container-fluid beverages">
		<!-- 烘焙 -->
		<div>
			<h6>烘焙</h6>
			<div class="row">
				<div class="col-sm" v-for='item in bakery1'>
					<oneimgbox>
						<img :src="item.imgUrl" slot='img'>
						<strong slot='text'>{{item.text}}</strong>
					</oneimgbox>
				</div>
			</div>
			<div class="row">
				<div class="col-sm" v-for='item in bakery2'>
					<oneimgbox>
						<img :src="item.imgUrl" slot='img'>
						<strong slot='text'>{{item.text}}</strong>
					</oneimgbox>
				</div>
			</div>
			<div class="row">
				<div class="col-sm" v-for='item in bakery3'>
					<oneimgbox>
						<img :src="item.imgUrl" slot='img'>
						<strong slot='text'>{{item.text}}</strong>
					</oneimgbox>
				</div>
			</div>
			<div class="row">
				<div class="col-sm" v-for='item in bakery4'>
					<oneimgbox>
						<img :src="item.imgUrl" slot='img'>
						<strong slot='text'>{{item.text}}</strong>
					</oneimgbox>
				</div>
			</div>
			<hr>
		</div>

		<!-- 蛋糕&甜品 -->
		<div>
			<h6>蛋糕&甜品</h6>
			<div class="row">
				<div class="col-sm" v-for='item in cakeDessert1'>
					<oneimgbox>
						<img :src="item.imgUrl" slot='img'>
						<strong slot='text'>{{item.text}}</strong>
					</oneimgbox>
				</div>
			</div>
			<div class="row">
				<div class="col-sm" v-for='item in cakeDessert2'>
					<oneimgbox>
						<img :src="item.imgUrl" slot='img'>
						<strong slot='text'>{{item.text}}</strong>
					</oneimgbox>
				</div>
			</div>
			<hr>
		</div>

		<!-- 其他美食 -->
		<div>
			<h6>其他美食</h6>
			<div class="row">
				<div class="col-sm" v-for='item in package1'>
					<oneimgbox>
						<img :src="item.imgUrl" slot='img'>
						<strong slot='text'>{{item.text}}</strong>
					</oneimgbox>
				</div>
			</div>
			<div class="row">
				<div class="col-sm" v-for='item in package2'>
					<oneimgbox>
						<img :src="item.imgUrl" slot='img'>
						<strong slot='text'>{{item.text}}</strong>
					</oneimgbox>
				</div>
			</div>
			<hr>
		</div>
		
		<!-- 三明治、帕尼尼、卷 -->
		<div>
			<h6>三明治、帕尼尼、卷</h6>
			<div class="row">
				<div class="col-sm" v-for='item in sandwich1'>
					<oneimgbox>
						<img :src="item.imgUrl" slot='img'>
						<strong slot='text'>{{item.text}}</strong>
					</oneimgbox>
				</div>
			</div>
			<div class="row">
				<div class="col-sm" v-for='item in sandwich2'>
					<oneimgbox>
						<img :src="item.imgUrl" slot='img'>
						<strong slot='text'>{{item.text}}</strong>
					</oneimgbox>
				</div>
			</div>
			<div class="row">
				<div class="col-sm" v-for='item in sandwich3'>
					<oneimgbox>
						<img :src="item.imgUrl" slot='img'>
						<strong slot='text'>{{item.text}}</strong>
					</oneimgbox>
				</div>
			</div>
			<div class="row">
				<div class="col-sm" v-for='item in sandwich4'>
					<oneimgbox>
						<img :src="item.imgUrl" slot='img'>
						<strong slot='text'>{{item.text}}</strong>
					</oneimgbox>
				</div>
			</div>
			<hr>
		</div>

		<!-- 酸奶 -->
		<div>
			<h6>酸奶</h6>
			<div class="row">
				<div class="col-sm" v-for='item in yoghurt'>
					<oneimgbox>
						<img :src="item.imgUrl" slot='img'>
						<strong slot='text'>{{item.text}}</strong>
					</oneimgbox>
				</div>
			</div>
			<hr>
		</div>

		<!-- 早安新一天 -->
		<div>
			<h6>早安新一天</h6>
			<div class="row">
				<div class="col-sm" v-for='item in nitroColdBrew'>
					<oneimgbox>
						<img :src="item.imgUrl" slot='img'>
						<strong slot='text'>{{item.text}}</strong>
					</oneimgbox>
				</div>
			</div>
			<hr>
		</div>
	</div>
</div>
</template>

<script>
import oneimgbox from '@/components/main/menu/oneimgbox'

//引用 Bus 来进行兄弟组件中之间通信
import Bus from '@/utils/bus'
export default {
	data () {
		return {
			bakery1: [
				{imgUrl:require('@/assets/img/main/menu/food/bakery/1.jpg'),text:'美式松饼'},
				{imgUrl:require('@/assets/img/main/menu/food/bakery/1.jpg'),text:'蓝莓麦芬'},
				{imgUrl:require('@/assets/img/main/menu/food/bakery/1.jpg'),text:'香浓巧克力麦芬'},
				{imgUrl:require('@/assets/img/main/menu/food/bakery/1.jpg'),text:'旋风玉桂酥'},
			],
			bakery2: [
				{imgUrl:require('@/assets/img/main/menu/food/bakery/1.jpg'),text:'法式香酥可颂'},
				{imgUrl:require('@/assets/img/main/menu/food/bakery/1.jpg'),text:'法式焦糖酥'},
				{imgUrl:require('@/assets/img/main/menu/food/bakery/1.jpg'),text:'层层榛子果仁酥'},
				{imgUrl:require('@/assets/img/main/menu/food/bakery/1.jpg'),text:'蜂蜜提子司康'},
			],
			bakery3: [
				{imgUrl:require('@/assets/img/main/menu/food/bakery/1.jpg'),text:'燕麦焦糖布丁面包'},
				{imgUrl:require('@/assets/img/main/menu/food/bakery/1.jpg'),text:'香浓巧克力可颂'},
				{imgUrl:require('@/assets/img/main/menu/food/bakery/1.jpg'),text:'提子干松饼'},
				{imgUrl:require('@/assets/img/main/menu/food/bakery/1.jpg'),text:'核桃提子软法面包'},
			],
			bakery4: [
				{imgUrl:require('@/assets/img/main/menu/food/bakery/1.jpg'),text:'红豆燕麦松饼'},
				{imgUrl:require('@/assets/img/main/menu/food/bakery/1.jpg'),text:'全麦核桃麦芬'},
				{imgUrl:'',text:''},
				{imgUrl:'',text:''},
			],
			cakeDessert1: [
				{imgUrl:require('@/assets/img/main/menu/food/cake-dessert/1.jpg'),text:'蓝莓曲奇风轻乳酪蛋糕'},
				{imgUrl:require('@/assets/img/main/menu/food/cake-dessert/1.jpg'),text:'经典瑞士卷'},
				{imgUrl:require('@/assets/img/main/menu/food/cake-dessert/1.jpg'),text:'浓醇三重黑巧克力蛋糕'},
				{imgUrl:require('@/assets/img/main/menu/food/cake-dessert/1.jpg'),text:'法式闪电泡芙'},
			],
			cakeDessert2: [
				{imgUrl:require('@/assets/img/main/menu/food/cake-dessert/1.jpg'),text:'星巴克咖啡提拉米苏蛋糕'},
				{imgUrl:require('@/assets/img/main/menu/food/cake-dessert/1.jpg'),text:'法式马卡龙'},
				{imgUrl:require('@/assets/img/main/menu/food/cake-dessert/1.jpg'),text:'纽约风浓郁重芝士蛋糕'},
				{imgUrl:'',text:''},
			],
			package1: [
				{imgUrl:require('@/assets/img/main/menu/food/package/1.jpg'),text:'腰果'},
				{imgUrl:require('@/assets/img/main/menu/food/package/1.jpg'),text:'英伦风味黄油饼干'},
				{imgUrl:require('@/assets/img/main/menu/food/package/1.jpg'),text:'混合果仁果脯'},
				{imgUrl:require('@/assets/img/main/menu/food/package/1.jpg'),text:'水果沙拉'},
			],
			package2: [
				{imgUrl:require('@/assets/img/main/menu/food/package/1.jpg'),text:'棒棒糖'},
				{imgUrl:require('@/assets/img/main/menu/food/package/1.jpg'),text:'咖啡味蛋卷'},
				{imgUrl:require('@/assets/img/main/menu/food/package/1.jpg'),text:'薄荷味口香糖（无糖）'},
				{imgUrl:require('@/assets/img/main/menu/food/package/1.jpg'),text:'薄荷味硬糖（无糖）'},
			],
			sandwich1: [
				{imgUrl:require('@/assets/img/main/menu/food/sandwich/1.jpg'),text:'焦糖浓缩咖啡星冰乐'},
				{imgUrl:require('@/assets/img/main/menu/food/sandwich/1.jpg'),text:'抹茶星冰乐'},
				{imgUrl:require('@/assets/img/main/menu/food/sandwich/1.jpg'),text:'芒果西番莲果茶星冰乐'},
				{imgUrl:require('@/assets/img/main/menu/food/sandwich/1.jpg'),text:'摩卡星冰乐'},
			],
			sandwich2: [
				{imgUrl:require('@/assets/img/main/menu/food/sandwich/1.jpg'),text:'摩卡可可碎片星冰乐'},
				{imgUrl:require('@/assets/img/main/menu/food/sandwich/1.jpg'),text:'香草风味星冰乐'},
				{imgUrl:require('@/assets/img/main/menu/food/sandwich/1.jpg'),text:'香草风味星冰乐'},
				{imgUrl:require('@/assets/img/main/menu/food/sandwich/1.jpg'),text:'香草风味星冰乐'},
			],
			sandwich3: [
				{imgUrl:require('@/assets/img/main/menu/food/sandwich/1.jpg'),text:'气炫冰山美式'},
				{imgUrl:require('@/assets/img/main/menu/food/sandwich/1.jpg'),text:'橙柚派对'},
				{imgUrl:require('@/assets/img/main/menu/food/sandwich/1.jpg'),text:'醋意桃桃'},
				{imgUrl:require('@/assets/img/main/menu/food/sandwich/1.jpg'),text:'酸柠浮冷萃'},
			],
			sandwich4: [
				{imgUrl:require('@/assets/img/main/menu/food/sandwich/1.jpg'),text:'气致™冷萃咖啡'},
				{imgUrl:require('@/assets/img/main/menu/food/sandwich/1.jpg'),text:'气致™冷萃咖啡'},
				{imgUrl:require('@/assets/img/main/menu/food/sandwich/1.jpg'),text:'气致™冷萃咖啡'},
				{imgUrl:require('@/assets/img/main/menu/food/sandwich/1.jpg'),text:'气致™冷萃咖啡'},
			],
			yoghurt: [
				{imgUrl:require('@/assets/img/main/menu/food/yoghurt/1.jpg'),text:'谷物组合希腊式风味酸奶（混合莓果）'},
				{imgUrl:require('@/assets/img/main/menu/food/yoghurt/2.jpg'),text:'谷物组合希腊式风味酸奶（黄桃）'},
				{imgUrl:'',text:''},
				{imgUrl:'',text:''},
			],
			text: '全部',
			istext:['全部','烘焙','蛋糕&甜品','其他美食','三明治、帕尼尼、卷','酸奶','早安新一天']
		}
	},
	components: {
		oneimgbox
	},
	mounted() {
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