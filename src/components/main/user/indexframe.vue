<!--  -->
<template>		
<div class="container title">
	<div class="row">
		<div class="col-sm">
			<slot name='titletext'></slot>
		</div>
		<div class="col-sm titleright">
			<slot name='titlenum'></slot>
			<slot name='titleimg'></slot>
		</div>
	</div>

	<slot name='main'>
	</slot>

	<div class="row footter">
		<div class="col-sm">
		</div>
		<div class="col-sm">
			<slot name='footterUrl'></slot>
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
	mounted() {
		$('.main > .scroll > .card-item').mouseenter(function() {
			$(this).css('transform','translateY(-20px)')
		}).mouseleave(function() {
			$(this).css('transform','translateY(0px)')
		})
	}

}

</script>

<style scoped>
.title {
	margin-top: 30px;
	width: 70%;
	background: white;
	font-size: 22px;
	box-shadow: 0 1px 1px 1px rgba(0,0,0,.12);
}
.title > div {
	padding: 18px 40px;
	border-bottom: 1px solid rgba(0,0,0,.12);
}
.title > div > .titleright {
	text-align: right;
}
.title > div > .titleright > img {
	margin-bottom: 5px;
}
.title > div > div > h4 {
	margin-top: 4px;
}

.main > .scroll {
	height: 280px;
	overflow-y: hidden;
	padding-top: 15px;
}

.main > .scroll > .card-item {
	transition: all .4s;
	float: left;
	margin-right: 30px;
}
.main > .scroll > .card-item > p {
	padding: 0;
	margin: 0;
}
.main > .scroll > .card-item > img {
	width: 280px;
}
.main > .scroll > .card-item > span {
		display: block;
    margin-top: 12px;
    margin-bottom: 17px;
    text-align: center;
    font-size: 12px;
    font-weight: 400;
    color: rgba(0,0,0,.38);
    line-height: 160%;
}
@media screen and (max-width: 1213px) {
		.title {
			width: 80%;
		}
		.main > .line > div:last-child {
		left: 82% !important;
		}
	}






.footter {
	text-align: right;
	font-size: 16px;
	color: #00a862 !important;
}
.footter > div > a {
	color: #00a862 !important;
}
</style>