import React from 'react'
import Person from './Person'

const List = ({ people }) => {
    return (
        <ul>
            {
                people.map((people) => {
                    return <Person key={people.id} people={people} />
                })
            }
        </ul>
    )
}

export default List