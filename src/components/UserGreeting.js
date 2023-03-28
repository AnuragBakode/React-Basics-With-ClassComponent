import React, { Component } from 'react'


// Conditional Rendering
class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : true
      }
    }
    render() {

        // 1st way
        // let message
        // if(this.state.isLoggedIn){
        //     message = <h1>Welcome Anurag</h1>
        // }else{
        //     message =<h1>Welcome Guest</h1>
        // }

        // return <div>{message}</div>

        //2nd way
        // if(this.state.isLoggedIn){
        //     return <h1>Welcome Anurag</h1>
        // }else{
        //     return <h1>Welcome guest</h1>
        // }


        // Best way
        // return(
        //     this.state.isLoggedIn ?  <h1>Welcome Anurag</h1> :  <h1>Welcome Guest</h1>
        // )

        // Short Circuit Method 
        // Used for single check 
        return this.state.isLoggedIn &&  <h1>Welcome Anurag</h1>


        // return (
        //     <div>
        //         <h1>Welcome Anurag</h1>
        //         <h1>Welcome guest</h1>
        //     </div>
        // )
    }
}

export default UserGreeting