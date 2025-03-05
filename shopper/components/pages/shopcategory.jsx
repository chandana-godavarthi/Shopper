import React, { useEffect, useState } from 'react'
import all_products from "../assets/all_product.js"
import banner_kid from "../assets/banner_kids.png";
import banner_men from "../assets/banner_mens.png";
import banner_women from "../assets/banner_women.png";
import "./shopcategory.css"
import dropdown_icon from "../assets/dropdown_icon.png";
import Item from "../items/Item.jsx";
import Footer from "../footer/Footer.jsx"
import axios from 'axios';



const Shopcategory = (props) => {
  const cat = props.category;
  return  (
    <div className='shopcategory'>
        <div className="shopcategory-banner">
          <img src={(cat==="men")?banner_men:((cat==="women")?banner_women:banner_kid)} alt="" />
        </div>
        <div className="shopcategory-middle">
          <p><span>Showing 1-12</span> out of 36 products</p>
          <div className="shopcategory-sort">
            Sort by <img src={dropdown_icon} alt="" />
          </div>
        </div>
        <div className="shopcategory-items">
          {all_products.map((item)=>{
            if(item.category===props.category){
              return <Item 
              name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} id={item.id}/>
            }
            else return null;
          })}
        </div>
        <button className="explore-button-shopcategory">Explore More</button>
        <Footer />
    </div>
  )
}

export default Shopcategory


