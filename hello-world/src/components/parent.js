import React, { Component } from 'react'
import { Child } from './child'

export class Parent extends Component {

	constructor(props) {
		super(props)
	
		this.state = {
			parentName : 'parent'
		}
		this.greetParent = this.greetParent.bind(this)
	}

	greetParent(childName) {
		alert(`hello ${this.state.parentName} from ${childName}`)
	}
	
  render() {
    return (
      <div>
				<Child greetHandler = {this.greetParent}></Child>
      </div>
    )
  }
}
