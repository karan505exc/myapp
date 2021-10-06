import React from 'react'
import Card from './Card'

import './Cards.css'
const Cards = () => {
    return (
        <div className="my__cards">
       
         {Array(12).fill("").map(()=>(
          <Card/> 
         ))}
         
        </div>
    )
}

export default Cards
