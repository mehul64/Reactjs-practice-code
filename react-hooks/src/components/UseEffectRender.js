  
import React, { useState, useEffect } from 'react'

function UserEffectRender() {                           //called after every time component renders
	const [count, setCount] = useState(0)
	const [name, setName] = useState('')
	useEffect(() => {
		console.log('useEffect - Updating document title ')
		document.title = `You clicked ${count} times`
  }, [count])                                     // Additional param [count] for check if there is a change in count var or not 
                                                  //  If not , useEffect will not run 
	return (
		<div>
			<input type="text" value={name} onChange={e => setName(e.target.value)} />
			<button onClick={() => setCount(count + 1)}>
				useEffect - Click {count} times
			</button>
		</div>
	)
}

export default UserEffectRender