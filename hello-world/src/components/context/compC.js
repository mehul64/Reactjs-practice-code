import React, { Component } from 'react'
import ComponentE from './compE'

export class ComponentC extends Component {
	render() {
		return (
			<div>
				<ComponentE />
			</div>
		)
	}
}

export default ComponentC