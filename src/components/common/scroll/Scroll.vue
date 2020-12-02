<template>
	<div class="wrapper" ref="wrapper">
		<div class="contents">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import Bscroll from 'better-scroll'
	export default {
		name:'Scroll',
		props:{
			probeType:{
				type:Number,
				default:0
			},
			pullUpLoad:{
				type:Boolean,
				default:false
			}
		},
		data()
		{
			return {
				scroll:null
			}
		},
		mounted()
		{
			this.scroll = new Bscroll(this.$refs.wrapper , {
				probeType:this.probeType,
				click:true,
				pullUpLoad:true
			})
			this.scroll.on('scroll' , (position)=>{
				this.$emit('scroll' , position)
			})
			this.scroll.on('pullingUp' , ()=>{
				this.$emit('pullingUp')
			})
			console.log(this.scroll)
		},
		methods:{
			scrollTo(x , y , time=1000)
			{
				this.scroll.scrollTo(x , y , time)
			},
			finishPullUp()
			{
				this.scroll.finishPullUp()
			},
			refresh()
			{
			    this.scroll.refresh()
			}
		}
		
	}
</script>

<style>
</style>
