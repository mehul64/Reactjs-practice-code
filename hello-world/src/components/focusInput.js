import React, { Component } from 'react'
import { Demoref } from './demoref'

export class FocusInput extends Component {

  constructor(props) {
    super(props)
    this.compRef = React.createRef()
  }

  clickHandler = () => {
    this.compRef.current.focusInput()
  }
  
  render() {
    return (
      <div>
        <Demoref ref={this.compRef}/>
        <button onClick={this.clickHandler}>Focus input</button>
      </div>
    )
  }
}
