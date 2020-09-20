import React, { Component } from 'react'

export class Message extends Component {

  constructor() {
		super()
		this.state = {
			messsage : "Hello visitors"
		}
		this.changeMessage = this.changeMessage.bind(this)
				
	}

	changeMessage() {
		this.setState({
			messsage : "Thanks for subscribing"
		})
	}
	  
  render() {
		return (
			<div>
				<h1>{this.state.messsage}</h1>
				<button onClick={this.changeMessage}>Subscribe</button>
			</div>
		)	
  }
}

