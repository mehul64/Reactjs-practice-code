import React, { Component } from 'react'

export class Demoref extends Component {

	constructor(props) {
		super(props)
	
		this.inputref = React.createRef()
		this.cbref = null
		this.setcbref = (element) => {
			this.cbref = element
		}

	}

	componentDidMount() {
		console.log(this.cbref)
		if(this.cbref) {
			this.cbref.focus()
		}
		// console.log(this.inputref)
		// this.inputref.current.focus()
	}

	focusInput() {
		this.inputref.current.focus()
	}
	
	render() {
		return (
			<div>
				<input type = "text" ref = {this.inputref}/>
				<input type = "text" ref = {this.setcbref}/>
			</div>
		)
	}
}
