<!--  -->
<template>
	<div>
		<div class="container">
			<h4>主要新品</h4>
			<div class="row">
				<menuimg><img src="@/assets/img/main/menu/newmain1.jpg"><p>熔岩黑巧摩卡</p></menuimg>
				<menuimg></menuimg>
				<menuimg></menuimg>
			</div>
		</div>
	</div>
</template>

<script>
import menuimg from '@/components/main/menuimg'
export default {
	components: {
		menuimg,
	}
}
</script>

<style scoped>
	.container {
		text-align: center;
		background: rgb(247,247,247);
	}
	.container > h4 {
		padding: 28px 0px;
	}
	.container > .row {
		width: 80%;
		margin: 0 auto;
	}

	.container > .row > div {
		text-align: center;
		width: 30%;
	}

	.container > .row > div:last-child {
		margin-right: 0;
	}

	
</style>