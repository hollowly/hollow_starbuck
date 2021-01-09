<!--  -->
<template>
	<div style="width:100%;background:rgb(248,248,248);padding-bottom:50px">
		<rewardsframe>
			<h4 slot='title'>当前好礼</h4>
			<li v-for='item in havingroll' slot='li'>
				<span style="float:left"><img src="@/assets/svg/user/index/glass-brown.svg" width="30"></span>
				<span><p>{{item.p1}}</p> <p>{{item.p2}}</p></span>
				<span style="float:right"><img src="@/assets/svg/user/activity/waring.svg" width="30"></span>
			</li>
		</rewardsframe>

		<rewardsframe>
			<h4 slot='title'>未生效好礼</h4>
			<li v-for='item in forceroll' slot='li'>
				<span style="float:left"><img src="@/assets/svg/user/index/glass-brown.svg" width="30"></span>
				<span><p>{{item.p1}}</p> <p>{{item.p2}}</p></span>
				<span style="float:right"><img src="@/assets/svg/user/activity/waring.svg" width="30"></span>
			</li>

		</rewardsframe>


	</div>
</template>

<script>
import rewardsframe from '@/components/main/user/rewardsframe'
export default {
	data () {
		return {
			havingroll: [
				{p1:'1 x 玉星晋级饮品券',p2:'有效期至 2021/01/19'},
				{p1:'1 × 星巴克玩味冰调™立减5元',p2:'有效期至 2021/01/19'},
				{p1:'1 × 星冰粽单包减28元',p2:'有效期至 2021/01/19'},
				{p1:'1 × 同笔交易两包或以上星冰粽减66元',p2:'有效期至 2021/01/19'},
				{p1:'1 × 同笔交易三包或以上星冰粽减90元',p2:'有效期至 2021/01/19'},
				{p1:'1 × 欢庆蛋糕礼盒立减25元',p2:'有效期至 2021/01/19'},
			],
			forceroll: [
				{p1:'1 x 玉星晋级饮品券',p2:'有效期至 2021/01/19'},
				// {p1:'1 x 玉星晋级饮品券',p2:'有效期至 2021/01/19'},
			]
		}
	},
	components: {
		rewardsframe,
	}

}

</script>

<style scoped>
</style>