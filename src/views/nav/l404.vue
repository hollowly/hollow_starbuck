<!--  -->
<template>
	<div id='profile'>
		<a href='/'><h6><img src="@/assets/svg/screen-left.svg">回到TSIA首页</h6></a>
		<h3>页面错误</h3>
	</div>
</template>
<script>

//引用 Bus 来进行兄弟组件中之间通信
import Bus from '@/utils/bus'

export default {
	data () {
		return {

		}
	},
}
</script>

<style scoped>
	#profile {
		position: absolute;
		top: 280px;
		left: 140px;
		z-index: 999;
	}
	#profile > a {
		display: inline-block;
		margin-left: -7px;
	}
	#profile > a > h6 {
		font-weight: 700;
		color: black;
		opacity: .5;
	}
	#profile > h3 {
		font-weight: 700;
	}
</style>