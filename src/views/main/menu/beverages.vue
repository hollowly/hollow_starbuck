<!--  -->
<template>
	<div id='profile'>
		<router-link to='/menu'><h6><img src="@/assets/svg/screen-left.svg">菜单</h6></router-link>
		<h3 style="font-weight:700">饮料</h3>
		<ul>
			<li><router-link to="/menu/beverages/" class="active">全部</router-link></li>
			<li v-for='item in menu'>
				<router-link :to="item.url">{{item.text}}</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
	data () {
		return {
			menu:[
				{text:'星巴克玩味冰调™',url:'/menu/beverages/'},
				{text:'手工调制浓缩咖啡',url:'/menu/food/'},
				{text:'星冰乐®',url:'/menu/coffee/'},
				{text:'茶瓦纳™',url:'/menu/merchandise/'},
				{text:'经典巧克力饮品',url:'/menu/merchandise/'},
				{text:'咖啡融合冰淇淋',url:'/menu/merchandise/'},
				{text:'星巴克冷萃咖啡系列',url:'/menu/merchandise/'},
				{text:'气致™冷萃咖啡',url:'/menu/merchandise/'},
			]
		}
	},
}
</script>

<style scoped>
	#profile {
		position: absolute;
		top: 170px;
		left: 120px;
	}
	#profile > a {
		display: inline-block;
		margin-left: -7px;
	}
	#profile > a > h6 {
		font-weight: 700;
		color: black;
		opacity: .5;
	}
	#profile > a > h6 > img {
		margin-bottom: 3px;
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



	.active {
		font-weight: 700;
		border-bottom: 3px solid #00a862;
		color: black;
	}
</style>