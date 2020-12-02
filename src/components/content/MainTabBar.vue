<template>
	<div class="main-tab-bar">
		
	   <tab-bar  >
		   <tab-bar-item path="/home" >
			   <img slot="icon-img" src="../../assets/img/tabbar/首页.png"/>
			   <img slot="icon-img-active" src="../../assets/img/tabbar/首页活跃.png"/>
			   <div slot="icon-text">首页</div>
		   </tab-bar-item>
	   </tab-bar>
	   <tab-bar >
		   <tab-bar-item path="/category">
			   <img slot="icon-img" src="../../assets/img/tabbar/分类.png"/>
			   <img slot="icon-img-active" src="../../assets/img/tabbar/分类活跃.png" />
			   <div slot="icon-text">分类</div>
		   </tab-bar-item>
	   </tab-bar>
	   <tab-bar>
		   <tab-bar-item  path="/profile">
			   <img slot="icon-img" src="../../assets/img/tabbar/购物车.png">
			   <img slot="icon-img-active" src="../../assets/img/tabbar/购物车活跃.png"/>
			   <div slot="icon-text">购物车</div>
		   </tab-bar-item>
	   </tab-bar>
	   <tab-bar >
		   <tab-bar-item path="/mine">
			   <img slot='icon-img' src="../../assets/img/tabbar/我的.png"/>
			   <img slot="icon-img-active" src="../../assets/img/tabbar/我的活跃.png"/>
			   <div slot="icon-text">我的</div>
			   
		   </tab-bar-item>
	   </tab-bar>
	</div>
</template>

<script>
	 import TabBar from '../common/tabbar/TabBar.1.vue'
	 import TabBarItem from '../common/tabbar/TabBarItem.vue'
	
	export default {
		name:'MainTabBar',
		components:{
		   TabBar,
		   TabBarItem
		}
	}
</script>

<style>
	.main-tab-bar {
		display: flex;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 49px;
		
		background: #f6f6f6;
		box-shadow: -1px -1px 1px rgba(0,0,0,.2);
		z-index: 1000;
	}
</style>
