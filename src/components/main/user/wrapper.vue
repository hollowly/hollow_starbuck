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
			<div class="row linetext">
				<span>银星级</span>
				<span>玉星级</span>
				<span>金星级</span>
			</div>
			<div class="row startnum">
				目前星星数：6
			</div>
			<div class="row privilegestitle">
				会员权益：
			</div>
			<div class="row badge1">
				<div class="col-sm-2">
					<span><img src="@/assets/svg/user/index/drinking-roll.svg"></span>
					<p>玉星晋级饮品券</p>
				</div>
				<div class="col-sm-2">
					<span><img src="@/assets/svg/user/index/Cake.svg"></span>
					<p>生日饮品券</p>
				</div>
				<div class="col-sm-2">
					<span><img src="@/assets/svg/user/index/drinking-roll.svg"></span>
					<p>金星在望饮品券</p>
				</div>
				<div class="col-sm-2">
					<span><img src="@/assets/svg/user/index/crown.svg"></span>
					<p>永享玉星级</p>
				</div>
			</div>
			<div class="row badge2">
				<div class="col-sm-2">
					<span><img src="@/assets/svg/user/index/drinking-roll-white.svg"></span>
					<div><img src="@/assets/svg/user/index/lock.svg"></div>
					<p>金星晋级饮品券</p>
				</div>
				<div class="col-sm-2">
					<span><img src="@/assets/svg/user/index/drinking-roll-white.svg"></span>
					<div><img src="@/assets/svg/user/index/lock.svg"></div>
					<p>周年庆饮品券</p>
				</div>
				<div class="col-sm-2">
					<span><img src="@/assets/svg/user/index/glass-white.svg"></span>
					<div><img src="@/assets/svg/user/index/lock.svg"></div>
					<p>好礼星星兑换</p>
				</div>
				<div class="col-sm-2">
					<span><img src="@/assets/svg/user/index/card-white.svg"></span>
					<div><img src="@/assets/svg/user/index/lock.svg"></div>
					<p>专属金卡</p>
				</div>
			</div>
			<div class="row p1">
				<p><span>会员到期日</span>：2021/03/10</p>
			</div>
			<div class="row p2">
				<p>再积 10 颗星即可升到金星级</p>
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
	p {
		margin: 0;
	}
	#box {
		width: 100%;
		padding-top: 30px;
		background: rgb(248,248,248);
		height: 100vh;
	}
	#box > div {
		width: 70%;
		margin: 0 auto;
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

	.main > div {
		width: 90%;
		margin: 0 auto;
	}
	.main {
		background: url('../../../assets/svg/user/index/backgroundimg.svg') no-repeat;
		background-position: 90%;
		padding-bottom: 20px;
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
		padding: 0px;
		background: rgb(1,143,84);
	}
	.main > .line > .aa {
		width: 20%;
		height: 10px;
		position: relative;
		left: -10px;
		z-index: 0;
		border-radius: 5px;
		margin-top: 5px;
		background: rgb(236,234,232);
	}
	.main > .line > .bb {
		width: 30%;
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
	.main > .linetext {
		color: white;
		font-size: 13px;
	}
	.main > .linetext > span {
		position: relative;
		left: 10%;
	}
	.main > .linetext > span:first-child {
		position: relative;
		left: 0;
	}
	.main > .linetext > span:last-child {
		position: absolute;
		left: 78%;
	}
	.main > .privilegestitle, .main > .startnum {
		color: white;
		font-size: 17px;
	}
	.main > .badge1 > div, .main > .badge2 > div {
		text-align: center;

	}
	.main > .badge1 > div > span, .main > .badge2 > div > span {
		display: inline-block;
		width: 50px;
		border-radius: 50px;
		line-height: 50px;
		height: 50px;
		background: white;
		text-align: center;
		cursor: pointer;
	}
	.badge2 > div > span {
		background: rgb(0,163,95) !important;
	}
	.main > .badge2 {
		margin-top: -20px;
	}
	.main > .badge1 > div > p, .main > .badge2 > div > p {
		font-size: 12px;
		text-align: center;
		padding-top: 10px;
		color: white;
	}
	.main > .badge2 > div > p {
		margin-top: -20px;
	}
	.main > .badge2 > div > div {
		position: relative;
		bottom: 20px;
		left: 60px;
		width: 20px;
		border-radius: 20px;
		height: 20px;
		background: #c3a75c;
	}
	.main > .badge2 > div > div > img {
		padding-bottom: 20px;
	}
	.main > .p2 {
		padding: 0;
	}
	.main  > .p1 > p, .main > .p2 > p {
		color: white;
		width: 100%;
		font-family: Gothma-book;
		text-align: right;
		font-size: 14px;
	}
	.main > .p1 {
		margin-top: 10px;
	}
	.main > .p1 > p > span {
		font-weight: 700;
	}

	@media screen and (max-width: 1213px) {
		#box > div {
			width: 80%;
		}
		.main > .line > div:last-child {
		left: 82% !important;
		}
	}
	@media screen and (max-width:1300px) {
		.main > .badge2 > div > div {
			left: 50px;
		}
	}
</style>	