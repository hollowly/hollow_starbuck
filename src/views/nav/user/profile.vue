<!--  -->
<template>
	<div>
		<user>
			<li slot='profile'><router-link to='/account/profile' class="active">管理我的账户</router-link></li>
		</user>
	</div>
</template>

<script>
import user from '@/components/nav/user'
export default {
	data () {
		return {

		}
	},
	components: {
		user
	}

}

</script>

<style scoped>

</style>