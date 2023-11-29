import React from "react"
import { SiGoldenline, SiInstagram } from "react-icons/si";
import {MdLocalPhone, MdFacebook} from 'react-icons/md'
import{TiMail} from 'react-icons/ti'
import { FaXTwitter } from "react-icons/fa6";
import { footer } from "../../data/Data"
import "./footer.css"

const Footer = () => {
  return (
    <>
     

      <footer>
        <div className='Footercontainer'>
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

          {/* {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))} */}
          <div className="Footer-box">
         <div className="PARTNERS">
         <h3 className="footerHeader">Layouts</h3>
          <ul className="FList">
          
            <li className="listText"><a href="/"> Home</a></li>
            <li className="listText"><a href="/about"> About Us</a></li>
            <li className="listText"><a href="/faq"> FAQ</a></li>
            <li className="listText"><a href="/pricing"> Pricing</a></li>
            <li className="listText"><a href="/contact"> Contact</a></li>
          </ul>

         </div>
         <div className="PARTNERS">
         <h3 className="footerHeader">PARTNERS</h3>
         <div className="FList">
            <div className="listText">Itex</div>
            <div className="listText"> Moro Fin</div>
            <div className="listText">TABS</div>
            <div className="listText"> Nahco aviance</div>
            <div className="listText">Afrexim Bank</div>
            <div className="listText">Group NICERT</div>
            <div className="listText">IATF</div>
          </div>
         </div>
         <div className="PARTNERS">
         <h3 className="footerHeader">Contact</h3>
         <div className="FList">
            <div className="listBox">
              <TiMail className="listImg"/> 
              <div className="listText">afrimart@gmail.com</div>
            </div>
            {/* <div className="listBox">
              <MdLocalPhone className="listImg"/> 
              <div className="listText">090883838221</div>
            </div> */}
          
          <a href="https://x.com/afrimarttrade?s=21&t=RHNPzl8_mbD_DdBJ-IF9Qg" target="_blank" rel="noopener noreferrer">
              <div className="listBox">
              <FaXTwitter className="listImg"/> 
              <div className="listText">AfrimartTrade</div>
            </div>
              </a>
        

              <a href="https://www.facebook.com/AfrimartTrade?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
              <div className="listBox">
              <MdFacebook className="listImg"/> 
              <div className="listText">AfrimartTrade</div>
            </div>
              </a>
        

            <a href="https://instagram.com/afrimarttrade?igshid=MzMyNGUyNmU2YQ==" target="_blank" rel="noopener noreferrer">
              <div className="listBox">
              <SiInstagram className="listImg"/> 
              <div className="listText">Afrimarttrade</div>
            </div>
              </a>
        
          </div>
         </div>
          </div>
          
          {/* <div className="Footer-Cbox">
         <div className="PARTNERS">
         <h3 className="footerHeader">Contact</h3>
         <div className="FList">
            <div className="listBox">
              <TiMail className="listImg"/> 
              <div className="listText">afrimart@gmail.com</div>
            </div>
            <div className="listBox">
              <MdLocalPhone className="listImg"/> 
              <div className="listText">090883838221</div>
            </div>
            <div className="listBox">
              <MdFacebook className="listImg"/> 
              <div className="listText">@afrimart</div>
            </div>
            <div className="listBox">
              <SiInstagram className="listImg"/> 
              <div className="listText">@afrimart</div>
            </div>
          </div>
         </div>
          </div> */}

        </div>
      </footer>
      <div className='legal'>
        <span>© 2023 Afrimart.    <SiGoldenline className="GD"/></span>
      </div>
    </>
  )
}

export default Footer
