import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Anurag', 'Manish', 'Satyam','Anurag']
    const nameList = names.map((name, index) => <h2 key = {index}>{index} {name}</h2>)

    const persons = [
        {
            id : 1,
            name : 'Anurag',
            age : 20,
            skill:'React'
        },
        {
            id : 2, 
            name:'Satyam',
            age : 21,
            skill:'java'
        }
    ]

    const personsList = persons.map(person => (<Person key = {person.id} person = {person}/>))
  return (
    <div>
        {/* JSX way  manully type the index */}
        {/* <h1>{names[0]}</h1>
        <h1>{names[1]}</h1>
        <h1>{names[2]}</h1> */}

        {
            // names.map(name => <h2>{name}</h2>)
            nameList
            // personsList
        }


    </div>

  )
}

export default NameList