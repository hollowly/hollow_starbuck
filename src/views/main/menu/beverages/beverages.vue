<!--  -->
<template>
	<div>
		<leftmenu>
			<h3 style="font-weight:700" slot='title'>饮料</h3>

			<li v-for='item in menu' slot='li'>
				<router-link to=''>{{item.text}}</router-link>
			</li>

		</leftmenu>
	</div>
</template>

<script>
import leftmenu from '@/components/main/menu/leftmenu'
export default {
	data () {
		return {
			menu:[
				{text:'全部'},
				{text:'星巴克玩味冰调™'},
				{text:'手工调制浓缩咖啡'},
				{text:'星冰乐®'},
				{text:'茶瓦纳™'},
				{text:'经典巧克力饮品'},
				{text:'咖啡融合冰淇淋'},
				{text:'星巴克冷萃咖啡系列'},
				{text:'气致™冷萃咖啡'},
			]
		}
	},
	components: {
		leftmenu
	}
}
</script>
