import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

export default class ParentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            parentName: 'Parent'
        }

        this.greetParent = this.greetParent.bind(this);
    }

    // Define a method  in parent
    // Recieve the data from children and use it like you want
    greetParent = (childName) =>{
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }

    render() {
        return (
            <div>
                {/* Pass the method as props in children */}
                {/* And in children pass the data as the parameters in the functions coming as props */}
                <ChildComponent greetHandler = {this.greetParent}/>
            </div>
        )
    }
}
