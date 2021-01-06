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
						<img :src="$host + item.imgUrl" slot='img'>
						<strong slot='text'>{{item.text}}</strong>
					</oneimgbox>
				</div>
			</div>
			<div class="row">
				<div class="col-sm" v-for='item in conventionalProducts2'>
					<oneimgbox>
						<img :src="$host + item.imgUrl" slot='img'>
						<strong slot='text'>{{item.text}}</strong>
					</oneimgbox>
				</div>
			</div>
			<div class="row">
				<div class="col-sm" v-for='item in conventionalProducts3'>
					<oneimgbox>
						<img :src="$host + item.imgUrl" slot='img'>
						<strong slot='text'>{{item.text}}</strong>
					</oneimgbox>
				</div>
			</div>
			<div class="row">
				<div class="col-sm" v-for='item in conventionalProducts4'>
					<oneimgbox>
						<img :src="$host + item.imgUrl" slot='img' :class="item.class">
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
						<img :src="$host + item.imgUrl" slot='img'>
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
			conventionalProducts1: [],
			conventionalProducts2: [],
			conventionalProducts3: [],
			conventionalProducts4: [],
			zhenxuanProducts: [],
			text: '全部',
			istext:['全部','常规产品','臻选产品']
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
			this.conventionalProducts1 = res.data.menu_merchandise.conventionalProducts1
			this.conventionalProducts2 = res.data.menu_merchandise.conventionalProducts2
			this.conventionalProducts3 = res.data.menu_merchandise.conventionalProducts3
			this.conventionalProducts4 = res.data.menu_merchandise.conventionalProducts4
			this.zhenxuanProducts = res.data.menu_merchandise.zhenxuanProducts
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