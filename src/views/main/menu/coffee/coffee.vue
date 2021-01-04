<!--  -->
<template>
	<div>
		<leftmenu>
			<h3 style="font-weight:700" slot='title'>咖啡</h3>

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
			menu: [
				{text:'全部'},
				{text:'咖啡豆'},
				{text:'星巴克VIA® 免煮咖啡'},
				{text:'星巴克臻选™咖啡'},
				{text:'Origami™'},
			]
		}
	},
	components: {
		leftmenu
	}
}
</script>