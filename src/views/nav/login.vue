<!--  -->
<template>
	<login>
		<li slot='login'><router-link to="/login" class="active">登录</router-link></li>
	</login>
</template>

<script>
import login from '@/components/nav/login-register'

export default {
	data () {
		return {

		}
	},
	components: {
		login,
	}
}

</script>

<style scoped>

</style>