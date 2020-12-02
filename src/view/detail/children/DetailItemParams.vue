<template>
	<div class="detail-item-params" v-if="Object.keys(paramsInfo).length !==0">
		<table class="info-item">
			<tr v-for="(tables,index) in paramsInfo.rule.tables[0]" :key="index">
				<td v-for="(td,indez) in tables" :key="indez">{{td}}</td>
			</tr>
		</table>
		<table class="info-item1">
			<tr v-for="items in paramsInfo.info.set">
				<td class="td" v-for="(tdd ,index) in items" :key="index">{{tdd}}</td>
			</tr>
		</table>
		</div>
	</div>
</template>

<script>
	export default {
		name:'DetailItemParams',
		props:{
			paramsInfo:{
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
	.info-item {
		width: 100%;
		margin-top: 10px;
		font-size: 16px;
		color: #000000;
		padding: 0px 10px;
		border-bottom: 5px #EEEEEE solid;
	
	}
	.info-item tr {
		
	   border-bottom: 2px #EEEEEE solid;
	}
	.info-item td {
		padding: 10px 0px;
		
	
	}
	.info-item1 {
		margin-top: 10px;
		padding: 0px 10px;
		width: 100%;
		font-size: 15px;
		color: black;
		padding-bottom: 10px;
		border-bottom: 4px #EEEEEE solid;
		
		
	}
	.td:nth-child(even) {
		color: red;
	}
	.indi-item1 tr {
		border-bottom: 2px #EEEEEE solid;
	}
	
	.info-item1 td {
		
		padding: 10px 0 ;
		width:40px;
		border-bottom: 2px #EEEEEE solid;
	}
	
	
</style>
