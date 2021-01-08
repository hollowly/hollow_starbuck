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
				<div class="centerdiv">
					6 <img src="@/assets/svg/user/index/start.svg">
				</div>
			</div>
			<div class="row line">
				<div><span></span></div>
				<span class="aa"></span>
				<div><span></span></div>
				<span class="bb"></span>
				<div><span></span></div>
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
		width: 70%;
		margin: 0 auto;
	}
	@media screen and (max-width: 1213px){
		#box > div {
			width: 80%;
			border: 1px solid red;
		}
	}
	.title {
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
	.main > .row {
		padding: 10px 0px;
	}
	.main > .row > .centerdiv {
		width: 100px;
		text-align: center;
		margin: 0 auto;
		height: 30px;
		border-radius: 8px;
		background: white;
	}
	.main > .row > .centerdiv::after {
    content: "";
    position: relative;
    bottom: -36px;
		left: -12px;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-top: 7px solid white;
	}
	.main > .line {
		width: 90%;
		margin: 0 auto;
		padding: 0px;
		background: rgb(1,143,84);
	}
	.main > .line > .aa {
		width: 130px;
		height: 10px;
		position: relative;
		left: -10px;
		z-index: 0;
		border-radius: 5px;
		margin-top: 5px;
		background: rgb(236,234,232);
	}
	.main > .line > .bb {
		width: 175px;
		height: 10px;
		position: relative;
		left: -40px;
		z-index: 0;
		border-radius: 5px;
		margin-top: 5px;
		background: rgb(0,168,98);
	}
	.main > .line > div {
		width: 20px;	
		height: 20px;
		border-radius: 20px;
		background: white;
		position: relative;
		left: -4%;
		z-index: 1;
	}
	.main > .line > div:first-child {
		left: 0;
	}
	.main > .line > div:last-child {
		position: absolute;
		left: 79%;
	}
	.main > .line > div > span {
		display: inline-block;
		width: 14px;
		height: 14px;
		border-radius: 14px;
		margin-bottom: 1px;
		margin-left: 3px;
		background: rgb(0,168,98);
	}
	.main > .line > div:first-child > span {
		background: rgb(181,181,181);
	}
	.main > .line > div:last-child > span {
		background: rgb(195,167,92);
	}
	
</style>