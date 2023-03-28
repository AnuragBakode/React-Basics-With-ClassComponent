import React, { Component } from 'react'

 class LifecyclemountChild extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : 'Anurag'
      }

      console.log("Lifecycle mount  child Constructor");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("GET derived state child")
        return null;
    }

    componentDidMount(){
        console.log("componentDidMount  child");
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


  render() {
    console.log("Render Method child");
    return (
      <div>
        Lifecycle Mount child
      </div>
    )
  }
}

export default LifecyclemountChild