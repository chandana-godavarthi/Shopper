import React from 'react'
import Hero from "../Hero/Hero.jsx"
import Item from "../items/Item.jsx"
import Shop_item_data from "../assets/data.js"
import "./shop.css"
import Banner from '../banner/Banner.jsx'
import Newcollections from '../newcollections/Newcollections.jsx'
import Newsletter from "../newsletter/Newsletter.jsx"
import Footer from "../footer/Footer.jsx"


const Shop = () => {
  return (
    <div className='shop'>
      <Hero />
      <h3 className='heading'>POPULAR IN WOMAN {<hr />}</h3>
      <div className="shop_items">
        {Shop_item_data.map(Item)}
      </div>
      <Banner />
      <Newcollections />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Shop
