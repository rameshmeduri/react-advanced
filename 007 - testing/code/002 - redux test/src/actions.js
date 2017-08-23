export const increment = () => ({ type: 'INC' })
export const decrement = () => ({ type: 'DEC' })

export const asyncInc = () => {
	return dispatch => new Promise(resolve => {
		setTimeout(() => {
			dispatch(increment())
			resolve()
		}, ~~(Math.random() * 3000))
	})
}

export const asyncDec = () => {
	return dispatch => new Promise(resolve => {
		setTimeout(() => {
			dispatch(decrement())
			resolve()
		}, ~~(Math.random() * 3000))
	})
}