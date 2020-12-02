<template>
	<div class="recommend">
		<div v-for="item in recommend" class="item">
			<a :href="item.link">
				<img :src="item.image"/>
			</a>
			<div class="title">{{item.title}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'RecommentView',
		props:{
			recommend:{
				type:Array,
				default()
				{
					return []
				}
			}
		}
	}
</script>

<style>
	.recommend {
		display: flex;
		margin-top: 10px;
	}
	.item {
		flex: 1;
		text-align: center;
		font-size: 14px;
		border-bottom:  10px #eee solid;
		padding-bottom: 25px;
	
		
	}
	.item img {
		width: 70px;
		height: 70px;
	}
	.title {
		padding-top: 10px;
	}
</style>
