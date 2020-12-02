<template>
	<div class="nav-bar">
		<div class="left"><slot name="left"></slot></div>
		<div class="content"><slot name="content"></slot></div>
		<div class="right"><slot name="right"></slot></div>
	</div>
</template>

<script>
	export default {
		name:'NavBar'
	}
</script>

<style>
	.nav-bar {
		display: flex;
		height: 44px;
		letter-spacing: 2px;
		font-weight: 600;
		line-height: 44px;
		text-align: center;
		background: #F6F6F6;
		
		
		
		
	}
	.left{
		width: 20%;
		height: 44px;
		
	}
	.right {
		width: 20%;
		height: 44px;
	
	}
	.content {
		flex: 1;
		height: 44px;
		
		
	}
</style>
