import React, {useState} from 'react'
import './navbar.css';
import { RiMenuLine, RiCloseLin } from 'react-icons/ri';
import logo from '../../assets/NLKlogo.png';


//BEM Block Element Modifier

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className= "gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo"/>
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home"></a>Home</p>
          <p><a href="#wgpt3"></a>Our Grown</p>
          <p><a href="#possibility"></a>Recipes</p>
          <p><a href="features"></a>About Us</p>
          <p><a href="#blog"></a>Gallery</p>
        </div>
      </div>

      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>

      <div className="gpt3_navbar-menu">

        

      </div>

     
    </div>
  )
}

export default Navbar
