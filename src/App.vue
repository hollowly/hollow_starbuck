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
	width: 100%;
	height: 100%;
	overflow-x: visible;
}
</style>
