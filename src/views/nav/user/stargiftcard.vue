<!--  -->
<template>
	<div>
		<user>
			<li slot='Stargiftcard'><router-link to='/account/Star-gift-card' class="active">星礼卡</router-link></li>
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