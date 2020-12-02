<template>
	<div class="cart-bottom">
		<img :class="{check:isshow}" src="../../../assets/img/详情页/底部导航栏/对号2(1).png"/>
	</div>
</template>

<script>
	export default {
		name:'cartBottom',
		props:{
			isshow:{
				type:Boolean,
				default: true
			}
		}
	}
</script>

<style>
	.cart-bottom {
		position: relative;
		
	}
	.cart-bottom img {
		width: 20px;
		height: 20px;
		border-radius: 50%;
	}
	.check {
		background: red;
	}
</style>
