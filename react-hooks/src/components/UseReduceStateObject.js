import React, { useReducer } from 'react'    //Advantages of using state object over state variables 

const initialState = {
	firstCounter: 0,
	secondCounter: 10             // 1. we can use two state variable inside state object
}
const reducer = (state, action) => {
	switch (action.type) {
		case 'increment':
			return { ...state, firstCounter: state.firstCounter + action.value }
		case 'decrement':
			return { ...state, firstCounter: state.firstCounter - action.value }
		case 'increment2':
			return { ...state, secondCounter: state.secondCounter + action.value }
		case 'decrement2':
			return { ...state, secondCounter: state.secondCounter - action.value }
		case 'reset':
			return initialState
		default:
			return state
	}
}

function UseReduceStateObject() {
	const [count, dispatch] = useReducer(reducer, initialState)
// we can pass a complete object (with more than 1 action variables) in dispatch method : In this case it is type & value  
	return (
		<div>     
			<div>Count = {count.firstCounter}</div>                 
			<button onClick={() => dispatch({ type: 'increment', value: 1 })}>  
				Increment
			</button>
			<button onClick={() => dispatch({ type: 'decrement', value: 1 })}>
				Decrement
			</button>                                                                      
			<button onClick={() => dispatch({ type: 'increment', value: 5 })}>
				Increment 5
			</button>
			<button onClick={() => dispatch({ type: 'decrement', value: 5 })}>
				Decrement 5
			</button>
			<button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
			<div>Secound Counter = {count.secondCounter}</div>
			<div>
				<button onClick={() => dispatch({ type: 'increment2', value: 1 })}>
					Increment
				</button>
				<button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>
					Decrement
				</button>
			</div>
		</div>
	)
}

export default UseReduceStateObject