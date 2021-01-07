<!--  -->
<template>
	<div>
		<user>
			<li slot='account'><router-link to='/account/' class="active">账户一览</router-link></li>
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