<!--  -->
<template>		
	<div class="container">
		<div class="row">
			<div class="col-sm">
				<slot name='title'></slot>
			</div>
			<ul>
				<slot name='li'>
					
				</slot>
			</ul>
		</div>
	</div>
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
	.container {
		text-align: center;
		width: 70%;
		background: white;
		box-shadow: 0 1px 1px 1px rgba(0,0,0,.12);
		transform: translateY(30px);
		margin-bottom: 30px;
	}
	.container > .row > div > h4 {
		float: left;
		margin: 20px;
	}
	.container > .row > div {
		width: 90%;
		margin: 0  auto;
    flex-grow: 0.95;
		border-bottom: 4px solid #e0e0e0;
	}
	.container > div > ul {
		display: block;
		list-style: none;
		width: 100%;
	}
	.container > div > ul > li {
		width: 95%;
		height: 70px;
		margin: 0 auto;
		padding: 10px 0px;
		border-bottom: 1px solid rgba(0,0,0,.12);
	}
	.container > div > ul > li:last-of-type {
		border: 0px;
		margin-bottom: -15px;
	}
	.container > div > ul > li > span {
		margin-left: 20px;
		float: left;
	}
	.container > div > ul > li > span > p:first-of-type {
		font-size: 16px;
		margin: 0;
    font-family: Gothma-book;
	}
	.container > div > ul > li > span > p:last-of-type {
		float: left;
		font-size: 13px;
		margin: 0;
    color: rgba(0,0,0,.56);
    font-family: Gothma-book;
	}
	.container > div > ul > li > span > img {
		margin: 5px 10px 0px 0px;
	}
</style>