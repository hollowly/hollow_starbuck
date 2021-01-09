<!--  -->
<template>
	<div class="container">
		<div class="row">
			<slot name='main'>

			</slot>
			<slot name='img'></slot>
		</div>
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
	.row {
		padding-bottom: 40px;
		border-bottom: 1px solid rgba(0,0,0,.12);
	}
	.row:hover {
		background: rgb(234,234,234);
	}
	.row > a {
		width: 92%;
	}
	.row > a > span:first-of-type {
		color: black;
		display: block;
		padding: 30px 0px 0px 30px;
		font-size: 18px;
		text-align: left;
	}
	.row > a > span:last-of-type {
		margin-top: 4px;
		color: rgba(0,0,0,.38);
		padding: 0px 0px 0px 30px;
		font-size: 14px;
	}
	.row > img {
		padding: 40px 0px 0px 0px;
	}
</style>