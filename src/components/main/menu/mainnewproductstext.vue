<!--  -->
<template>
	<div class="container">
		<div class="row">
			<div class="col-sm">
				<slot>
					<h4>Carry The Merry</h4>
					<p>叮叮当~喜欢的节日在慢慢到来</p>
					<p>喜欢的太妃榛果拿铁也如约而至</p>
					<p>这一次融入了燕麦奶，平衡了甜度和醇香</p>
					<p>是今年不可错过的全新经典。</p>
					<p>熔岩黑巧摩卡和暖意圣诞茶拿铁</p>
					<p>一杯丝滑绵软一杯茶香温润</p>
					<p>都能让快乐在唇齿间流转</p>
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