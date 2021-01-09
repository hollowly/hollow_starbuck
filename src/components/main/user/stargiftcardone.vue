<!--  -->
<template>
	<div class="col-sm">
			<header>
				<slot name='titlemoney'><h6>￥200</h6></slot>
				<span><img src="@/assets/svg/user/stargiftcard/manage.svg">管理</span>
				<span><img src="@/assets/svg/user/stargiftcard/clock.svg">消费记录</span>
			</header>
			<main>
				<slot name='img1'><img src="@/assets/img/main/user/star_gift_card/1.jpg"></slot>
				<slot name='p1'><p>7310 2332 6124 1994</p></slot>
				<slot name='p2'><p>(以上余额截止至今天)</p></slot>
			</main>
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
	.container header > h6 {
		padding: 10px;
		float: left;
		font-size: 18px;
		display: inline-block;
	}
	.container header > span {
		cursor: pointer;
		color: rgba(0,0,0);
		opacity: 0.38;
    font-weight: 400;
		font-size: 14px;
		padding: 10px 20px 0px 0px;
		float: right;
		display: inline-block;
	}
	.container header > span:hover {
		color: #00a862;
		opacity: 1;
		padding: 10px 20px 0px 0px;
	}

	.container main {
		clear: both;
		width: 100%;
	}
	.container main > img {
		width: 80%;
	}
	.container main > p {
		font-size: 10px;
		margin: 0;
		padding: 10px 0px 5px 0px;
    font-weight: 400;
    color: rgba(0,0,0,.38);
	}
	.container main > p:last-child {
		padding: 0px 0px 10px 0px;
	}
</style>