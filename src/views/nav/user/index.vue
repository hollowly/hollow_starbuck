<!--  -->
<template>
	<div id='profile'>
		<h3 style="font-weight:700">晚上好！name☕</h3>
		<ul>
			<!-- 我叫{{this.$store.state.data}} -->
			<li><router-link to="/account" class="active">账户一览</router-link></li>
			<li v-for='item in menu'>
				<router-link :to="item.url">{{item.text}}</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
// import {request} from '@/network/request'

export default {
	
	data () {
		return {
			menu: [
				{url:'/account/activity',text:'消费记录'},
				{url:'/account/rewards',text:'星享好礼'},
				{url:'/account/profile',text:'管理我的账户'},
				{url:'/club',text:'关于星享俱乐部'},
			],
		}
	},
	// mounted() {
	// 	request({
	// 		url:'/data3.json',
	// 	}).then(res => {
	// 		this.menu = res.data.menu
	// 	}).catch(err => {
	// 		console.log(err);
	// 	})
	// },
}
</script>

<style scoped>
	#profile {
		position: absolute;
		top: 260px;
		left: 120px;
	}
	ul > li {
		list-style: none;
		margin: 20px 20px 20px 0px;
	}
	ul > li > a:hover {
		color: black;
	}
	ul > li > a {
		color: #777;
	}
	.active {
		font-weight: 700;
		border-bottom: 3px solid #00a862;
		color: black;
	}

	@media screen and (max-width: 992px){
		#profile {
			top: 75px;
			left: 20px;
		}
		ul > li {
			float: left;
		}
	}
</style>