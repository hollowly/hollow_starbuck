<!--  -->
<template>
	<div style="height:2000px">
		<a href="/register"><img src="@/assets/img/main/club/top.jpeg" class='img-fluid'></a>

		<div class="container-fuild rewards">
			<img src="@/assets/img/main/club/title.png" width="260">
			<div class="row">
				<div class="col-sm" v-for='item in rewards'>
					<img :src="item.imgUrl" width="120">
					<h5>{{item.title}}</h5>
					<p>{{item.p}}</p>
				</div>
			</div>
				<p class="treaty">详情以<span>《星享俱乐部活动的条款和条件》</span>的规定为准</p>
				<img src="@/assets/img/main/club/banner.jpg" class="img-fluid">
		</div>
	</div>
</template>
<script>
export default {
	data () {
		return {
			rewards:[
				{imgUrl:require('@/assets/img/main/club/rewards1.png'),title:'消费累积星星',p:'每累计消费￥50元累积一颗星星使用星巴克指定的方式，可享加速积星'},
				{imgUrl:require('@/assets/img/main/club/rewards2.png'),title:'积星升级 好礼享不停',p:''},
				{imgUrl:require('@/assets/img/main/club/rewards3.png'),title:'会员专享星星奖励活动',p:''},
				{imgUrl:require('@/assets/img/main/club/rewards4.png'),title:'星星兑换丰富好礼',p:''},
			]
		}
	},

}

</script>
<style scoped>
	.rewards {
		margin: 0 auto;
		padding-top: 50px;
		text-align: center;
		background: #023529;
		color: white;
		font-family: "Gotham", Helvetica, Arial, PingFangSC-Regular, "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
	}
	.rewards::before {
    content: '';
    position: relative;
		top: -40px;
		left: 15%;
    transform: translateX(-50%);
    width: 20px;
    border-width: 15px;
    border-style: solid;
    border-color: #14767c transparent transparent transparent;
}
	.rewards > .row {
		margin-top: 20px;
		width: 100%;
		margin-left:0px;
	}
	.rewards > .row > div > p {
		font-size: 12px;
		padding-top: 5px;
	}
	.treaty {
		padding-top: 25px;
		font-size: 12px;
	}
	.treaty > span {
		color: #00A862;
	}
</style>