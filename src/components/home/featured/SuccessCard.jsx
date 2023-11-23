import React from "react"
import { success } from "../../data/Data"

const FeaturedCard = () => {
  return (
    <>
      <div className='content'>
        {success.map((items, index) => (
          <div className='featured_box' key={index}>
            <img src={items.cover} alt='' className="boxImg" />
            <h4 className="BoxName">{items.name}</h4>
            <label className="Box-Text">{items.total}</label>
          </div>
        ))}
      </div>
    </>
  )
}

export default FeaturedCard
