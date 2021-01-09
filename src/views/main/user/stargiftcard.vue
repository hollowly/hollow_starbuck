<!--  -->
<template>
	<div style="background:rgb(247,247,247)">
		<div class="container">
			<div class="row">
				<stargiftcardone></stargiftcardone>
				<stargiftcardone></stargiftcardone>
			</div>
			<div class="row">
				<stargiftcardone></stargiftcardone>
				<stargiftcardone></stargiftcardone>
			</div>
		</div>
	</div>
</template>

<script>
import stargiftcardone from '@/components/main/user/stargiftcardone'
export default {
	data () {
		return {

		}
	},
	components: {
		stargiftcardone
	}

}

</script>

<style scoped>
	.container {
		width: 80%;
		text-align: center;
	}
	.container > .row > div:nth-of-type(2n) {
		margin-left: 40px;
	}
	.container > .row > div {
		margin-top: 40px;
		background: white;
		box-shadow: 0 1px 1px 1px rgba(0,0,0,.12);
	}
</style>