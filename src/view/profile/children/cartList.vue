<template>
	<div class="cartList">
		<cart-list-item v-for="(item,index) in length" :key="index" :item="item"></cart-list-item>
	</div>
</template>

<script>
   import cartListItem from './cartListItem'
   import {mapGetters} from 'vuex'
	export default {
		name:'cartList',
		components:{
			cartListItem
		},
		computed:{
			...mapGetters({
				length:'cartLister'
			})
		}
	
	}
</script>

<style>
</style>
