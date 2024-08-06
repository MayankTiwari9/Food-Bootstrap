import React, { useState } from 'react'
import ItemCard from './ItemCard'
import data from "../assets/data.json";

const ItemContainer = ({displayCount}) => {
  // const [displayCount, setDisplayCount] = useState(data.length);

  // const handleInputChange = (value) => {
  //   setDisplayCount(value ? Number(value) : data.length);
  // }


  return (
    <div className='d-flex  flex-wrap gap-4 justify-content-center'>
        {data.slice(0, displayCount).map((item) => (
            <ItemCard image={item.image} name={item.name} price={item.price} description={item.description}/>
        ))}
    </div>
  )
}

export default ItemContainer
