<!--  -->
<template>
	<main>
		<div class="container-fuild">
			<!-- <div class="row"> -->
				<div style="height: 100vh" id="container"></div>
			<!-- </div> -->
		</div>
	</main>
</template>

<script>
import AMap from "AMap"

export default {
  name: "Index",
  data() {
    return {}
  },
  mounted() {
    new AMap.Map("container", {
      resizeEnable: true,
      zoom: 11
    })
  }
}
</script>

<style scoped>
	.container-fuild {
		height: 100%;
		border: 1px solid white;
	}
	.row {
		height: 100%;
	}
</style>