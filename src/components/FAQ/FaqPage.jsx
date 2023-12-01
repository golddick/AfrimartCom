import React, {useState} from 'react'
import { IoMdAdd } from "react-icons/io";
import {BiSolidRightArrowAlt} from 'react-icons/bi'
import Heading from '../common/Heading'
import Back from '../common/Back'
import Img from "../../Assest /backimg2.jpg"
import '../home/FAQ/style.css'

function FaqPage() {
  const [openAns, setOpenAns] = useState()
  const [openAns2, setOpenAns2] = useState()
  const [openAns3, setOpenAns3] = useState()
  const [openAns4, setOpenAns4] = useState()
  const [openAns5, setOpenAns5] = useState()
  const [openAns6, setOpenAns6] = useState()
  const [openAns7, setOpenAns7] = useState()
  const handleOpenAns =() =>{
      setOpenAns(!openAns)
  }
  const handleOpenAns2 =() =>{
      setOpenAns2(!openAns2)
  }
  const handleOpenAns3 =() =>{
      setOpenAns3(!openAns3)
  }
  const handleOpenAns4 =() =>{
    setOpenAns4(!openAns4)
}
  const handleOpenAns5 =() =>{
      setOpenAns5(!openAns5)
  }
  const handleOpenAns6 =() =>{
      setOpenAns6(!openAns6)
  }
  const handleOpenAns7 =() =>{
      setOpenAns7(!openAns7)
  }
  return ( 
    <div className='Faq' >
   <div className="faq_body">
   <Back name='Frequently Asked Questions' title='How can we help?' cover={Img}  />
   <Heading title='Frequently Asked Questions' subtitle='' />
        <div className="faqBody">
            <div className="faqText">
                <div className="faq_Que">
                <span className='queText'>what is afrimart?</span>
                <IoMdAdd className='faqIcon' onClick={handleOpenAns}/>
                </div>
                <div className="faq_ans">
               {
                openAns && (
                    <div >
                        <ul className="faqAnsBody">
                            <li className='ansList'><BiSolidRightArrowAlt className='ansIcon'/> Afrimart is Africa’s first intra-continental online business-to-business trade platform.</li>
                            <li className='ansList'><BiSolidRightArrowAlt className='ansIcon'/>This platform is designed to create new business opportunities for African SMEs and general merchants on the quest for growth and expansion by creating visibility and accessibility to African buyers and suppliers</li>
                           
                        </ul>
                    </div>
                )
               }
                </div>
            </div>
            <div className="faqText">
                <div className="faq_Que">
                <span className='queText'>What are the benefits of joining Afrimart?</span>
                <IoMdAdd className='faqIcon' onClick={handleOpenAns2}/>
                </div>
                <div className="faq_ans">
                {
                openAns2 && (
                 
                    <div>
                        <ul  className="faqAnsBody">
                            <li className='ansList'><BiSolidRightArrowAlt className='ansIcon'/> Visibility and accessibility to African buyers and suppliers</li>
                            <li className='ansList'><BiSolidRightArrowAlt className='ansIcon'/> Free membership for a year</li>
                            <li className='ansList'><BiSolidRightArrowAlt className='ansIcon'/> Payment security</li>
                            <li className='ansList'><BiSolidRightArrowAlt className='ansIcon'/> Supplier verification</li>
                            <li className='ansList'><BiSolidRightArrowAlt className='ansIcon'/> Network of logistics partners</li>
                            <li className='ansList'><BiSolidRightArrowAlt className='ansIcon'/> Location based lead generation</li>
                            <li className='ansList'><BiSolidRightArrowAlt className='ansIcon'/> Ecosystem of payment partners (Afrexim & other payment companies)</li>
                            <li className='ansList'><BiSolidRightArrowAlt className='ansIcon'/> Business tools for sellers: analytics, inventory management, selling tips, etc.</li>
                            <li className='ansList'><BiSolidRightArrowAlt className='ansIcon'/> Multilingual platform</li>
                            <li className='ansList'><BiSolidRightArrowAlt className='ansIcon'/> Growth and scale opportunity for African manufacturing industries.</li>
                        </ul>
                    </div>
                )
               }
                </div>
            </div>
            <div className="faqText">
                <div className="faq_Que">
                <span className='queText'>Is there a fee to join Afrimart?</span>
                <IoMdAdd className='faqIcon' onClick={handleOpenAns3}/>
                </div>
                <div className="faq_ans">
                {
                openAns3 && (
                <div >
                        <ul className="faqAnsBody">
                            <li className='ansList'><BiSolidRightArrowAlt className='ansIcon'/> Afrimart is Africa’s first intra-continental online business-to-business trade platform.</li>
                            <li className='ansList'><BiSolidRightArrowAlt className='ansIcon'/>This platform is designed to create new business opportunities for African SMEs and general merchants on the quest for growth and expansion by creating visibility and accessibility to African buyers and suppliers</li>
                           
                        </ul>
                </div>
                )
               }
                </div>
            </div>
            <div className="faqText">
                <div className="faq_Que">
                <span className='queText'>Does Afrimart sell products?</span>
                <IoMdAdd className='faqIcon' onClick={handleOpenAns4}/>
                </div>
                <div className="faq_ans">
                {
                openAns4 && (
                <div >
                        <ul className="faqAnsBody">
                            <li className='ansList'><BiSolidRightArrowAlt  className='ansIcon'/>No, Afrimart is neither a supplier nor a buyer.</li>
                        </ul>
                </div>
                )
               }
                </div>
            </div>

            <div className="faqText">
                <div className="faq_Que">
                <span className='queText'>How do I place an order?</span>
                <IoMdAdd className='faqIcon' onClick={handleOpenAns5}/>
                </div>
                <div className="faq_ans">
               {
                openAns5 && (
                    <div >
                        <ul className="faqAnsBody">
                            <li className='ansList'><BiSolidRightArrowAlt className='ansIcon'/> Search for the product(s) you want OR request a quotation for the product and a matched supplier(s) may respond to you</li>
                            <li className='ansList'><BiSolidRightArrowAlt className='ansIcon'/>Once you’ve identified your desired product, contact the supplier to initiate the buying process</li>     
                            <li className='ansList'><BiSolidRightArrowAlt className='ansIcon'/>Once you’re ready to make a payment, click here to pay using our Secure Escrow Platform</li>
                           
                        </ul>
                    </div>
                )
               }
                </div>
            </div>
            <div className="faqText">
                <div className="faq_Que">
                <span className='queText'>How do I change the price to my local currency?</span>
                <IoMdAdd className='faqIcon' onClick={handleOpenAns6}/>
                </div>
                <div className="faq_ans">
                {
                openAns6 && (
                 
                    <div >
                        <ul className="faqAnsBody">
                            <li className='ansList'><BiSolidRightArrowAlt className='ansIcon'/> Afrimart integrates a currency converter that automatically tracks your current country location and shows prices in your local currency.</li>
                             <li className='ansList'><BiSolidRightArrowAlt className='ansIcon'/>You can also view prices in the currency of the country you’re transacting with and in US$ for reference</li>
                        </ul>
                    </div>
                )
               }
                </div>
            </div>
            <div className="faqText">
                <div className="faq_Que">
                <span className='queText'>How do I attract more buyers?</span>
                <IoMdAdd className='faqIcon' onClick={handleOpenAns7}/>
                </div>
                <div className="faq_ans">
                {
                openAns7 && (
                <div >
                        <ul className="faqAnsBody"> 
                            <li className='ansList'><BiSolidRightArrowAlt className='ansIcon'/>Become a verified seller</li>
                            <li className='ansList'><BiSolidRightArrowAlt  className='ansIcon'/> Make sure the product picture has a high resolution (always use flash on the camera, even in natural light). Be sure that the environment is clean and attractive to look at.</li>
                           
                            <li className='ansList'><BiSolidRightArrowAlt  className='ansIcon'/>Close-up pictures draw more attention</li>
                            <li className='ansList'><BiSolidRightArrowAlt  className='ansIcon'/> Create catchy headings with popular keywords</li>
                           
                            <li className='ansList'><BiSolidRightArrowAlt  className='ansIcon'/>Don’t overemphasize or be too dramatic when describing the product, it comes off as dishonest…keep it as simple and detailed as possible</li>
                            <li className='ansList'><BiSolidRightArrowAlt  className='ansIcon'/>Be competitive with prices, make sure you are within the range of other similar product offerings </li>
                           
                            <li className='ansList'><BiSolidRightArrowAlt  className='ansIcon'/>Maintain a high seller's rating</li>
                           <div className="extraInfo" style={{marginLeft:'10%'}}>
                           <li><b>1.</b> Maintain great communication with buyers, respond to emails quickly</li>
                            <li><b>2.</b> Ship within 24 hours if possible, otherwise, keep it within the stated time frame</li>
                            <li><b>3.</b> Keep your customer as happy as possible</li>
                            <li><b>4.</b> Be as honest and accurate about the product (this prevents returns)</li>
                            <li><b>5.</b> Leave positive feedbacks for buyers and they will more than likely, do the same</li>
                           
                           </div>
                        </ul>
                </div>
                )
               }
                </div>
            </div>
          
        </div>
   </div>
    </div>
  )
}

export default FaqPage