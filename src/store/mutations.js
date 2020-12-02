
export const mutations={
	addCounter(state , payload)
	{
		payload.count++
	},
	ToCart(state , payload)
	{
		payload.checked=true
		state.cartList.push(payload)
	}
}