<!--  -->
<template>
	<div style="width:100%;background:rgb(248,248,248);">
		<profile>
			<router-link to='' slot='main'>
				<span>管理星享卡</span>
				<span>关联、删除、报失你的星享卡</span>
			</router-link>
			<img src="@/assets/svg/user/profile/colphone_ic.svg" slot="img">
		</profile>

		<profile>
			<router-link to='/account/Star-gift-card' slot='main'>
				<span>管理星礼卡</span>
				<span>绑定、删除、报失你的星礼卡，查看消费记录</span>
			</router-link>
			<img src="@/assets/svg/user/profile/rowphone_ic.svg" slot="img">
		</profile>

		<profile>
			<router-link to='' slot='main'>
				<span>个人资料</span>
				<span>修改个人资料，查看账户周年日</span>
			</router-link>
			<img src="@/assets/svg/user/profile/profile_ic.svg" slot="img">
		</profile>

		<profile>
			<router-link to='' slot='main'>
				<span>账户与安全</span>
				<span>管理用户名，邮箱地址，手机号和密码</span>
			</router-link>
			<img src="@/assets/svg/user/profile/security_ic.svg" slot="img">
		</profile>

		<profile>
			<router-link to='' slot='main'>
				<span>邮寄地址簿</span>
				<span>添加、修改、删除地址</span>
			</router-link>
			<img src="@/assets/svg/user/profile/address_ic.svg" slot="img">
		</profile>

		<profile>
			<router-link to='' slot='main'>
				<span>设置</span>
				<span>更改通信语言和订阅方式，登出设备，注销星享卡账户</span>
			</router-link>
			<img src="@/assets/svg/user/profile/setting_ic.svg" slot="img">
		</profile>

	</div>
</template>

<script>
import profile from '@/components/main/user/profile'
export default {
	data () {
		return {

		}
	},
	components: {
		profile
	}

}

</script>

<style scoped>
	.row > a {
		width: 92%;
	}
	.row > a > span:first-of-type {
		color: black;
		display: block;
		padding: 30px 0px 0px 30px;
		font-size: 18px;
		text-align: left;
	}
	.row > a > span:last-of-type {
		margin-top: 4px;
		color: rgba(0,0,0,.38);
		padding: 0px 0px 0px 30px;
		font-size: 14px;
	}
</style>