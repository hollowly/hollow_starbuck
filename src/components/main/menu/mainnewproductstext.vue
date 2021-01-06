<!--  -->
<template>
	<div class="container">
		<div class="row">
			<div class="col-sm">
				<slot>
				</slot>
			</div>
		</div>
	</div>
</template>
<style scoped>
	.container > .row > div {
		text-align: center;
	}
	.container >.row {
		margin-bottom: 50px;
	}
	.container > .row > div > h4 {
		padding: 45px 0px 8px 0px;
		font-weight: 400;
	}
	.container > .row > div > p {
		margin: 0;
		padding: 1px 0px;
	}
</style>