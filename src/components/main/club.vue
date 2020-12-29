<!--  -->
<template>
	<div>
		<div class="container-fuild rewards">
			<img src="@/assets/img/main/club/title.png" width="260">
			<div class="row">
				<div class="col-sm" v-for='item in rewards'>
					<img :src="item.imgUrl" width="120">
					<h5>{{item.title}}</h5>
					<p>{{item.p}}</p>
				</div>
			</div>
				<p class="treaty">详情以<span>《星享俱乐部活动的条款和条件》</span>的规定为准</p>
				<img src="@/assets/img/main/club/banner.jpg" class="img-fluid">
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

</style>