import React from 'react';

const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hello React</h1>
    //     </div>
    // )

    return React.createElement('div', {className : 'dummyClass'}, React.createElement('h1', {id : 'hello'}, "Hello React"));
}

export default Hello;