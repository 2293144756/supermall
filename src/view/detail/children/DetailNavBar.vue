<template>
	<div class="detail-nav-bar">
		<nav-bar class="nav-bai">
			<div slot="left" class="toke">
				<img @click="imgclick()"   src="../../../assets/img/详情页/左箭头.png"/>
			</div>
			<div slot="content" class="titless">
				<div @click="clickitem(index)" class="itemss" :class="{active : current === index}" v-for="(item , index) in titles">{{item}}</div>
			</div>
		</nav-bar>
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar.vue'
	export default {
		name:'DetailNavBar',
		data()
		{
			return {
				titles:['商品','参数','评论','推荐'],
				current:0
			}
		},
		methods:{
			clickitem(index)
			{
				this.current = index;
				this.$emit('tabClick',index)
			},
			imgclick()
			{
				this.$router.back()
			}
		},
		components:{
			NavBar
		}
	}
</script>

<style>
	.nav-bai {
	  position: relative;
	  z-index: 9999;
	}
	.titless {
		display: flex;
		
	}
	.itemss {
		flex: 1;
		font-weight: 500;
		font-size: 14px;
		
	}
	.active {
		color: red;
	}
	
	.toke img {
		height: 24px;
		width: 24px;
		position: relative;
		top:5px;
		left: -10px;
		
	}
</style>
