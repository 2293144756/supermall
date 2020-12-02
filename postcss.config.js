 module.exports={
	 plugins: {
		 autoprefixer: {},
		 "postcss-px-to-viewport": {
			 viewportWidth:375, //视口宽度 ， 对应我们设计稿的宽度
			 viewportHeight:667, //视口的高度 ， 对应我们设计稿的高度
			 unitPrecision:5, //指定px转换w为视窗单位值的小数位数（很多时候无法整除）
			 viewportUnit:'vw', //定制需要转换的视口单位 ， 建议使用vw
			 selectorBlackList:[], // 指定不需要转换的类型
			 minPixelValue:1 , //小于或者等于1px不转换为视口单位，
			 mediaQuery:false //允许媒体查询转换为px
			 
		 }
	 }
 }