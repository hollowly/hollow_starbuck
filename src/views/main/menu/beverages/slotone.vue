<!--  -->
<template>
	<div class="imgbox">
		<slot name='img'><img src="@/assets/img/main/menu/beverages/coffee-plus-ice-cream/1.jpg"></slot>
		<slot name='text'><strong>阿馥奇朵™</strong></slot>
	</div>
</template>

<script>
export default {
	mounted() {
		$(function() {
			$('.imgbox').mouseenter(function() {
				$(this).css({
					'transform':'translateY(-5px)',
				})
			}).mouseleave(function() {
				$(this).css({
					'transform':'translateY(0px)',
				})
			})
		})
	}

}

</script>

<style scoped>
	.imgbox {
		transition: all .3s;
		cursor: pointer;
	}
	div > img {
		margin-top: 3px;
		width: 95%;
		box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.12);
		border-radius: 999px;
	}
	div:hover > img {
		box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.15);
	}
	div > strong {
		display: block;
		padding: 10px 0px 20px 0px;
	}
</style>