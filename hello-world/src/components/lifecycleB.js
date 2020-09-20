import React, { Component } from 'react'

export class LifecycleB extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      name : 'mehul'     
    }
    console.log('lifecycleB constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('lifecycleB gdsfp')
    return null
  }

  componentDidMount() {
    console.log('lifecycleB component did mount')
  }
  
  
  render() {
    console.log('lifecycleB render')
    return (
      <div>
        LifecycleB
      </div>
    )
  }
}
