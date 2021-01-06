<!--  -->
<template>
	<div class="imgbox">
		<slot name='img'></slot>
		<slot name='text'><strong></strong></slot>
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
		border-radius: 100%;
	}
	div:hover > img {
		box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.15);
	}
	div > strong {
		display: block;
		padding: 10px 0px 20px 0px;
	}
</style>