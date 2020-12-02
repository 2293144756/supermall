<template>
	<div class="detail-swiper">
		<swiper class="detail-swiper-item">
			<swiper-item v-for="item in TopImage" >
				<img :src="item" alt=""/>
			</swiper-item>
		</swiper>
	</div>
</template>

<script>
	import {Swiper , SwiperItem} from 'components/common/swiper/index.js'
	export default {
		name:'DetailSwiper',
		props:{
			TopImage:{
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
				
			}
		},
		components:{
			Swiper,
			SwiperItem
		}
	}
</script>

<style>
	.detail-swiper-item {
		height: 300px;
	}
</style>
