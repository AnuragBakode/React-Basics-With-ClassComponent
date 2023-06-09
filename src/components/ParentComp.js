import React, { Component } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegComp from './RegComp'

 class ParentComp extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name : 'Anurag'
      }
    }


    componentDidMount(){
        setInterval(()=>{
            this.setState({name: 'Anurag'})
        }, 2000)
    }

  render() {
    console.log("parent rendered")
    return (
      <div>
        Parent Comp
        {/* <RegComp name = {this.state.name}/> */}
        {/* <PureComp name={this.state.name}/> */}
        <MemoComp name= {this.state.name}/>
      </div>
    )
  }
}

export default ParentComp