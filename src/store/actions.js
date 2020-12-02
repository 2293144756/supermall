
export const actions = {
		addCart(context, payload) {
			return new Promise((resolve , reject)=>{
				const oldproduct = context.state.cartList.find(item => item.iid === payload.iid)
						
				if (oldproduct) {
					//oldproduct.count += 1
					context.commit('addCounter' , oldproduct)
					resolve('商品加1')
				} else {
					payload.count = 1;
					
					//context.state.cartList.push(payload)
					context.commit('ToCart' , payload)
				   resolve("增加了一个商品")
				}
			})
		}
	}