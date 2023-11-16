import React from "react"
import Heading from "../../common/Heading"
import "./Featured.css"
import FeaturedCard from "./FeaturedCard"
import SuccessCard from './SuccessCard'

const Featured = () => {
  return (
    <>
      <section className='featured_background'>
        <div className='featured_container'>
          <div className="coardHeader">       <Heading title='The problem' subtitle='Africa’s trade currently faces the challenges of low visibility of tradable products, poor cross-border payments & logistics infrastructure, among others.' /></div>
         <div className="cardrow">
         <FeaturedCard  />
         </div>
        </div>
       {/* // <br/> */}
        <div className='featured_container'>
          <Heading title='What We Offer' subtitle='Afrimart ecosystem primary tenets,  which are Visibility, Integrity, Access etc.' />
          <SuccessCard  />
        </div>
      </section>
    </>
  )
}

export default Featured
