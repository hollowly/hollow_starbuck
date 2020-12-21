<!--  -->
<template>
	<main>
			<span class='next'>＞</span>
		<ul>
			<li><a href=""><img src="@/assets/img/index/top1.jpg"></a></li>
			<li><a href=""><img src="@/assets/img/index/top2.jpg"></a></li>
		</ul>
		
		<div id='promotion'>
			<a href=""><img src="@/assets/img/index/tmall1.jpg"></a>
			<a href=""><img src="@/assets/img/index/tmall2.jpg"></a>
			<a href=""><img src="@/assets/img/index/tmall3.jpg"></a>
		</div>

		<div>
			<img src="@/assets/svg/logo-msr-new.svg">
		</div>
	</main>
</template>

<script>
import $ from 'jquery'
export default {
	mounted() {
		$(function() {
			$('.next').click(() => {
				alert('等待修复')
			})

			$('#promotion > a > img').mouseenter(function() {
				$(this).css({
					'transform':'translateY(-5px)',
					'box-shadow': '0 1px 3px 2px rgba(0, 0, 0, 0.15)'
				})
			}).mouseleave(function() {
				$(this).css({
					'transform':'translateY(0px)',
					'box-shadow': '0 1px 3px 2px rgba(0, 0, 0, 0)'
					})
			})
		})
	}

}

</script>

<style scoped>
/********************* main ************************/
	main {
		width: 70%;
		height: 200%;
		float: right;
		transform: translateY(-105px);
	}
	main > ul {
		width: 200%;
		list-style: none;
		display: inline-block;
	}
	main > ul > li {
		width: 100%;
	}
	main > ul > li > a{
		width: 100%;
	}
	main > ul > li > a > img {
		width: 50%;
		float: left;
	}
	.next {
		font-size: 80px;
		font-weight: 100;
		color: white;
		position: relative;
		top: 40%;
		left: 91%;
		z-index: 10;
		cursor: pointer;
		user-select: none;
	}

	#promotion {
		background: rgb(247,247,247)
	}
	#promotion > a > img {
		width: 30%;
		border-radius: 15px;
		margin: 20px 0px 20px 25px;
		transition: all .3s;
	}
</style>