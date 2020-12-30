<!--  -->
<template>
	<div>
		<a href=""><img src="@/assets/img/main/menu/menu1.jpg" class="img-fluid clearbottom"></a>

		<menutext></menutext>

		<a href=""><img src="@/assets/img/main/menu/menu2.jpg" class="img-fluid"></a>
		<a href=""><img src="@/assets/img/main/menu/menu3.jpg" class="img-fluid"></a>
		<a href=""><img src="@/assets/img/main/menu/menu4.jpg" class="img-fluid"></a>
		<a href=""><img src="@/assets/img/main/menu/menu5.jpg" class="img-fluid"></a>
		<a href=""><img src="@/assets/img/main/menu/menu6.jpg" class="img-fluid clearbottom"></a>
		<menutext>
			<h4>欢享圣诞咖啡好时光</h4>
			<p>雪松般的香气，伴随着柑橘果酱和奶油糖果香甜</p>
			<p>星巴克臻选™2020圣诞综合咖啡豆总是诠释这个美妙的季节</p>
			<p>自哥斯达黎加的贝拉维斯塔庄园咖啡豆</p>
			<p>平衡而顺滑的口感，烤苹果和黑胡桃般的风味</p>
			<p>伴随着蜂巢蜜般的甜感让人不禁忆起过往的节日片段</p>
			<p>越南大叻咖啡豆拥有着月桂叶般的香气，和太妃糖和可可般的风味</p>
			<p>草本植物般的气息仿佛节日的庆典般热闹</p>
			<p>层次分明，有着比想象更多的特殊风味。</p>
			<p>每一次细品，都是对这个季节的美妙诠释</p>
		</menutext>

		<menuimg></menuimg>
		
	</div>
</template>

<script>
import menutext from '@/components/main/menutext'
import menuimg from '@/components/main/menuimg'
export default {
	data () {
		return {

		}
	},
	components: {
		menutext,
		menuimg
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

</style>