<!--  -->
<template>
	<main>
		<ul>
			<span class='next'>＞</span>
			<li><a href=""><img src="@/assets/img/main_top1.jpg"></a></li>
			<li><a href=""><img src="@/assets/img/main_top2.jpg"></a></li>
		</ul>
	</main>
</template>

<script>
export default {
	data () {
		return {

		}
	},

}

</script>

<style scoped>
/********************* main ************************/
	main {
		width: 70%;
		height: 100%;
		float: right;
	}
	main > ul {
		width: 100%;
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
		width: 100%;
		float: left;
	}
	.next {
		display: inline;
		float: right;
		font-size: 50px;
		font-weight: 100;
		transform: translate(-10px,100px);
	}
</style>