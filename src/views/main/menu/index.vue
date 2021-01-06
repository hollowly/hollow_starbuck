<!--  -->
<template>
	<div>
		<a href=""><img src="@/assets/img/main/menu/menu1.jpg" class="img-fluid clearbottom"></a>
		<mainnewproductstext>
			<h4>Carry The Merry</h4>
			<p v-for='item in mainnewproductstext1'>{{item}}</p>
		</mainnewproductstext>
		<a href=""><img src="@/assets/img/main/menu/menu2.jpg" class="img-fluid"></a>
		<a href=""><img src="@/assets/img/main/menu/menu3.jpg" class="img-fluid"></a>
		<a href=""><img src="@/assets/img/main/menu/menu4.jpg" class="img-fluid"></a>
		<a href=""><img src="@/assets/img/main/menu/menu5.jpg" class="img-fluid"></a>
		<a href=""><img src="@/assets/img/main/menu/menu6.jpg" class="img-fluid clearbottom"></a>
		<mainnewproductstext>
			<h4>欢享圣诞咖啡好时光</h4>
			<p v-for='item in mainnewproductstext2'>{{item}}</p>
		</mainnewproductstext>


		<div class="container-fuild">
			<h4>主要新品</h4>
			<div class="row">
				<div v-for='item in newmain1'><img :src="$host + item.imgUrl"><p>{{item.text}}</p></div>
			</div>
			<div class="row">
				<div v-for='item in newmain2'><img :src="$host + item.imgUrl"><p>{{item.text}}</p></div>
			</div>
			<div class="row">
				<div v-for='item in newmain3'><img :src="$host + item.imgUrl"><p>{{item.text}}</p></div>
			</div>
			<div class="row">
				<div v-for='item in newmain4'><img :src="$host + item.imgUrl"><p>{{item.text}}</p></div>
			</div>
			<div class="row">
				<div v-for='item in newmain5'><img :src="$host + item.imgUrl"><p>{{item.text}}</p></div>
			</div>
			<div class="row">
				<div v-for='item in newmain6'><img :src="$host + item.imgUrl"><p>{{item.text}}</p></div>
			</div>
		</div>

	</div>
</template>

<script>
import mainnewproductstext from '@/components/main/menu/mainnewproductstext'
import {request} from '@/network/request'

export default {
	data () {
		return {
			mainnewproductstext1: [],
			mainnewproductstext2: [],
			newmain1: [],
			newmain2: [],
			newmain3: [],
			newmain4: [],
			newmain5: [],
			newmain6: [],
		}
	},
	mounted() {
		// 数据请求
		request({
			url:'/data3.json',
		}).then(res => {
			this.mainnewproductstext1 = res.data.menu_index.mainnewproductstext1
			this.mainnewproductstext2 = res.data.menu_index.mainnewproductstext2
			this.newmain1 = res.data.menu_index.newmain1
			this.newmain2 = res.data.menu_index.newmain2
			this.newmain3 = res.data.menu_index.newmain3
			this.newmain4 = res.data.menu_index.newmain4
			this.newmain5 = res.data.menu_index.newmain5
			this.newmain6 = res.data.menu_index.newmain6
		}).catch(err => {
			console.log(err);
		})
	},
	components: {
		mainnewproductstext,
	}

}

</script>

<style scoped>
	img {
		margin-bottom: 140px;
	}
	.clearbottom {
		margin: 0;
	}


	/* 主要新品 */
	.container-fuild img {
		width: 83%;
		margin-bottom: 20px;
	}
	.container-fuild {
		text-align: center;
		background: rgb(247,247,247);
	}
	.container-fuild > h4 {
		padding: 28px 0px;
	}
	.container-fuild > .row {
		width: 80%;
		margin: 0 auto;
		margin-bottom: 40px;
		text-align: center;
	}

	.container-fuild > .row > div {
		margin: 0 auto;
		width: 32%;
	}

	.container-fuild > .row > div:last-child {
		margin-right: 0;
	}
</style>