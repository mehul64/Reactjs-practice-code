import React, { Component } from 'react'

export class Forms extends Component {

	constructor(props) {
		super(props)
	
		this.state = {
			 userName : '',
			 comments : '',
			 topic 		: 'react'
		}
		console.log('constructor')
	}

	userNameHandler = (event) => {
		this.setState({
			userName : event.target.value
		})
	}

	commentHandler = (event) => {
		this.setState({
			comments : event.target.value
		})
	}

	topicHandler = (event) => {
		this.setState({
			topic : event.target.value
		})
	}

	submitHandler = (event) => {
		alert(`${this.state.userName} , ${this.state.comments} , ${this.state.topic} `)
		event.preventDefault()
	}
	
	render() {
		const { userName , comment , topic } = this.state
		console.log('render')
		return (
			<div>
				<form onSubmit = {this.submitHandler}>
				<label>User Name</label>
				<input type="text"
					value = {userName} 
					onChange = {this.userNameHandler}>
			 	</input>

				<label>Comments</label>
				<textarea 
					value = {comment} 
					onChange = {this.commentHandler}>
				</textarea>
			
				<label>Topic</label>
				<select value = {topic} onChange = {this.topicHandler}>
					<option value = "react">React</option>
					<option value = "django">django</option>
					<option value = "react">Angular</option>
				</select>
				<button type =  "submit">submit</button>
			</form>
			</div>
		)
	}
}
