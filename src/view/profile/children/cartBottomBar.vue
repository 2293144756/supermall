<template>
	<div class="bottom-bar">
		<div class="check-content">
			<cart-bottom id="item" :isshow="isSelect" @click.native="btnClick()" ></cart-bottom>
			<span>:全选</span>
		</div>
		
		<div class="pre-price">合计:{{'￥'+totalPrice.toFixed(2)}}</div>
		<div class="pre-count">去计算({{precount}})</div>
	</div>
</template>

<script>
	import cartBottom from './cartBottom.vue'
	import {mapGetters} from 'vuex'
	export default {
		name:'cartBottomBar',
		data()
		{
			return {
				
			}
		},
		components:{
			cartBottom
		},
		computed:{
			totalPrice()
			{
				let count =0
				let arr = this.$store.state.cartList.filter(item => {
					return item.checked
				})
				
				for(let i=0; i<arr.length; i++)
				{
					count += arr[i].count * arr[i].price
				}
				count.toFixed(2)
				return count
			},
			precount()
			{
				return this.$store.state.cartList.filter(item=>{
					return item.checked
				}).length
			},
			isShow()
			{
				if(this.$store.state.cartList.length == 0)
				{
					return false
				}
				return this.$store.state.cartList.find(item=>{
					return !item.checked
				})
			},
			...mapGetters({
				length:'cartLister'
			}),
			isSelect()
			{
				if(this.length.length == 0) return false
			return	!this.length.find(item=> !item.checked)
			}
			
		},
		methods:{
			btnClick()
			{
				let arr = this.$store.state.cartList.filter(item => {
					return item.checked == item.checked
				})
				this.isShow = !this.isShow
				for(let i=0; i<arr.length; i++)
				{
					arr[i].checked = !arr[i].checked
				}
				
			}
		}
	}
</script>

<style>
	.bottom-bar {
		display: flex;
		height: 40px;
		background: #EEEEEE;
		padding: 1px 0px;
		font-size: 14px;
	}
	.check-content {
		display: flex;
		line-height: 40px;
		margin-left: 4px;
	}
	#item {
		position: relative;
		top: 4px;
	}
	.pre-price {
		flex: 1;
		font-size: 17px;
		line-height: 40px;
		margin-left: 40px;
	}
	.pre-count {
		width: 90px;
		float: right;
		text-align: center;
		background: red;
		line-height: 40px;
		padding: 0px 10px;
		color: #F6F6F6;
	
	}
</style>
