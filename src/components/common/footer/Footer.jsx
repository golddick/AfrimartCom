import React from "react"
import { SiGoldenline } from "react-icons/si";
import { footer } from "../../data/Data"
import "./footer.css"

const Footer = () => {
  return (
    <>
     

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              {/* <img src='../images/logo-light.png' alt='' /> */}
              <h2>Do You Need Help With Anything?</h2>
              <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>

              <div className='inputRow'>
                <input type='text' placeholder='Email Address'  className="textInput"/>
                <button style={{background:"orange"}}> Subscribe</button>
              </div>
            </div>
          </div>

          {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
        <span>© 2023 Afrimart.    <SiGoldenline className="GD"/></span>
      </div>
    </>
  )
}

export default Footer
