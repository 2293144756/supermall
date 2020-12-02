<template>
	<div id="tab-bar">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name:'TabBar'
	}
</script>

<style>
	#tab-bar {
		flex: 1;
	}
</style>
