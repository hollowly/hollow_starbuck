<template>
	<div id='app' class="container-fluid">
	<keep-alive>
		<router-view />
	</keep-alive>
	</div>
</template>

<script>
import axios from 'axios'
import { request } from './network/request'

export default {
	data() {
		return {
		}
	},
	// 封装的 axios 方法
	// created() {
	// 	request({
	// 		url:'/data.json',
	// 	}).then(res => {
	// 		console.log(res.data);
	// 	}).catch(err => {
	// 		console.log(err);
	// 	})
	// }
}
</script>

<style>
@import url('assets/css/base.css');

</style>
