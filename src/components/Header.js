import React , {useState} from 'react'
import logo from './../images/logo.svg'
import hamburger from './../images/icon-hamburger.svg'
import close from './../images/icon-close.svg'

const Header = () => {

  const [open, setOpen] = useState(true)

  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <div className="container">
      <header className='hero'>
        <nav>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
  
          
          <button onClick={handleClick}><img src={open ? hamburger : close} alt="" /></button>
        </nav>         
        <div className={open?"menu-container hidden": "menu-container"}>
          <ul className='menu'>
              <li>ABOUT</li>
              <li>CARREER</li>
              <li>EVENTS</li>
              <li>PRODUCTS</li>
              <li>SUPORT</li>
            </ul>
        </div>
        <div className="center-wrap">
          <h3 className="heading-title">
          IMMERSIVE EXPERIENCES THAT DELIVER
          </h3>
        </div>
      </header>


    </div> 
  )
}

export default Header