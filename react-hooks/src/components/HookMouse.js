import React, { useState, useEffect } from 'react'

function HookMouse() {
	const [x, setX] = useState(0)
	const [y, setY] = useState(0)

	const logMousePosition = e => {
		console.log('Mouse event')
		setX(e.clientX)
		setY(e.clientY)
	}

	useEffect(() => {
		console.log('useFffect called')
    window.addEventListener('mousemove', logMousePosition)

    return () => {   
      //The cleanup code for avoiding memory leaks- can be used for removing subscription,timer,event listeners
      console.log('Component unmounting code')
      window.removeEventListener('mousemove', logMousePosition)
    }
	}, [])  //Empty dependency array for calling useEffect just once
	return (
		<div>
			Hooks - X - {x} Y - {y}
		</div>
	)
}

export default HookMouse