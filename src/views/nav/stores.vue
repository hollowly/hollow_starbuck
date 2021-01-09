<!--  -->
<template>
	<div id='profile'>
		<img src='@/assets/svg/locator.svg' width="15">
		<span>四川省 广元市 利州区</span>
		<span>﹀</span>
		<br><br>
		<input type="text" placeholder='输入地址查找门店'>
		<img src="@/assets/svg/storesSearch.svg">
		<span>筛选</span>
		<br><br><br><br>
		<img src='@/assets/svg/noStores.svg' class="loading">
	</div>
</template>
<style scoped>
	#profile {
		position: absolute;
		top: 110px;
		left: 30px;
    font-size: 15px;
    cursor: pointer;
		color: #333;
		z-index: 999;
	}
	#profile > img {
		vertical-align: middle;
	}
	#profile > span {
		padding: 10px;
	}
	#profile > span:nth-of-type(2) {
		font-weight: 700;
	}
	#profile > input {
		height: 30px;
		border: none;
		border-bottom: 1px solid #ccc;
		outline: none;
		font-weight: 300;
		font-size: 18px;
		color: rgb(117,117,139);
		transition: all .5s;
	}
	#profile > input:hover {
		border-bottom: 1px solid #00a862;
	}
	#profile > span:last-child {
		font-size: 18px;
		color: rgb(117,117,139);
		font-weight: 300;
	}
	.loading {
		position: relative;
		left: 50%;
	}
</style>