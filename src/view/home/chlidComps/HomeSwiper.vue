<template>
	<div class="home-swiper">
		<swiper>
			<swiper-item v-for="item in banner">
				<a :href="item.link">
					<img :src="item.image"  @load="imgload"/>
				</a>
			</swiper-item>
		</swiper>
	</div>
</template>

<script>
	import {Swiper , SwiperItem} from 'components/common/swiper/index.js'
	export default {
		name:'HomeSwiper',
		props:{
			banner:{
				type:Array,
				default()
				{
					return []
				}
			}
		},
		data()
		{
			return {
				isLoad:false
			}
		},
		components:{
			Swiper,
			SwiperItem
		},
		methods:{
			imgload()
			{
				if(!this.isLoad)
				{
					this.$emit('swiperImgLoad')
					this.isLoad=true
				}
			}
		}
	}
</script>

<style>
</style>
