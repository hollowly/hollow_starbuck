<!--  -->
<template>
	<main>
			<span class='next'>＞</span>
		<ul>
			<li><a href=""><img src="@/assets/img/main_top1.jpg"></a></li>
			<li><a href=""><img src="@/assets/img/main_top2.jpg"></a></li>
		</ul>
	</main>
</template>

<script>
import $ from 'jquery'
export default {
	data () {
		return {

		}
	},
	mounted() {
		$(function() {

		})
	}

}

</script>

<style scoped>
/********************* main ************************/
	main {
		width: 70%;
		height: 100%;
		float: right;
		overflow: hidden;
	}
	main > ul {
		width: 200%;
		list-style: none;
		display: inline-block;
		transform: translateY(-105px);
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
		top: 25%;
		left: 93%;
		z-index: 10;
		cursor: pointer;
		user-select: none;
	}
</style>