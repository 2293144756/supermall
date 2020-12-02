<template>
	<div class="detail">
		
		<detail-nav-bar @tabClick="tabClick" ref="navscroll"></detail-nav-bar>
		<scroll id="scroll-vue" ref="detailScroll" @scroll="scrollview">
			
			<detail-swiper :TopImage="TopImage"></detail-swiper>
			<detail-base-info :goods="goods"></detail-base-info>
			<detail-shop-info :shopInfo="shopInfo"></detail-shop-info>
			<detail-image-info :detailInfo="detailInfo" @DetailImageLoad="DetailImageLoad1"></detail-image-info>
			<detail-item-params ref="params" :paramsInfo="itemParams"></detail-item-params>
			<detail-comment-info ref="comment" :commentInfo="commentInfo"></detail-comment-info>
		</scroll>
		   <back-top @click.native="btndetail"      v-if="isShowBackTop"></back-top>
		 
            <detail-bottom-bar @btncfhd="addToCart"></detail-bottom-bar>
			  <toast :show="show" class="toast" :message="message"></toast>


	</div>
</template>

<script>
	import DetailNavBar from './children/DetailNavBar.vue';
	import {
		getDetail,
		GoodsInfo,
		Shop,
		getRecomment
	} from '../../network/detail.js';
	import DetailSwiper from './children/DetailSwiper';
	import DetailBaseInfo from './children/DetailBaseInfo';
	import DetailShopInfo from './children/DetailShopInfo';
	import DetailImageInfo from './children/DetailImageInfo';
	import DetailItemParams from './children/DetailItemParams';
	import DetailCommentInfo from './children/DetailCommentInfo';
	import DetailBottomBar from './children/DetailBottomBar';
	import BackTop from '../../components/common/backtop/backTop.vue';
	import Scroll from 'components/common/scroll/Scroll.vue';
	import Toast from '../../Toast/Toast.vue'

	export default {
		name: 'Detail',
		data() {
			return {
				iid: null,
				TopImage: [],
				goods: {},
				shopInfo: {},
				detailInfo: {},
				itemParams: {},
				commentInfo: {},
				themeTopYs: [0, 1000, 2000, 3000],
				currentIndex:0,
				isShowBackTop:false,
				message:'',
				show:false
			}
		},
		components: {
			DetailNavBar,
			DetailSwiper,
			DetailBaseInfo,
			DetailShopInfo,
			DetailImageInfo,
			DetailItemParams,
			DetailCommentInfo,
			DetailBottomBar,
			BackTop,
			Scroll,
			Toast

		},

		created() {
			this.iid = this.$route.params.iid


			getDetail(this.iid).then(res => {
                 
				 console.log(res)
				const data = res.data.result
				this.TopImage = res.data.result.itemInfo.topImages

				this.goods = new GoodsInfo(data.itemInfo, data.columns, data.shopInfo.services)

				this.shopInfo = new Shop(data.shopInfo)

				this.detailInfo = data.detailInfo

				this.itemParams = data.itemParams

				if (data.rate.length !== 0) {
					this.commentInfo = data.rate.list[0]
				}


			})


		},
		methods: {
			DetailImageLoad1() {
				this.$refs.detailScroll.refresh()
				this.$nextTick(() => {
					this.$refs.detailScroll.refresh()
					this.themeTopYs = [];
					this.themeTopYs.push(0)
					this.themeTopYs.push(this.$refs.params.$el.offsetTop)
					this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
					console.log(this.themeTopYs)
				})
			},
			tabClick(index) {
				this.$refs.detailScroll.scrollTo(0, -this.themeTopYs[index]+44, 100)
			},
			scrollview(position)
			{
				const positionY = -position.y + 44;
				this.isShowBackTop = (-position.y) >1000
				const length = this.themeTopYs.length;
				for(let i=0 ; i<length; i++)
				{
				   if(this.currentIndex !== i && (i <length-1 && positionY >this.themeTopYs[i] && positionY < this.themeTopYs[i+1] || (i === length -1 && positionY > this.themeTopYs[i])))
				   {
					  this.currentIndex = i;
					  this.$refs.navscroll.current = this.currentIndex;
				   }
				}
			},
			btndetail()
			{
				this.$refs.detailScroll.scrollTo(0,0,300)
			},
			addToCart()
			{
				const product={};
				product.image = this.TopImage[0];
				product.title = this.goods.title;
				product.desc = this.goods.desc;
				product.price = this.goods.reaIPrice;
				product.iid = this.iid
				
				this.$store.dispatch('addCart' , product  ).then(res=>{
				    this.message = res
					this.show = true
					setInterval(()=>{
						this.show=false
						this.message = ''
					} , 2000)
				})
			}
			
		}
	}
</script>

<style>
	.detail {
		position: relative;
		z-index: 99999;
		background: #F6F6F6;
		height: 100vh;
		overflow: hidden;
	}

	#scroll-vue {
		height: calc(100% - 44px - 49px);
	}
	.toast {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50% , -50%);
	}
</style>
