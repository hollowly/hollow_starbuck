<!--  -->
<template>
	<div>
		<slotbox v-for='item in aaa'>
			<h6 slot='title'>{{item.title}}</h6>
		</slotbox>
	</div>
</template>

<script>

import slotbox from './slotbox'
export default {
	data () {
		return {
			aaa: [
				{title:"咖啡融合冰淇淋",name:'coffeePlusIceCream'},
				{title:"星巴克冷萃咖啡系列",name:'coldBrew'},
				{title:"手工调制浓缩咖啡",name:'coffeePlusIceCream'},
				{title:"星冰乐®",name:'coffeePlusIceCream'},
			]
		}
	},
	components: {
		slotbox
	}

}

</script>

<style scoped>
</style>