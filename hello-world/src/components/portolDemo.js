import React from 'react'
import ReactDOM from 'react-dom'

export function PortalDemo() {
	return ReactDOM.createPortal(
	<h1>
		protal demo
	</h1>,
	document.getElementById('portal-root'))
}
