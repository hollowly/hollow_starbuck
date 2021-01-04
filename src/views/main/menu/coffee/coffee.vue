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
				{text:'中度烘焙'},
				{text:'深度烘焙'},
				{text:'VIA® DAIRY'},
				{text:'VIA® BLACK'},
				{text:'中度烘焙®'},
				{text:'深度烘焙®'},
			]
		}
	},
	components: {
		leftmenu
	}
}
</script>