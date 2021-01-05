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
			httpdata:[],
		}
	},
	components: {
		
	},
	created() {
		request({
			url:'/data.json',
		}).then(res => {
			this.httpdata = res.data;
			console.log(this.httpdata);
		}).catch(err => {
			console.log(err);
		})
	}
}
</script>

<style>
@import url('assets/css/base.css');

</style>
