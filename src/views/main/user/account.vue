<!--  -->
<template>
	<div id='box'>
		<div class="container title">
			<div class="row">
				<div class="col-sm">
					玉星级
				</div>
				<div class="col-sm titleright">
					<img src="@/assets/svg/user/index/doublestart.svg" width="30">
				</div>
			</div>
		</div>
		<div class="container main">
			<div class="row">
				<div class="col-sm">
					玉星级
				</div>
				<div class="col-sm">

				</div>
			</div>
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
	#box {
		padding-top: 30px;
		background: rgb(248,248,248);
		height: 100vh;
	}
	#box > div {
		width: 80%;
		margin: 0 auto;
	}
	.title {
		margin-top: 2100px;
		padding: 18px 40px;
		background-color: #00a862;
		border-bottom: 1px solid hsla(0,0%,100%,.3);
		border-radius: 5px 5px 0px 0px;
	}
	.title > .row > div {
		font-size: 22px;
		color: white;
	}
	.titleright > img {
		line-height: 100px;
		float: right;
	}

	.main {
		height: 500px;
		background-color: #00a862;
	}
</style>