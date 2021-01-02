<!--  -->
<template>
	<div id='profile'>
		<a href='/menu'><h6><img src="@/assets/svg/screen-left.svg">菜单</h6></a>
		<h3 style="font-weight:700">饮料</h3>
		<ul>
			<li><router-link to="/menu/beverages/" class="active">全部</router-link></li>
			<li v-for='item in menu'>
				<router-link to=''>{{item.text}}</router-link>
			</li>
		</ul>
	</div>
</template>
<script>

//引用 Bus 来进行兄弟组件中之间通信
import Bus from '@/utils/bus'

export default {
	data () {
		return {
			menu:[
				{text:'星巴克玩味冰调™'},
				{text:'手工调制浓缩咖啡'},
				{text:'星冰乐®'},
				{text:'茶瓦纳™'},
				{text:'经典巧克力饮品'},
				{text:'咖啡融合冰淇淋'},
				{text:'星巴克冷萃咖啡系列'},
				{text:'气致™冷萃咖啡'},
			]
		}
	},
	mounted() {
		$(function() {
			$('ul > li > a').click(function() {
				$(this).addClass('active').parent('li').siblings('li').children('a').removeClass('active');

				// 使用 Bus 发送被点击的 a 标签的文本，
				//在 rbeverages 组件中接收
				//目的是为了把点击标签的文本发送到 beverages 组件，再在 beverages 组件中进行筛选出对应文本的模块来渲染
				Bus.$emit('texttitle', $(this).text());
			})
		})
	}
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