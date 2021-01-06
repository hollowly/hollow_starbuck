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
import {request} from '@/network/request'

import leftmenu from '@/components/main/menu/leftmenu'
export default {
	data () {
		return {
			menu:[],
		}
	},
	components: {
		leftmenu
	},
	mounted() {
		// 数据请求
		request({
			url:'/data3.json',
		}).then(res => {
			this.menu = res.data.menu_beverages.menu
		}).catch(err => {
			console.log(err);
		})
	}
}
</script>
