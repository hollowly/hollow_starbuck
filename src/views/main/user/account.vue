<!--  -->
<template>
	<div style="width:100%; height:2000px; background:rgb(248,248,248)">
		<wrapper></wrapper>

		<div class="container title">
			<div class="row">
				<div class="col-sm">
					管理星礼卡
				</div>
				<div class="col-sm titleright">
					<strong>24</strong>	<img src="@/assets/svg/user/index/card-title.svg" width="30"> 
				</div>
			</div>
			<div class="row main">
				<div class="col-sm scroll">
					<div class="card-item"></div>
				</div>
			</div>
			<div class="row footter">
				<div class="col-sm">
				</div>
				<div class="col-sm">
					<a href="">查看所有卡片</a>
				</div>
			</div>
		</div>


	</div>
</template>

<script>
import wrapper from '@/components/main/user/wrapper'
export default {
	data () {
		return {

		}
	},
	components: {
		wrapper
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


.main > .scroll {
	width: 100%;
	border: 1px solid yellow;
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