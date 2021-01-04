<!--  -->
<template>
	<div>
		<leftmenu>
			<h3 style="font-weight:700" slot='title'>商店</h3>

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
				{text:'常规产品'},
				{text:'臻选产品'},
			]
		}
	},
	components: {
		leftmenu
	}
}
</script>
