<!--  -->
<template>
	<div>
		<div class="container">
			<h4>主要新品</h4>
			<div class="row">
				<div class="col-sm">
					<img src="@/assets/img/main/menu/newmain1.jpg"><p>太妃榛果拿铁</p>
				</div>
				<div class="col-sm">
					<img src="@/assets/img/main/menu/newmain2.jpg"><p>熔岩黑巧摩卡</p>
				</div>
				<div class="col-sm">
					<img src="@/assets/img/main/menu/newmain3.jpg"><p>流金圣诞茶拿铁</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.container {
		background: rgb(247,247,247);
	}
	.container > .row {
		width: 80%;
		margin: 0 auto;
		/* border: 1px solid blue; */
	}

	.container > .row > div {
		text-align: center;
		width: 30%;
	}

	.container > .row > div:last-child {
		margin-right: 0;
	}

	.container > .row > div > img {
		width: 83%;
		margin-bottom: 20px;
	}
</style>