<template>
	<div id='app' class="container-fluid">
	<keep-alive>
		<router-view />
	</keep-alive>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	data() {
		return {
			httpdata:[],
		}
	},
	created() {
		
	}
}
</script>

<style>
@import url('assets/css/base.css');

</style>
