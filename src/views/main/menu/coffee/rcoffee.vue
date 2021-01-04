<!--  -->
<template>
<div style="">
	<div class="container-fluid beverages">

		<!-- 中度烘焙 -->
		<div>
			<h6>中度烘焙</h6>
			<div class="row">
				<div class="col-sm" v-for='item in mediumRoast1'>
					<oneimgbox>
						<img :src="item.imgUrl" slot='img'>
						<strong slot='text'>{{item.text}}</strong>
					</oneimgbox>
				</div>
			</div>
			<div class="row">
				<div class="col-sm" v-for='item in mediumRoast2'>
					<oneimgbox>
						<img :src="item.imgUrl" slot='img'>
						<strong slot='text'>{{item.text}}</strong>
					</oneimgbox>
				</div>
			</div>
			<hr>
		</div>

		<!-- 深度烘焙 -->
		<div>
			<h6>深度烘焙</h6>
			<div class="row">
				<div class="col-sm" v-for='item in darkRoast1'>
					<oneimgbox>
						<img :src="item.imgUrl" slot='img'>
						<strong slot='text'>{{item.text}}</strong>
					</oneimgbox>
				</div>
			</div>
			<div class="row">
				<div class="col-sm" v-for='item in darkRoast2'>
					<oneimgbox>
						<img :src="item.imgUrl" slot='img'>
						<strong slot='text'>{{item.text}}</strong>
					</oneimgbox>
				</div>
			</div>
			<hr>
		</div>

		<!-- VIA® DAIRY -->
		<div>
			<h6>VIA® DAIRY</h6>
			<div class="row">
				<div class="col-sm" v-for='item in viaDairy'>
					<oneimgbox>
						<img :src="item.imgUrl" slot='img'>
						<strong slot='text'>{{item.text}}</strong>
					</oneimgbox>
				</div>
			</div>
			<hr>
		</div>
		
		<!-- VIA® BLACK -->
		<div>
			<h6>VIA® BLACK</h6>
			<div class="row">
				<div class="col-sm" v-for='item in viaBlack'>
					<oneimgbox>
						<img :src="item.imgUrl" slot='img'>
						<strong slot='text'>{{item.text}}</strong>
					</oneimgbox>
				</div>
			</div>
			<hr>
		</div>

		<!-- 中度烘焙® -->
		<div>
			<h6>中度烘焙®</h6>
			<div class="row">
				<div class="col-sm" v-for='item in mediumRoastOne'>
					<oneimgbox>
						<img :src="item.imgUrl" slot='img'>
						<strong slot='text'>{{item.text}}</strong>
					</oneimgbox>
				</div>
			</div>
			<hr>
		</div>

		<!-- 深度烘焙® -->
		<div>
			<h6>深度烘焙®</h6>
			<div class="row">
				<div class="col-sm" v-for='item in darkRoastOne'>
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
			mediumRoast1: [
				{imgUrl:require('@/assets/img/main/menu/coffee/medium-roast/1.jpg'),text:'星巴克®凤舞祥云综合咖啡豆'},
				{imgUrl:require('@/assets/img/main/menu/coffee/medium-roast/2.jpg'),text:'星巴克®派克市场烘焙咖啡豆'},
				{imgUrl:require('@/assets/img/main/menu/coffee/medium-roast/3.jpg'),text:'星巴克®肯亚咖啡豆'},
				{imgUrl:require('@/assets/img/main/menu/coffee/medium-roast/4.jpg'),text:'星巴克®首选咖啡豆'},
			],
			mediumRoast2: [
				{imgUrl:require('@/assets/img/main/menu/coffee/medium-roast/5.jpg'),text:'星巴克®危地马拉安提瓜咖啡豆'},
				{imgUrl:require('@/assets/img/main/menu/coffee/medium-roast/6.jpg'),text:'星巴克®埃塞俄比亚咖啡豆'},
				{imgUrl:require('@/assets/img/main/menu/coffee/medium-roast/7.jpg'),text:'星巴克®哥伦比亚咖啡豆'},
				{imgUrl:require('@/assets/img/main/menu/coffee/medium-roast/8.jpg'),text:'星巴克®早餐综合咖啡豆'},
			],
			darkRoast1: [
				{imgUrl:require('@/assets/img/main/menu/coffee/dark-roast/1.jpg'),text:'星巴克®苏门答腊咖啡豆'},
				{imgUrl:require('@/assets/img/main/menu/coffee/dark-roast/2.jpg'),text:'星巴克®低因祥龙综合咖啡豆'},
				{imgUrl:require('@/assets/img/main/menu/coffee/dark-roast/3.jpg'),text:'星巴克®意式烘焙咖啡豆'},
				{imgUrl:require('@/assets/img/main/menu/coffee/dark-roast/4.jpg'),text:'星巴克®浓缩烘焙咖啡豆'},
			],
			darkRoast2: [
				{imgUrl:require('@/assets/img/main/menu/coffee/dark-roast/5.jpg'),text:'星巴克®佛罗娜咖啡豆'},
				{imgUrl:'',text:''},
				{imgUrl:'',text:''},
				{imgUrl:'',text:''},
			],
			viaDairy: [
				{imgUrl:require('@/assets/img/main/menu/coffee/via-dairy/1.jpg'),text:'星巴克VIA®香草拿铁风味免煮咖啡固体饮料'},
				{imgUrl:require('@/assets/img/main/menu/coffee/via-dairy/2.jpg'),text:'星巴克VIA®焦糖拿铁风味免煮咖啡固体饮料'},
				{imgUrl:require('@/assets/img/main/menu/coffee/via-dairy/3.jpg'),text:'星巴克VIA®摩卡风味免煮咖啡固体饮料'},
				{imgUrl:'',text:''},
			],
			viaBlack: [
				{imgUrl:require('@/assets/img/main/menu/coffee/via-black/1.jpg'),text:'星巴克VIA®意式烘焙免煮咖啡'},
				{imgUrl:require('@/assets/img/main/menu/coffee/via-black/2.jpg'),text:'星巴克VIA®哥伦比亚免煮咖啡'},
				{imgUrl:'',text:''},
				{imgUrl:'',text:''},
			],
			zhenxuanCoffee1: [
				{imgUrl:require('@/assets/img/main/menu/coffee/zhenxuan-coffee/1.jpg'),text:'星巴克臻选™ 苏门答腊瓦哈纳庄园咖啡豆'},
				{imgUrl:require('@/assets/img/main/menu/coffee/zhenxuan-coffee/2.jpg'),text:'星巴克臻选™ 埃塞俄比亚比塔庄园咖啡豆'},
				{imgUrl:require('@/assets/img/main/menu/coffee/zhenxuan-coffee/3.jpg'),text:'星巴克臻选™ 中国云南普洱保山综合咖啡豆'},
				{imgUrl:require('@/assets/img/main/menu/coffee/zhenxuan-coffee/4.jpg'),text:'星巴克臻选™ 中国云南晴开农场咖啡豆'},
			],
			zhenxuanCoffee2: [
				{imgUrl:require('@/assets/img/main/menu/coffee/zhenxuan-coffee/1.jpg'),text:'星巴克臻选™ 哥伦比亚圣洛克蒙克斯咖啡豆'},
				{imgUrl:'',text:''},
				{imgUrl:'',text:''},
				{imgUrl:'',text:''},
			],
			mediumRoastOne: [
				{imgUrl:require('@/assets/img/main/menu/coffee/medium-roast-one/1.jpg'),text:'星巴克ORIGAMI™便携式滴滤咖啡（研磨咖啡粉）星巴克®派克市场烘焙咖啡系列'},
				{imgUrl:'',text:''},
				{imgUrl:'',text:''},
				{imgUrl:'',text:''},
			],
			darkRoastOne: [
				{imgUrl:require('@/assets/img/main/menu/coffee/dark-roast-one/1.jpg'),text:'星巴克ORIGAMI™便携式滴滤咖啡（研磨咖啡粉）星巴克®佛罗娜烘焙咖啡系列'},
				{imgUrl:'',text:''},
				{imgUrl:'',text:''},
				{imgUrl:'',text:''},
			],
			text: '全部',
			istext:['全部','中度烘焙','深度烘焙','VIA® DAIRY','VIA® BLACK','中度烘焙®','深度烘焙®']
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