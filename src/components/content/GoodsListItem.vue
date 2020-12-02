<template>
	<div class="goods-list-item" @click="imgclick">
		<img :src="item.show.img" @load="imgload" />
		<div class="goods-info">
			<p>{{item.title}}</p>
			<span class="price">{{item.price}}</span>
			<img src="../../assets/img/tabbar/星号.png"/>
			<span class="cfav">{{item.cfav}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name:'GoodsListItem',
		props:{
			item:{
				type:Object,
				default()
				{
					return {}
				}
			}
			
		},
		methods:{
			imgload()
			{
				this.$bus.$emit('imgLoadItem')
			},
			imgclick()
			{
				this.$router.push('/detail/' + this.item.iid)
			
			}
		}
	}
</script>

<style >
	.goods-list-item {
		position: relative;
		width: 48%;
		padding-bottom: 40px;
	
	}
		.goods-list-item img {
			width: 100%;
			border-radius: 5px;
		}
	.goods-info {
		position: absolute;
		bottom: 5px;
		left: 0;
		right: 0;
		font-size: 12px;
		overflow: hidden;
		text-align: center;
	}
	.goods-info p {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.goods-info .price {
		color: #FF0000;
	
	}
	.goods-info .cfav {
		position: relative;
	}
	 .goods-info img {
		 position: relative;
		 top: 2px;
		 width: 14px;
		 height: 14px;
		 margin: 0px 5px;
		 color: red;
	 }
</style>
