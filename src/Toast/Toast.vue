<template>
	<div class="toast" v-show="show">
		<p>{{message}}</p>
	</div>
</template>

<script>
	export default {
		name:'Toast',
		props:{
			message:{
				type:String,
				
			},
			show:{
				type:Boolean,
				default()
				{
					return false
				}
			}
		}
	}
</script>

<style>
	.toast p {
		padding: 10px 10px;
		color: #F6F6F6;
		background: rgb(0,0,0,.5);
		
	}
</style>
