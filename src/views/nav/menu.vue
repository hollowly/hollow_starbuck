<!--  -->
<template>
	<div id='profile'>
		<h2>菜单</h2>
		<ul>
			<li><a href="/menu" class="active">季度精选</a></li>
			<li v-for='item in menu'>
				<a :href="item.url">{{item.text}}</a>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data () {
		return {
			menu:[
				// {text:'季度精选',url:'/menu'},
				{text:'饮料',url:'/menu/beverages/'},
				{text:'美食',url:'/menu/food/'},
				{text:'咖啡产品',url:'/menu/coffee/'},
				{text:'商店',url:'/menu/merchandise/'},
			]
		}
	},
}
</script>

<style scoped>
	#profile {
		position: absolute;
		top: 260px;
		left: 120px;
	}
	ul > li {
		list-style: none;
		margin: 20px 20px 20px 0px;
	}
	ul > li > a:hover {
		color: black;
	}
	ul > li > a {
		color: #777;
	}
	.active {
		font-weight: 700;
		border-bottom: 3px solid #00a862;
		color: black;
	}

	@media screen and (max-width: 992px){
		#profile {
			top: 75px;
			left: 20px;
		}
		ul > li {
			float: left;
		}
	}
</style>