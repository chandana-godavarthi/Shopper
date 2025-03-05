import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'
// import all_product from '../assets/all_product'

const Item = (props) => {
  return (
    <Link to={`/product/${props.id}`}>
        <div className='item'>
      <div className="image">
        <img src={props.image} alt="" />
        <p>{props.name}</p>
      </div>
      <div className="item-prices">
        <p>${props.new_price}</p>
        <p style={{textDecoration:"line-through",color:"gray"}}>${props.old_price}</p>
      </div>
    </div>
    </Link>
  )
}

export default Item
