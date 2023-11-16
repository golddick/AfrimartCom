import React from "react"
import './recent.css'
import { list } from "../../data/Data"

const RecentCard = () => {
  return (
    <>
      <div className='content grid3 mtop'>
        {list.map((val, index) => {
          const { cover, category, location, name, price, type } = val
          return (
            <div className='box_shadow' key={index} >
              <div className='box-img'>
                <img src={cover} alt=''/>
              </div>
              <div className='box-text'>
                <div className='category flex'>
                  <span style={{ background: category === "Available" ? "#25b5791a" : "#ff98001a", color: category === "Available" ? "#25b579" : "#ff9800" }}>{category}</span>
                  <i className='fa fa-heart'></i>
                </div>
                <h4>{name}</h4>
                <p>
                  <i className='fa fa-location-dot'></i> {location}
                </p>
              </div>
              <div className='box-button flex'>
                <div>
                  <button className='btn2'>Get Quote</button> 
                </div>
                <span>{type}</span>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default RecentCard
