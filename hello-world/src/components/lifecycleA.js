import React, { Component } from 'react'
import { LifecycleB }       from './lifecycleB'

export class LifecycleA extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      name : 'mehul'     
    }
    console.log('lifecycleA constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('lifecycleA gdsfp')
    return null
  }

  componentDidMount() {
    console.log('lifecycleA component did mount')
  }
  
  
  render() {
    console.log('lifecycleA render')
    return (
      <div>
        <div>LifecycleA</div>
      </div>
    )
  }
}
