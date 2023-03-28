import React, { Component } from 'react'
import RefsClasses from './RefsClasses'

export class RefsClassesParent extends Component {
    constructor(props) {
      super(props)
    
      this.componentRef = React.createRef()
    }

    clickHandler = () => {
        this.componentRef.current.focusInput()
    }
  render() {
    return (
      <div>
        <RefsClasses ref = {this.componentRef}/>
        <button  onClick={this.clickHandler} >Focus Input</button>
      </div>
    )
  }
}

export default RefsClassesParent