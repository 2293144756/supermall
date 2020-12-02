<template>
	<div class="back-top">
		<img src="../../../assets/img/tabbar/57-向上箭头.png"/>
	</div>
</template>

<script>
	export default {
		name:'backTop'
	}
</script>

<style>
	.back-top {
		position: fixed;
		bottom: 60px;
		right: 10px;
		background: #F6F6F6;
		border-radius: 100%;
		text-align: center;
		z-index: 9999999;
		
	}
	.back-top img {
		width: 34px;
		height: 34px;
	
		
	}
</style>
