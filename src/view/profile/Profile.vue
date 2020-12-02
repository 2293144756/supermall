<template>
	<div class="profile">
		<profile-nav-bar class="profile-nav-bar">
			<div slot="content">购物车({{length}})</div>
		</profile-nav-bar>
		<scroll class="profile-scroll" >
			<cart-list></cart-list>
		</scroll>
		<cart-bottom-bar></cart-bottom-bar>
	</div>
</template>

<script>
	import profileNavBar from '../../components/common/navbar/NavBar.vue'
    import cartList from './children/cartList.vue'
	import Scroll from '../../components/common/scroll/Scroll.vue'
    import cartBottomBar from './children/cartBottomBar.vue'
	import {mapGetters} from 'vuex'
	export default {
		name:'Profile',
		components:{
			profileNavBar,
			cartList,
		    cartBottomBar,
			Scroll
		},
		computed:{
		   //	...mapGetters(['cartlength'])
		   ...mapGetters({
			   length:'cartlength'
		   })
		},
	
		
	}
</script>

<style>
	.profile {
		position: relative;
		height: 100vh;
		overflow: hidden;
	}
	.profile-nav-bar {
		background:  var(--color-tint);
	}
	.profile-scroll {
	
		height: calc(100% - 44px - 49px - 40px );
		overflow: hidden;
	}
</style>
