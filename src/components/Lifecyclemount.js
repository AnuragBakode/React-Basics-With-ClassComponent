import React, { Component } from 'react'
import LifecyclemountChild from './LifecyclemountChild';
 class Lifecyclemount extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : 'Anurag'
      }

      console.log("Lifecycle mount Constructor");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("GET derived state")
        return null;
    }



    componentDidMount(){
        console.log("componentDidMount  ");
    }


    shouldComponentUpdate(){
      console.log("shouldComponentUpdate");
      return true
    }

    getSnapshotBeforeUpdate(prevProps , prevState){
      console.log("getSnapshotBeforeUpdate");
      return null;
    }

    componentDidUpdate(){
      console.log("componentDidUpdate");
    }

    changeState= ()=>{
      this.setState({
        name : 'Bakode'
      })
    }


  render() {
    console.log("Render Method");
    return (
      <div>
        <LifecyclemountChild/>
        Lifecycle Mount
        <button onClick={this.changeState}>Change State</button>
      </div>
    )
  }
}

export default Lifecyclemount