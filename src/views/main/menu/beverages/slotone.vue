<!--  -->
<template>
	<div>
		<slot name='img'><img src="@/assets/img/main/menu/beverages/coffee-plus-ice-cream/1.jpg"></slot>
		<slot name='text'><strong>阿馥奇朵™</strong></slot>
	</div>
</template>

<script>
export default {
	data () {
		return {

		}
	},

}

</script>

<style scoped>
	div > img {
		margin-top: 3px;
		width: 95%;
		box-shadow: 0 1px 3px 2px rgba(0, 0, 0, 0.12);
		border-radius: 999px;
	}
	div > strong {
		display: block;
		padding: 10px 0px 20px 0px;
	}
</style>