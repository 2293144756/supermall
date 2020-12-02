<template>
	<div class="tab-bar-item" @click="btnclick">
		<div v-if="!isShow"><slot name="icon-img"></slot></div>
		<div v-else><slot name="icon-img-active"></slot></div>
		<div :class="{active:isShow}" ><slot name="icon-text"></slot></div>
	</div>
</template>

<script>
	export default {
		name:'TabBarItem',
		props:{
			path:String
		}
		,
		data()
		{
			return {
			  
			}
		},
		created()
		{
			
		},
		methods:{
			btnclick()
			{
			  this.$router.push(this.path)
			}
		},
		computed:{
			isShow()
			{
				return this.$route.path.indexOf(this.path) !== -1
			}
			
		}
	}
</script>

<style>
	.tab-bar-item {
	    
		font-size: 14px;
		text-align: center;
		
	}
	.tab-bar-item img {
		height: 30px;
		width: 30px;
		padding-bottom: 2px;
		vertical-align:bottom
	}
	.active {
		color: red;
	}
</style>
