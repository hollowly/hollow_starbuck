<!--  -->
<template>
	<div>
		<div class="container-fuild">
			<slot name='titleImg'></slot>

			<div class="row">
				<slot name='container'>
				</slot>
			</div>

				<p class="treaty">详情以<span>《星享俱乐部活动的条款和条件》</span>的规定为准</p>
				<slot name='footerImg'></slot>
		</div>
	</div>
</template>

<style scoped>
p {
	margin: 0;
}
.container-fuild {
	margin: 0 auto;
	padding-top: 30px;
	text-align: center;
	font-family: "Gotham", Helvetica, Arial, PingFangSC-Regular, "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
}

.container-fuild > .row {
	margin-top: 30px;
	width: 100%;
	margin-left:0px;
}
.container-fuild > .row > div > p {
	font-size: 12px;
	padding-top: 5px;
}
.treaty {
	padding: 25px 0px 15px 0px;
	font-size: 12px;
}
.treaty > span {
	color: #00A862;
}
</style>