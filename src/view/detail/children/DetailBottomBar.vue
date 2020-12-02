<template>
	<div class="detail-bottom-bar">
		<div class="item-bar bar-left" >
			<div>
				<div class="icon services"> <img src="../../../assets/img/详情页/底部导航栏/客服.png"/></div>
				<span class="text">客服</span>
			</div>
			<div>
				<div class="icon shop"> <img src="../../../assets/img/详情页/底部导航栏/店铺.png"/></div>
				<span class="text">店铺</span>
			</div>
			<div>
				<div class="icon select"> <img src="../../../assets/img/详情页/底部导航栏/收藏.png" /></div>
				<span class="text">收藏</span>
			</div>
		</div>
		<div class="item-bar bar-right">
			<div class="cart" @click="btnclickimg">加入购物车</div>
			<div class="buy">购买</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'DetailBottomBar',
		methods:{
			btnclickimg()
			{
				this.$emit('btncfhd')
			}
		}
	}
</script>

<style>
	.detail-bottom-bar {
		display: flex;
		height: 49px;
		background: #FFFFFF;
		position: relative;
		
		left: 0;
		right: 0;
		z-index: 10000;
	}
	.item-bar {
	
	}
.bar-left {
	display: flex;
	width: 50%;
	font-size: 14px;
}
.bar-left>div {
	
	flex: 1;
	text-align: center;
}
.services img {
	width: 30px;
	height: 30px;
}
.shop img{
	width: 30px;
	height:30px;
}
.select img {
	width: 30px;
	height: 30px;
}
.bar-right {
   width: 50%;
   font-size: 15px;
}
.cart {
	float: left;
	width: 50%;
	height: 49px;
	text-align: center;
	line-height: 49px;
	background: yellow;
}
.buy {
	float: right;
	height: 49px;
	width: 50%;
	background:deeppink;
	line-height: 49px;
	text-align: center;
	color: #FFFFFF;
}
</style>
