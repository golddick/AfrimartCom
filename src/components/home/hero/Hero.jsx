import React, { useRef, useState } from 'react';
//import Heading from "../../common/Heading"
import "./hero.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import img1 from '../../../Assest /header1.jpg'
import img2 from '../../../Assest /header2.jpg'
import img3 from '../../../Assest /header3.jpg'
import '../../../../node_modules/swiper/swiper-bundle.css'
import '../../../../node_modules/swiper/swiper-bundle.min.css'
import '../../../../node_modules/swiper/swiper.css'
import '../../../../node_modules/swiper/swiper.min.css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import 'swiper/swiper-bundle.min.css'
// import 'swiper/swiper.min.css'

const Hero = () => {
  return (
    <>
      <section className='hero'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
         <SwiperSlide  style={{ background:`url(${img1})`, backgroundSize: 'cover',backgroundRepeat: 'no-repeat' , width:'100%',height:'90vh'}}>
        <div className='container'>
          <div className="headerText">
            <h3 className="Header-text">
            Leverage the Power of The Pan-African <br/>E-Commerce Ecosystem
            </h3>
            <h6 className="headerBio">
            Afrimart powers African SMMEs and larger businesses,  providing all the tools needed for trading with a pan-African and global market
            </h6>
          </div>
   
        </div>
        </SwiperSlide>

        <SwiperSlide style={{ background:`url(${img2})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' , width:'100%', height:'90vh'}}>
        <div className='container'>
          {/* <Heading title='' subtitle='' /> */}
          <div className="headerText">
            <h3 className="Header-text">
            Leverage the Power of The Pan-African <br/>E-Commerce Ecosystem
            </h3>
            <h6 className="headerBio">
            Afrimart powers African SMMEs and larger businesses,  providing all the tools needed for trading with a pan-African and global market
            </h6>
          </div>
        </div>
        </SwiperSlide>

        <SwiperSlide style={{ background: `url(${img3})`, backgroundSize: 'cover' ,backgroundRepeat: 'no-repeat' , width:'100%',height:'90vh'}}>
        <div className='container'>
          {/* <Heading title='' subtitle='' /> */}
          <div className="headerText">
            <h3 className="Header-text">
            Leverage the Power of The Pan-African <br/>E-Commerce Ecosystem
            </h3>
            <h6 className="headerBio">
            Afrimart powers African SMMEs and larger businesses,  providing all the tools needed for trading with a pan-African and global market
            </h6>
          </div>
        </div>
        </SwiperSlide>
        </Swiper>
      </section>
    </>
  )
}

export default Hero
