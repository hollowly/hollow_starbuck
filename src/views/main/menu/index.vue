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
				<div v-for='item in newmain1'><img :src="item.imgUrl"><p>{{item.text}}</p></div>
			</div>
			<div class="row">
				<div v-for='item in newmain2'><img :src="item.imgUrl"><p>{{item.text}}</p></div>
			</div>
			<div class="row">
				<div v-for='item in newmain3'><img :src="item.imgUrl"><p>{{item.text}}</p></div>
			</div>
			<div class="row">
				<div v-for='item in newmain4'><img :src="item.imgUrl"><p>{{item.text}}</p></div>
			</div>
			<div class="row">
				<div v-for='item in newmain5'><img :src="item.imgUrl"><p>{{item.text}}</p></div>
			</div>
			<div class="row">
				<div v-for='item in newmain6'><img :src="item.imgUrl"><p>{{item.text}}</p></div>
			</div>
		</div>

	</div>
</template>

<script>
import mainnewproductstext from '@/components/main/menu/mainnewproductstext'
export default {
	data () {
		return {
			mainnewproductstext1: [
			'叮叮当~喜欢的节日在慢慢到来',
			'喜欢的太妃榛果拿铁也如约而至',
			'这一次融入了燕麦奶，平衡了甜度和醇香',
			'是今年不可错过的全新经典。',
			'熔岩黑巧摩卡和暖意圣诞茶拿铁',
			'一杯丝滑绵软一杯茶香温润',
			'都能让快乐在唇齿间流转',
			],
			mainnewproductstext2: [
			'雪松般的香气，伴随着柑橘果酱和奶油糖果香甜',
			'星巴克臻选™2020圣诞综合咖啡豆总是诠释这个美妙的季节',
			'自哥斯达黎加的贝拉维斯塔庄园咖啡豆',
			'平衡而顺滑的口感，烤苹果和黑胡桃般的风味',
			'伴随着蜂巢蜜般的甜感让人不禁忆起过往的节日片段',
			'越南大叻咖啡豆拥有着月桂叶般的香气，和太妃糖和可可般的风味',
			'草本植物般的气息仿佛节日的庆典般热闹',
			'层次分明，有着比想象更多的特殊风味。',
			'每一次细品，都是对这个季节的美妙诠释',
			],
			newmain1: [
				{imgUrl:require('@/assets/img/main/menu/newmain1.jpg'),text:'太妃榛果拿铁'},
				{imgUrl:require('@/assets/img/main/menu/newmain2.jpg'),text:'熔岩黑巧摩卡'},
				{imgUrl:require('@/assets/img/main/menu/newmain3.jpg'),text:'流金圣诞茶拿铁'},
			],
			newmain2: [
				{imgUrl:require('@/assets/img/main/menu/newmain4.jpg'),text:'草莓杯子蛋糕'},
				{imgUrl:require('@/assets/img/main/menu/newmain5.jpg'),text:'焦糖杯子蛋糕'},
				{imgUrl:require('@/assets/img/main/menu/newmain6.jpg'),text:'巧克力蛋糕'},
			],
			newmain3: [
				{imgUrl:require('@/assets/img/main/menu/newmain7.jpg'),text:'柠檬杯子蛋糕'},
				{imgUrl:require('@/assets/img/main/menu/newmain8.jpg'),text:'星巴克®圣诞综合咖啡豆'},
				{imgUrl:require('@/assets/img/main/menu/newmain9.jpg'),text:'星巴克®浅雅烘焙圣诞综合咖啡豆'},
			],
			newmain4: [
				{imgUrl:require('@/assets/img/main/menu/newmain10.jpg'),text:'星巴克®浓缩烘焙圣诞综合咖啡豆'},
				{imgUrl:require('@/assets/img/main/menu/newmain11.jpg'),text:'400ml Contigo抱抱动物款保温吸管杯'},
				{imgUrl:require('@/assets/img/main/menu/newmain12.jpg'),text:'姜饼人造型玻璃杯'},
			],
			newmain5: [
				{imgUrl:require('@/assets/img/main/menu/newmain13.jpg'),text:'星巴克臻选™2020圣诞综合咖啡豆'},
				{imgUrl:require('@/assets/img/main/menu/newmain14.jpg'),text:'哥斯达黎加 三水河 贝拉维斯塔庄园咖啡豆'},
				{imgUrl:require('@/assets/img/main/menu/newmain15.jpg'),text:'卢旺达穆洪多'},
			],
			newmain6: [
				{imgUrl:require('@/assets/img/main/menu/newmain16.jpg'),text:'越南大叻'},
				{imgUrl:require('@/assets/img/main/menu/newmain17.jpg'),text:'咖啡快乐圣诞会员星礼包'},
				{imgUrl:require('@/assets/img/main/menu/newmain18.jpg'),text:'咖啡快乐圣诞会员星礼包'},
			],
		}
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