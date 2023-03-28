import React from 'react';

// function Greet(){
//      return <h2>Hello Anurag</h2>
// }

const Greet = (props) => {
    const {name , heroName} = props;
    return (
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>
        </div>

    )

}
export default Greet;