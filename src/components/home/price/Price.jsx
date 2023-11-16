import React from "react"
import Heading from "../../common/Heading"
import "./price.css"
import PriceCard from "./PriceCard"

const Price = () => {
  return (
    <>
      <section className='price '>
        <div className='container'>
          <Heading title='Pricing Model' subtitle='For Saas operators Afrimart operates on a custom pricing model tailored to your business requirements' />
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Price
