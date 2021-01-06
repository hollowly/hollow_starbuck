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
						<img :src="$host + item.imgUrl" slot='img'>
						<strong slot='text'>{{item.text}}</strong>
					</oneimgbox>
				</div>
			</div>
			<div class="row">
				<div class="col-sm" v-for='item in mediumRoast2'>
					<oneimgbox>
						<img :src="$host + item.imgUrl" slot='img'>
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
						<img :src="$host + item.imgUrl" slot='img'>
						<strong slot='text'>{{item.text}}</strong>
					</oneimgbox>
				</div>
			</div>
			<div class="row">
				<div class="col-sm" v-for='item in darkRoast2'>
					<oneimgbox>
						<img :src="$host + item.imgUrl" slot='img' :class='item.class'>
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
						<img :src="$host + item.imgUrl" slot='img' :class="item.class">
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
						<img :src="$host + item.imgUrl" slot='img' :class="item.class">
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
						<img :src="$host + item.imgUrl" slot='img' :class="item.class">
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
						<img :src="$host + item.imgUrl" slot='img' :class="item.class">
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
import {request} from '@/network/request'

//引用 Bus 来进行兄弟组件中之间通信
import Bus from '@/utils/bus'
export default {
	data () {
		return {
			mediumRoast1: [],	//中度烘焙1
			mediumRoast2: [],	//中度烘焙2
			darkRoast1: [],	//深度烘焙1
			darkRoast2: [],	//深度烘焙2
			viaDairy: [],	//VIA® DAIRY
			viaBlack: [],	//VIA® BLACK
			mediumRoastOne: [],	//中度烘焙®
			darkRoastOne: [],	//深度烘焙®
			text: '全部',
			istext:['全部','中度烘焙','深度烘焙','VIA® DAIRY','VIA® BLACK','中度烘焙®','深度烘焙®']
		}
	},
	components: {
		oneimgbox
	},
	mounted() {
		// 数据请求
		request({
			url:'/data3.json',
		}).then(res => {
			this.mediumRoast1 = res.data.menu_coffee.mediumRoast1
			this.mediumRoast2 = res.data.menu_coffee.mediumRoast2
			this.darkRoast1 = res.data.menu_coffee.darkRoast1
			this.darkRoast2 = res.data.menu_coffee.darkRoast2
			this.viaDairy = res.data.menu_coffee.viaDairy
			this.viaBlack = res.data.menu_coffee.viaBlack
			this.mediumRoastOne = res.data.menu_coffee.mediumRoastOne
			this.darkRoastOne = res.data.menu_coffee.darkRoastOne
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
	
	@media screen and (max-width: 576px){
		.container-fluid > .row > div {
			width: 40%;
		}
	}
</style>