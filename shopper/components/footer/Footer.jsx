import React from 'react'
import "./Footer.css"
import logo from "../assets/logo.png";
import instagram_icon from "../assets/instagram_icon.png";
import pinterest_icon from "../assets/pintester_icon.png";
import whatsapp_icon from "../assets/whatsapp_icon.png";




const Footer = () => {
  return (
    <div className='footer'>
        <div className="logo-footer">
            <img src={logo} alt="logo" />
            <p>SHOPPER</p>
        </div>
        <div className="footer-menu">
            <ul>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className="social-icons-footer">
            <img src={instagram_icon} alt="" />
            <img src={pinterest_icon} alt="" />
            <img src={whatsapp_icon} alt="" />
        </div>
        <hr />
        <p className='copyright-footer'>
            Copyright @ 2024-All Right Reserved.
        </p>
    </div>
  )
}

export default Footer
