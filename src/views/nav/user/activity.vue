<!--  -->
<template>
	<div>
		<user>
			<li slot='activity'><router-link to='/account/activity' class="active">消费记录</router-link></li>
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