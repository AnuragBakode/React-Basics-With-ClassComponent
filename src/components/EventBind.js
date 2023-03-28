import React, { Component } from 'react'

export default class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message : 'Hello'
      }

      //Most appropriat way React doc suggest
    //   this.clickHandler = this.clickHandler.bind(this);
    }

    // clickHandler(){
    //     this.setState({ message: 'GoodBye' })
    //     console.log(this); // null
    // }

    // React suggest
    clickHandler = () => {
        this.setState({ message: 'GoodBye' })
    }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* Performance Isuue */}
        {/* <button onClick ={this.clickHandler.bind(this)}>Click</button> */}
        {/* <button onClick ={()=>this.clickHandler()}>Click</button> */}
        <button onClick ={this.clickHandler}>Click</button>
      </div>
    )
  }
}
