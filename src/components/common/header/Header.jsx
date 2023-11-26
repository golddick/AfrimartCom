import React, { useState } from "react"
import Logo from '../../../Assest /logo.png'
import "./header.css"
import { nav } from "../../data/Data"
import { Link, NavLink } from "react-router-dom"
import { useHistory } from 'react-router-dom';


const Header = () => {
  const [navList, setNavList] = useState(false)
  const history = useHistory();


  const handleLinkClick = (path) => {
    if (isExternalLink(path)) {
      window.open(path, "_blank");
    } else {
      // Use your router navigation logic here
      console.log(`Navigate to: ${path}`);
      // history.push(path);
      window.location.href = path;
    } 
  };
  const isExternalLink = (url) => {
    return url.startsWith("http") || url.startsWith("www");
  };
  

  return (
    <>
      <header>
        <div className='container flex headerBox'>
          <div className='logo'>
            <NavLink to='/'>
            <img src={Logo} alt='' />
            </NavLink>
          </div>
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index} >
               
                  <button onClick={() => handleLinkClick(list.path)} className="navBtn">{list.text}</button>
                  {/* <Link to={list.path}>{list.text}</Link> */}
                </li>
              ))}
            </ul>
          </div>
          <div className='button flex' style={{gap:'20px'}}>
          
          <a href="https://afrimart.com/en/users/login" target="_blank" rel="noopener noreferrer">
          <button className='btn1'>
            <i className="login"></i> Sign In
            </button>
          </a>
             
            <a href="https://afrimart.com/en/users/registration" target="_blank" rel="noopener noreferrer">
            <button className='btn1'>
              <i className='fa fa-sign-out'></i> Sign Up
            </button>
            </a>
          </div>

          <div className='toggle'>
          {/* <button onClick={() => {
    console.log("Toggle button clicked");
    setNavList(!navList);
  }}>
    {navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
  </button> */}
            <button onClick={() => setNavList(!navList)} >{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>

          </div>


        </div>
      </header>
    </>
  )
}

export default Header
