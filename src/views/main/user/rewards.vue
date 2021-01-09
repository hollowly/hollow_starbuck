<!--  -->
<template>
	<div style="width:100%;background:rgb(248,248,248);padding-bottom:50px">
		<!-- 当前好礼 -->
		<rewardsframe>
			<h4 slot='title'>当前好礼</h4>
			<li v-for='item in havingroll' slot='li'>
				<span style="float:left"><img src="@/assets/svg/user/index/glass-brown.svg" width="30"></span>
				<span><p>{{item.p1}}</p> <p>{{item.p2}}</p></span>
				<span style="float:right"><img src="@/assets/svg/user/activity/waring.svg" width="30"></span>
			</li>
		</rewardsframe>

		<!-- 未生效好礼 -->
		<rewardsframe>
			<h4 slot='title'>未生效好礼</h4>
			<li v-for='item in forceroll' slot='li'>
				<span style="float:left"><img src="@/assets/svg/user/index/glass-brown.svg" width="30"></span>
				<span><p>{{item.p1}}</p> <p>{{item.p2}}</p></span>
				<span style="float:right"><img src="@/assets/svg/user/activity/waring.svg" width="30"></span>
			</li>
		</rewardsframe>

		<!-- 已兑换好礼 -->
		<rewardsframe>
			<h4 slot='title'>已兑换好礼</h4>
			<li v-for='item in converted' slot='li'>
				<span style="float:left"><img src="@/assets/svg/user/index/glass-brown.svg" width="30"></span>
				<span><p>{{item.p1}}</p> <p>{{item.p2}}</p></span>
				<span style="float:right"><img src="@/assets/svg/user/activity/waring.svg" width="30"></span>
			</li>
		</rewardsframe>

		<!-- 过期好礼 -->
		<rewardsframe>
			<h4 slot='title'>过期好礼</h4>
			<li v-for='item in overdue' slot='li'>
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
			// 当前好礼
			havingroll: [
				{p1:'1 x 玉星晋级饮品券',p2:'有效期至 2021/01/19'},
				{p1:'1 × 星巴克玩味冰调™立减5元',p2:'有效期至 2021/01/19'},
				{p1:'1 × 星冰粽单包减28元',p2:'有效期至 2021/01/19'},
				{p1:'1 × 同笔交易两包或以上星冰粽减66元',p2:'有效期至 2021/01/19'},
				{p1:'1 × 同笔交易三包或以上星冰粽减90元',p2:'有效期至 2021/01/19'},
				{p1:'1 × 欢庆蛋糕礼盒立减25元',p2:'有效期至 2021/01/19'},
			],
			// 未生效好礼
			forceroll: [
			],
			// 已兑换好礼
			converted: [
				{p1:'	1 × 星巴克玩味冰调™立减5元',p2:'使用于 2021/01/02'},
			],
			// 过期好礼
			overdue: [
				{p1:'	1 × 欢庆蛋糕礼盒立减25元',p2:'过期于 2020/12/24'},
				{p1:'	1 × 欢庆蛋糕礼盒立减25元',p2:'过期于 2020/12/24'},
				{p1:'	1 × 20元指定中杯饮品（门店使用）',p2:'过期于 2020/12/25'},
				{p1:'	1 × 饮品买一赠一（门店使用）',p2:'过期于 2020/12/25'},
				{p1:'	1 × 星冰粽单包减24元',p2:'过期于 2020/12/26'},
				{p1:'	1 × 同笔交易两包或以上星冰粽减60元',p2:'过期于 2020/12/27'},
				{p1:'	1 × 同笔交易三包或以上星冰粽减80元',p2:'过期于 2020/12/29'},
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