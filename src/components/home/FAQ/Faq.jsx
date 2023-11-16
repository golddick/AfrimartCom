import React, {useState} from 'react'
import { IoMdAdd } from "react-icons/io";
import {BiSolidRightArrowAlt} from 'react-icons/bi'
import Heading from '../../common/Heading'
import './style.css'

function Faq() {
    const [openAns, setOpenAns] = useState()
    const [openAns2, setOpenAns2] = useState()
    const [openAns3, setOpenAns3] = useState()
    const [openAns4, setOpenAns4] = useState()
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
  return (
    <div className='Faq padding'>
        <Heading title='Frequently Asked Questions' subtitle='' />
        <div className="faqBody">
            <div className="faqText">
                <div className="faq_Que">
                <span className='queText'>what is afrimart?</span>
                <IoMdAdd className='faqIcon' onClick={handleOpenAns} />
                </div>
                <div className="faq_ans">
               {
                openAns && (
                    <div>
                        <ul  className="faqAnsBody">
                            <li><BiSolidRightArrowAlt/> Afrimart is Africa’s first intra-continental online business-to-business trade platform.</li>
                            <li><BiSolidRightArrowAlt/>This platform is designed to create new business opportunities for African SMEs and general merchants on the quest for growth and expansion by creating visibility and accessibility to African buyers and suppliers</li>
                           
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
                            <li><BiSolidRightArrowAlt/> Visibility and accessibility to African buyers and suppliers</li>
                            <li><BiSolidRightArrowAlt/> Free membership for a year</li>
                            <li><BiSolidRightArrowAlt/> Payment security</li>
                            <li><BiSolidRightArrowAlt/> Supplier verification</li>
                            <li><BiSolidRightArrowAlt/> Network of logistics partners</li>
                            <li><BiSolidRightArrowAlt/> Location based lead generation</li>
                            <li><BiSolidRightArrowAlt/> Ecosystem of payment partners (Afrexim & other payment companies)</li>
                            <li><BiSolidRightArrowAlt/> Business tools for sellers: analytics, inventory management, selling tips, etc.</li>
                            <li><BiSolidRightArrowAlt/> Multilingual platform</li>
                            <li><BiSolidRightArrowAlt/> Growth and scale opportunity for African manufacturing industries.</li>
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
                            <li><BiSolidRightArrowAlt/> yes.</li>
                            <li><BiSolidRightArrowAlt/>yes</li>
                           
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
                <div>
                        <ul  className="faqAnsBody">
                            <li><BiSolidRightArrowAlt/>No, Afrimart is neither a supplier nor a buyer.</li>
                        </ul>
                </div>
                )
               }
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Faq
