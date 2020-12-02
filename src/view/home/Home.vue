<template>
	<div id="home">
	<nav-bar class="home-nav">
	<div slot="content">唯品会</div>
	</nav-bar>
	<tab-control :titles="['新款','流行','精选']" class="tab-control1" @btnitemclick="tabclick"
	ref="tabControl2" :class="{fixed :tabFixed}"  v-show="tabFixed"
	>   
	</tab-control>
		   <scroll class="scroll" ref="scroll" @scroll="contentScroll" @pullingUp="updata" :pro-be-type="3" :pull-up-load="true">
			   <home-swiper :banner="banner" @swiperImgLoad="isShowLoad"></home-swiper>
			   <recomment-view :recommend="recommend"></recomment-view>
			   <feature-view></feature-view>
			   <tab-control :titles="['新款','流行','精选']"  @btnitemclick="tabclick"
			   ref="tabControl" :class="{fixed :tabFixed}"
			   >   
			   </tab-control>
			   <goods-list :goods='book' ></goods-list>
			 
		  </scroll>
		    <back-top  @click.native="backclick" v-show="isShowBackTop"></back-top>
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar.vue';
	import {
		getHomeMultidata,
		getHomeGoods
	} from '../../network/home';
	import HomeSwiper from './chlidComps/HomeSwiper.vue';
	import RecommentView from './chlidComps/RecommentView';
	import featureView from './chlidComps/featureView';
	import tabControl from 'components/content/tabControl';
	import GoodsList from 'components/content/GoodsList';
	import Scroll from 'components/common/scroll/Scroll';
	import backTop from 'components/common/backtop/backTop'




	export default {
		name: 'Home',
		data() {
			return {
				banner: [],
				recommend: [],
				goods: {
					'pop': {
						page: 1,
						list: []
					},
					'new': {
						page: 1,
						list: []
					},
					'sell': {
						page: 1,
						list: []
					}
				},
				current: 'pop',
				isShowBackTop:false,
				tabOffsetTop:null,
				tabFixed:false
			}
		},
		components: {
			NavBar,
			HomeSwiper,
			RecommentView,
			featureView,
			tabControl,
			GoodsList,
			Scroll,
			backTop
		


		},
		created() {
			this.getHomeMultidata()
			this.getHomeGoods('pop')
			this.getHomeGoods('new')
			this.getHomeGoods('sell')
		},
		mounted()
		{
			this.$bus.$on('imgLoadItem' , ()=>{
			   this.$refs.scroll ? this.$refs.scroll.refresh() : {}
			   //this.$refs.scroll.refresh()
			   
			})
		},
		
		methods: {

			getHomeMultidata() {
				getHomeMultidata().then(res => {

					this.banner = res.data.data.banner.list;
					this.recommend = res.data.data.recommend.list
				})
			},
			getHomeGoods(type) {
				const page = this.goods[type].page + 1
				getHomeGoods(type, page).then(res => {
					this.goods[type].list.push(...res.data.data.list)
					this.goods[type].page += 1
					
					this.$refs.scroll.finishPullUp()

				})
			},
			tabclick(index) {
				switch (index) {
					case 0:
						this.current = 'pop'
						break
					case 1:
						this.current = 'new'
						break;
					case 2:
						this.current = 'sell'
						break
				}
				this.$refs.tabControl.current=index
				this.$refs.tabControl2.current=index
			},
			backclick()
			{
				this.$refs.scroll.scrollTo(0 , 0 )
			},
			contentScroll(position)
			{
				this.tabFixed = -position.y > this.tabOffsetTop
				this.isShowBackTop = (-position.y) >1000
			},
            updata()
			{
				console.log('下拉加载更多')
				this.getHomeGoods(this.current)
			},
			isShowLoad()
			{
				 this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
			}
		},
		computed: {
			book() {
				return this.goods[this.current].list
			}
		},
        destroyed()
		{
			console.log('销毁')
		},
		activated()
		{
			
		},
		deactivated()
		{
			
		}
	}
</script>

<style>
	.home-nav {
		background-color: var(--color-tint);
		color: #fff;
		/* position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 30; */
		
	}

	#home {
		
		height: 100vh;
		position: relative;
	}

	
	
	.scroll {
	 position: absolute;
	 top: 44px;
	 bottom: 49px;
	 overflow: hidden;	
	}
	.fixed {
		position: fixed;
		top: -1px;
		left: 0px;
		right: 0px;
	}
	.tab-control {
		position: relative;
		background: #F6F6F6;
		z-index: 9;
	}

</style>
