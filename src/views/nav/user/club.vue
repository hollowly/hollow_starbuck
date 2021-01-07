<!--  -->
<template>
	<div>
		<user>
			<li slot='club'><router-link to='/account/club' class="active">关于星享俱乐部</router-link></li>
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