<template>
	<div class="cart-list-item">
		<div class="cart-select">
			<cart-bottom class="now" :isshow="item.checked" @click.native="buttomClick"></cart-bottom>
		</div>
		<div class="pre-cart-img">
			<img :src="item.image"/>
		</div>
		<div class="pre-cart-info">
			<div class="pre-cart-title">{{item.title}}</div>
			<div class="pre-cart-desc">{{item.desc}}</div>
			<div class="pre-cart-bottom">
				<div class="pre-cart-price left">{{item.price | showPrice}}</div>
				<div class="pre-cart-count right">x {{item.count}}</div>
			</div>
		</div>
		
	</div>
</template>

<script>
   import cartBottom from './cartBottom.vue'
	export default {
		name:'cartListItem',
		props:{
			item:{
				type:Object,
				default()
				{
					return {}
				}
			}
		},
		components:{
			cartBottom
		},
		filters:{
			showPrice(value)
			{
				return '￥' + value
			}
		},
		methods:{
			buttomClick()
			{
				this.item.checked = !this.item.checked
			}
		}
	}
</script>

<style>
	.cart-list-item {
		
		width: 100%;
		display: flex;
		padding: 10px 10px;
		border-bottom: 3px #EEEEEE solid;
	}
	.pre-cart-img img {
		height: 160px;
		width: 100px;
		border-radius: 5px;
	}
	.pre-cart-title , .pre-cart-desc {
		margin-left: 10px;
		width: 220px;
		overflow: hidden;
		white-space: nowrap;
	    text-overflow:ellipsis;
	}
	.pre-cart-desc {
		margin-top: 25px;
		
		font-size: 14px;
		text-overflow: ellipsis;
	}
	.pre-cart-bottom {
		margin-top: 60px;
		margin-left: 10px;
	}
	.left {
		float: left;
		font-size: 18px;
		color: red;
	}
	.right {
		float: right;
	}
	.cart-select {
	   
		
	}
	.now {
		position: relative;
		top: 80px;
		left: -5px;
	}
</style>
