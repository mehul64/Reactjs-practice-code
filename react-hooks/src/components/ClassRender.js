import React, { Component } from 'react'

class ClassRender extends Component {
	constructor(props) {
		super(props)
		this.state = {
			count: 0,
			name: ''
		}
	}
// code repeatation - same line of code written in componentDidMount as well as componentDidUpate 
// To avoid this , we use useEffect --> refer UseEffectRender.js

	componentDidMount() {
		document.title = `Clicked ${this.state.count} times`        
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.count !== this.state.count) {
			console.log('Updating document title')
			document.title = `Clicked ${this.state.count} times`
		}
	}

	render() {
		return (
			<div>
				<input type="text" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
				<button onClick={() => this.setState({ count: this.state.count + 1 })}>
					Click {this.state.count} times
				</button>
			</div>
		)
	}
}

export default ClassRender