<template>
	<div class="me">
	  
	</div>
</template>

<script>
	export default {
		name:'Mine',
		data()
		{
			return {
			
				fontSize:'13px'
			}
		}
	}
</script>

<style scoped="scoped">
    .me {
		width: 100%;
		height: 100%;
		overflow: auto;
		box-sizing: border-box;
	}
	.headInfo {
		display: flex;
		background: #009EEF;
		padding: 30px 10px;
	}
	.head-img {
		height: 60px;
		height: 60px;
		overflow: hidden;
		border-radius: 50%;
		background-size: 60px;
	}
	.head-img img {
		width: 60px;
	}
	.head-profile {
		flex: 1;
		height: 60px;
		padding-left: 20px;
		padding-top: 5px;
	}
	.user-id {
		width: 177px;
		overflow: hidden;
		font-size: 22px;
		font-weight: 600;
		color: #fff;
	}
	.user-phone {
		font-size: 14px;
		color: #fff;
	}
	.user-phone i {
		margin-top: 10px;
		font-size: 16px;
	}
	.user-phone span {
		margin-left: 3px;
	}
	.headInfo>i {
		position: relative;
		top: 20px;
	    font-size: 22px;
		color: #fff;
	}
	
	
	.address-cell {
		background-color: #fff;
		height: 35px;
		margin-top: 10px;
		padding: 10px 10px 0 20px;
		font-size: 15px;
		display: flex;
	
	}
	.address-cell>i {
		color: #009EEF;
		font-size: 18px
	}
	.address_index {
		flex: 1;
		padding-left: 15px;
		font-weight: 600;
	}
	.address_index>i {
		float: right;
		font-size: 18px;
	}
	.user_info button {
		margin-top: 20px;
		width: 100%;
		height: 50px;
		background-color: #fff;
		border: 2px #EEEEEE solid;
		color: red;
		font-weight: 600;
		font-size: 16px;
	}
</style>

