<!--  -->
<template>
	<div>
		<div class="container">
			<h4>主要新品</h4>
			<div class="row">
				<menuimg><img src="@/assets/img/main/menu/newmain1.jpg"><p>太妃榛果拿铁</p></menuimg>
				<menuimg><img src="@/assets/img/main/menu/newmain2.jpg"><p>熔岩黑巧摩卡</p></menuimg>
				<menuimg><img src="@/assets/img/main/menu/newmain3.jpg"><p>流金圣诞茶拿铁</p></menuimg>
			</div>
			<div class="row">
				<menuimg><img src="@/assets/img/main/menu/newmain4.jpg"><p>草莓杯子蛋糕</p></menuimg>
				<menuimg><img src="@/assets/img/main/menu/newmain5.jpg"><p>焦糖杯子蛋糕</p></menuimg>
				<menuimg><img src="@/assets/img/main/menu/newmain6.jpg"><p>巧克力蛋糕</p></menuimg>
			</div>
			<div class="row">
				<menuimg><img src="@/assets/img/main/menu/newmain7.jpg"><p>柠檬杯子蛋糕</p></menuimg>
				<menuimg><img src="@/assets/img/main/menu/newmain8.jpg"><p>星巴克®圣诞综合咖啡豆</p></menuimg>
				<menuimg><img src="@/assets/img/main/menu/newmain9.jpg"><p>星巴克®浅雅烘焙圣诞综合咖啡豆</p></menuimg>
			</div>
			<div class="row">
				<menuimg><img src="@/assets/img/main/menu/newmain10.jpg"><p>星巴克®浓缩烘焙圣诞综合咖啡豆</p></menuimg>
				<menuimg><img src="@/assets/img/main/menu/newmain11.jpg"><p>400ml Contigo抱抱动物款保温吸管杯</p></menuimg>
				<menuimg><img src="@/assets/img/main/menu/newmain12.jpg"><p>姜饼人造型玻璃杯</p></menuimg>
			</div>
			<div class="row">
				<menuimg><img src="@/assets/img/main/menu/newmain13.jpg"><p>星巴克臻选™2020圣诞综合咖啡豆</p></menuimg>
				<menuimg><img src="@/assets/img/main/menu/newmain14.jpg"><p>哥斯达黎加 三水河 贝拉维斯塔庄园咖啡豆</p></menuimg>
				<menuimg><img src="@/assets/img/main/menu/newmain15.jpg"><p>卢旺达穆洪多</p></menuimg>
			</div>
			<div class="row">
				<menuimg><img src="@/assets/img/main/menu/newmain16.jpg"><p>越南大叻</p></menuimg>
				<menuimg><img src="@/assets/img/main/menu/newmain17.jpg"><p>咖啡快乐圣诞会员星礼包</p></menuimg>
				<menuimg><img src="@/assets/img/main/menu/newmain18.jpg"><p>咖啡快乐圣诞会员星礼包</p></menuimg>
			</div>
			<div class="row">
				<menuimg><img src="@/assets/img/main/menu/newmain19.jpg"><p>咖啡快乐圣诞会员星礼包</p></menuimg>
			</div>
		</div>
	</div>
</template>

<script>
import menuimg from '@/components/main/menuimg'
export default {
	components: {
		menuimg,
	}
}
</script>

<style scoped>
	.container {
		text-align: center;
		background: rgb(247,247,247);
	}
	.container > h4 {
		padding: 28px 0px;
	}
	.container > .row {
		width: 80%;
		margin: 0 auto;
	}

	.container > .row > div {
		text-align: center;
		width: 30%;
	}

	.container > .row > div:last-child {
		margin-right: 0;
	}

	
</style>