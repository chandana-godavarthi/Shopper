import React from 'react'
import "./Banner.css"
import banner_women from "../assets/exclusive_image.png"

const Banner = () => {
  return (
    <div className='banner'>
      <div className="banner-left">
        <h3>Exclusive</h3>
        <h3>Offers For You</h3>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button className="check-now">Check now</button>
      </div>
      <div className="banner-right">
        <img src={banner_women} alt="" />
      </div>
    </div>
  )
}

export default Banner
