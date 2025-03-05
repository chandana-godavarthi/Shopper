import React from 'react'
import "./Newcollections.css"
import new_collections from "../assets/new_collections.js"
import Item from "../items/Item.jsx"


const Newcollections = () => {
  return (
    <div className='newcollections'>
      <h2>NEW COLLECTIONS</h2>
      <hr />
      <div className="collections">
        {new_collections.map((item)=>{
          return <Item name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} id={item.id}/>
        })}
      </div>
    </div>
  )
}

export default Newcollections
