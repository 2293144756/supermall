<template>
	<div class="goods-list"  >
		<goods-list-item v-for="item in goods" :item="item"></goods-list-item>
	</div>
</template>

<script>
	import GoodsListItem from './GoodsListItem'
	export default{
		name:'GoodsList',
		props:{
			goods:Array,
			default()
			{
				return []
			}
		},
		components:{
			GoodsListItem
		},
		methods:{
			
		}
	}
</script>

<style>
	.goods-list {
	
	   display: flex;
	   flex-wrap: wrap;
	   justify-content: space-around;
	   padding: 0 3px;
	  
	   
	   
	
	}
</style>
