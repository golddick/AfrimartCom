import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='What is Afrimart' subtitle='Afrimart is Africa’s first pan-continental ecommerce trading ecosystem with Software-as-a-Service provision' />

            <p>Afrimart is Africa’s first pan-continental online (B2B/B2C) ecommerce trading ecosystem that enables organizations to have their own branded and operated B2B/B2C ecommerce trading sites, while also benefitting from being part of an aggregated and interoperable pan-African global common marketplace. This gives organizations, their customers, as well as their products much higher global visibility, as well as having the benefits of more cost-effective shared services.</p>
            <p>​Afrimart therefore provides the platform to empower organizations and their members’ businesses with all the tools they need to manage, trade, and deliver their products and services to an African and global market. The Afrimart ecosystem operates on an interoperable Software as a Service (SaaS) model. </p>
            {/* <button className='btn2'>More About Us</button> */}
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
        <div className='container flex mtop' >
        <div className='left row' style={{marginRight:'100px'}}>
            <img src='./immio.jpg' alt='' />
          </div>
          <div className='right row'>
            <Heading title='Afrimart Genesis' subtitle='Afrimart is built on the success of ITEX Integrated Services Limited, a payment solution company with multiple payment products and over 150,000 merchants​' />

            <p>Afrimart was conceived and developed by the founders and operators of ITEX 
              Integrated Services Limited (www.iisysgroup.com). ITEX is pioneer FinTech company 
              licensed by the Central Bank of Nigeria, as well as having various other licenses across 
              Africa, to operate as a Payment Terminal Service Provider (PTSP), Payment Solution
               Services Provider (PSSP), and Super Agent Banking Operator, amongst others. Itex’s 
               Pan-African footprint currently covers 22 countries. Afrimart also leverages on ITEX’s 
               footprint to enhance the drastic reduction of trade frictions to create seamless African global trade. ​</p>

            <p>Research from The United Nations Conference on Trade and Development in 2017 shows that intra-African exports 
              were a paltry 16.6% of total exports when compared to Europe at 68.1%, Asia at 59.4%, and America at 55.0%.​</p>
            {/* <button className='btn2'>More About Us</button> */}
          </div>
          
        </div>
      </section>
    </>
  )
}

export default About
