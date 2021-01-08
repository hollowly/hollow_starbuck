<template>
	<div id='app' class="container-fluid">
		<router-view :key="this.$route.path"/>
	</div>
</template>

<script>
export default {
	data() {
		return {
			
		}
	},
	
}
</script>

<style>
@import url('assets/css/base.css');

</style>
