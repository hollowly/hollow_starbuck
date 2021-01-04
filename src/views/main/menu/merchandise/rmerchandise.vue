<!--  -->
<template>
<div style="">
	<div class="container-fluid beverages">
		<!-- 常规产品 -->
		<div>
			<h6>常规产品</h6>
			<div class="row">
				<div class="col-sm" v-for='item in conventionalProducts1'>
					<oneimgbox>
						<img :src="item.imgUrl" slot='img'>
						<strong slot='text'>{{item.text}}</strong>
					</oneimgbox>
				</div>
			</div>
			<div class="row">
				<div class="col-sm" v-for='item in conventionalProducts2'>
					<oneimgbox>
						<img :src="item.imgUrl" slot='img'>
						<strong slot='text'>{{item.text}}</strong>
					</oneimgbox>
				</div>
			</div>
			<div class="row">
				<div class="col-sm" v-for='item in conventionalProducts3'>
					<oneimgbox>
						<img :src="item.imgUrl" slot='img'>
						<strong slot='text'>{{item.text}}</strong>
					</oneimgbox>
				</div>
			</div>
			<div class="row">
				<div class="col-sm" v-for='item in conventionalProducts4'>
					<oneimgbox>
						<img :src="item.imgUrl" slot='img'>
						<strong slot='text'>{{item.text}}</strong>
					</oneimgbox>
				</div>
			</div>
			<hr>
		</div>

		<!-- 臻选产品 -->
		<div>
			<h6>臻选产品</h6>
			<div class="row">
				<div class="col-sm" v-for='item in zhenxuanProducts'>
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
			conventionalProducts1: [
				{imgUrl:require('@/assets/img/main/menu/merchandise/conventional-products/1.jpg'),text:'12oz 烫金品牌黑色马克杯'},
				{imgUrl:require('@/assets/img/main/menu/merchandise/conventional-products/2.jpg'),text:'银色/白色亮面品牌桌面杯'},
				{imgUrl:require('@/assets/img/main/menu/merchandise/conventional-products/3.jpg'),text:'12oz 彰显本色黑色/深灰不锈钢桌面杯'},
				{imgUrl:require('@/assets/img/main/menu/merchandise/conventional-products/4.jpg'),text:'12oz 纯白磨砂玻璃杯'},
			],
			conventionalProducts2: [
				{imgUrl:require('@/assets/img/main/menu/merchandise/conventional-products/5.jpg'),text:'12oz 烫金品牌白色马克杯'},
				{imgUrl:require('@/assets/img/main/menu/merchandise/conventional-products/6.jpg'),text:'16oz 烫金品牌黑色马克杯'},
				{imgUrl:require('@/assets/img/main/menu/merchandise/conventional-products/7.jpg'),text:'16oz 原木黑色拎绳不锈钢保温杯'},
				{imgUrl:require('@/assets/img/main/menu/merchandise/conventional-products/8.jpg'),text:'16oz 彰显本色黑色/深灰不锈钢随行杯'},
			],
			conventionalProducts3: [
				{imgUrl:require('@/assets/img/main/menu/merchandise/conventional-products/9.jpg'),text:'16oz 烫金品牌白色马克杯'},
				{imgUrl:require('@/assets/img/main/menu/merchandise/conventional-products/10.jpg'),text:'3oz 烫金品牌黑色试尝杯'},
				{imgUrl:require('@/assets/img/main/menu/merchandise/conventional-products/11.jpg'),text:'3oz 烫金品牌白色试尝杯'},
				{imgUrl:require('@/assets/img/main/menu/merchandise/conventional-products/12.jpg'),text:'500ml 黑色Logo水瓶'},
			],
			conventionalProducts4: [
				{imgUrl:require('@/assets/img/main/menu/merchandise/conventional-products/13.jpg'),text:'500ml 白色Logo水瓶'},
				{imgUrl:'',text:''},
				{imgUrl:'',text:''},
				{imgUrl:'',text:''},
			],
			zhenxuanProducts: [
				{imgUrl:require('@/assets/img/main/menu/merchandise/zhenxuan-products/1.jpg'),text:'12oz 纯黑/古铜亮面品牌桌面杯'},
				{imgUrl:require('@/assets/img/main/menu/merchandise/zhenxuan-products/2.jpg'),text:'16oz 香槟金品牌不锈钢桌面杯'},
				{imgUrl:require('@/assets/img/main/menu/merchandise/zhenxuan-products/3.jpg'),text:'500ml 金色Logo水瓶'},
				{imgUrl:require('@/assets/img/main/menu/merchandise/zhenxuan-products/4.jpg'),text:'9oz 臻选玻璃杯'},
			],
			text: '全部',
			istext:['全部','常规产品','臻选产品']
		}
	},
// 	12oz 烫金品牌白色马克杯
// 16oz 烫金品牌黑色马克杯
// 16oz 原木黑色拎绳不锈钢保温杯
// 16oz 彰显本色黑色/深灰不锈钢随行杯
// 16oz 烫金品牌白色马克杯
// 3oz 烫金品牌黑色试尝杯
// 3oz 烫金品牌白色试尝杯
// 500ml 黑色Logo水瓶
// 500ml 白色Logo水瓶

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