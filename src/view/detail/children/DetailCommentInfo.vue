<template>
	<div class="detail-comment-info" v-if="Object.keys(commentInfo).length !==0" >
		<div class="info-header">
			<div class="header-title">用户评价</div>
			<div class="hrader-more">
				更多
				<i class="arrow-right">></i>
			</div>
		</div>
		<div class="info-user">
			<img :src="commentInfo.user.avatar" alt=""/>
			<span>{{commentInfo.user.uname}}</span>
		</div>
		<div class="info-detail">
			<p>{{commentInfo.content}}</p>
			<div class="info-other">
				<span class="date">{{commentInfo.created | showDate}}</span>
				<span>{{commentInfo.style}}</span>
			</div>
			<div class="info-imgs">
				<img :src="item" v-for="(item,index) in commentInfo.images" :key="index" />
			</div>
		</div>
	</div>
</template>

<script>
   import {formatDate} from '../../../common/ut.js'
	export default {
		name:'DetailCommentInfo',
		props:{
			commentInfo:{
				type:Object,
				default()
				{
					return {}
				}
			}
		},
		filters:{
			showDate(value)
			{
				const date = new Date(value);
				
				return formatDate(date , 'yyyy-mm-dd')
			}
		}
	}
</script>

<style>
	.detail-comment-info {
		margin-top: 10px;
	}
	.info-header {
		padding: 0px 10px;
		border-bottom: 4px #EEEEEE solid;
		height: 60px;
		
	}
	.header-title {
		float: left;
		line-height: 60px;
	}
	.hrader-more {
		float: right;
		line-height: 60px;
	}
	.info-user {
		padding: 0px 10px;
	}
	.info-user img {
		width: 45px;
		height: 45px;
		border-radius: 50%;
	}
	.info-user span {
		margin-left: 10px;
		position: relative;
		top: -14px;
	}
	.info-detail {
		
	}
	.info-detail p {
		padding: 0px 15px;
	}
	
	
	.info-imgs img {
		width: 60px;
		height:60px;
		margin-left: 4px;
	}
	
</style>
