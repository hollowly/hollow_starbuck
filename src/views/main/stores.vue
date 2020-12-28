<!--  -->
<template>
	<main>
    <div style="height: 100vh" id="container"></div>
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
    });
  }
};

</script>

<style scoped>

</style>