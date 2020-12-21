<template>
  <div id="app">
		<keep-alive>
    	<router-view />
		</keep-alive>

  </div>
</template>

<style lang="scss">
@import url('assets/css/base.css');

#app {
	width: 1520px;
	height: 100%;
	overflow-x: hidden;
}
html {
	width: 1520px;
	height: 100%;
	margin: 0 auto;
}
</style>
