<template>
	<div class="tab-control">
		<div v-for="(item,index) in titles" class="tab-control-item" >
			<span :class="{span:current === index}" @click="btnclick(index)">{{item}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name:'tabControl',
		props:{
			titles:Array
		},
		data()
		{
			return{
				current:0
			}
		},
		methods:{
			btnclick(index)
			{
				this.current = index;
				this.$emit('btnitemclick', index)
			}
		}
	}
</script>

<style>
	.tab-control {
		display: flex;
		text-align: center;
		font-size: 15px;
		height: 40px;
		line-height: 40px;
		z-index: 10;
	}
	.tab-control-item {
		flex: 1;
	}
	.span {
		padding: 4px;
		border-bottom: 3px red solid;
		color: var(--color-high-text);
	}
</style>
