<!--  -->
<template>
	<div>
		<leftmenu>
			<h3 style="font-weight:700" slot='title'>美食</h3>

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
				{text:'烘焙'},
				{text:'蛋糕&甜品'},
				{text:'三明治、帕尼尼、卷'},
				{text:'酸奶'},
				{text:'其他美食'},
				{text:'早安新一天'},
			]
		}
	},
	components: {
		leftmenu
	}
}
</script>
