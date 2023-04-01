import React from 'react'

const Person = ({ people }) => {
    const { name, age, image } = people;
    return (
        <li className='person'>
            <img className='img' src={image} alt={name} />
            <div>
                <h4>{name}</h4>
                <p>{age} years</p>
            </div>
        </li>
    )
}

export default Person