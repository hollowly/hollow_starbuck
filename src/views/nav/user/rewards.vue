<!--  -->
<template>
	<div>
		<user>
			<li slot='rewards'><router-link to='/account/rewards' class="active">星享好礼</router-link></li>
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
	},
	
}

</script>

<style scoped>

</style>