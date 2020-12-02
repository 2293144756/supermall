<template>
	<div v-if="Object.keys(goods).length !== 0" class="base-info">
		<div class="info-title">{{goods.title}}</div>
		<div class="info-price">
			<span class="n-price">{{goods.newPrice}}</span>
			<span class="o-price">{{goods.oldPrice}}</span>
			<span class="discount" v-if="goods.discount">{{goods.discount}}</span>
		</div>
		<div class="info-other">
			<span>{{goods.columns[0]}}</span>
			<span class="box1">{{goods.columns[1]}}</span>
			<span class="box2">{{goods.services[goods.services.length-1].name}}</span>
		</div>
		<div class="info-services">
			<span class="info-services-item" v-for="index in goods.services.length-1" :key="index">
				<img :src="goods.services[index-1].icon"/>
				<span>{{goods.services[index-1].name}}</span>
			</span>
		</div>
		
	</div>
</template>

<script>
	export default {
		name:'DetailBaseInfo',
		props:{
			goods:{
				type:Object,
				default()
				{
					return {}
				}
			}
		}
	}
</script>

<style>
	.info-title {
		margin-top: 10px;
		padding: 0 7px;
		font-weight: 600;
	}
	.info-price {
		margin-top: 15px;
		padding: 0 7px;
	}
	.n-price {
		color: red;
		font-size: 24px;
	}
	.o-price {
		margin-left: 5px;
		text-decoration:line-through;
		font-size: 12px;
		
	}
	.discount {
		position: relative;
		top: -7px;
		margin-left: 5px;
		padding: 4px;
		background: red;
		border-radius: 20px;
		font-size: 14px;
		color: #EEEEEE;
	}
	.info-other {
		margin-top: 20px;
		padding: 0px 7px;
		display: flex;
	}
	.info-other span {
		flex: 1;
		font-size: 14px;
		padding-bottom: 7px;
		border-bottom: 2px #EEEEEE solid;
	}
	.box1 {
		text-align: center;
	}
	.box2 {
		text-align: right;
	}
	.info-services {
		margin-top: 20px;
		display: flex;
	
		font-size: 14px;
		white-space: nowrap;
		text-overflow: ellipsis;
		color: black;
		padding-bottom: 20px;
		border-bottom: 10px #EEEEEE solid;
	}
	.info-services-item {
		flex: 1;
		padding: 0px 7px;
		
	}
	.info-services-item img {
		position: relative;
		top: 5px;
		width: 20px;
		height: 20px;
	}
</style>
