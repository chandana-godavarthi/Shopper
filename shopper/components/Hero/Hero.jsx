import React from 'react'
import "./Hero.css"
import hand_icon from "../assets/hand_icon.png"
import arrow_icon from "../assets/arrow.png"
import hero_img from "../assets/hero_image.png"

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left"><h2>NEW ARRIVALS ONLY</h2>
            <div className="hand-icon">
                <p>new</p>
                <img src={hand_icon} alt="hero" />
            </div>
            <p>collections</p>
            <p>for everyone</p>
            <div className="hero-latest-collections">
                <button>
                    <h3>Latest collection</h3>
                    <img src={arrow_icon} alt="" />
                </button>
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_img} alt="" />
        </div>
    </div>
  )
}

export default Hero
