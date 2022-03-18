import React from 'react'
import logo from './../images/logo.svg'
import fb from "./../images/icon-facebook.svg"
import tw from "./../images/icon-twitter.svg"
import ig from "./../images/icon-instagram.svg"
import pi from "./../images/icon-pinterest.svg"

const Footer = () => {
  return (
    <div className='footer'>
     <div className="bottom-nav">
       <img src={logo} alt="" />
       <div className="footer-list">
         <p>About</p>
         <p>Career</p>
         <p>Events</p>
         <p>Products</p>
         <p>Support</p>
       </div>
     </div>
     
     <div className="social-media-wrapper">
       <div className="social-media">
         <img src={fb} alt="" /><img src={tw} alt="" /><img src={ig} alt="" /><img src={pi} alt="" />
        </div>
        <p>© 2021 Loopstudios. All rights reserved.</p>
      </div>
     
    </div>
  )
}

export default Footer