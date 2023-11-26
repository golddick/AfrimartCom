import React, {useState, useRef} from "react"
import { price } from "../../data/Data"
import { BsCheckAll} from 'react-icons/bs'
import { useHistory } from 'react-router-dom';
import './price.css'


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import '../../../../node_modules/swiper/swiper-bundle.css'
import '../../../../node_modules/swiper/swiper-bundle.min.css'
import '../../../../node_modules/swiper/swiper.css'
import '../../../../node_modules/swiper/swiper.min.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const PriceCard = () => {

  const [activeTab, setActiveTab] = useState('single');
  const navigateTo = useHistory();
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
 




  const handleProceedSingleSLiverClick = () => {
    window.location.href = 'https://afrimart.com/en/shops/create/2';
  };
  const handleProceedSingleBronzeClick = () => {
    window.location.href = 'https://afrimart.com/en/shops/create/1';
  };
  const handleProceedSingleGoldClick = () => {
    window.location.href = 'https://afrimart.com/en/shops/create/3';
  };
  const handleProceedClick = () => {
    // navigateTo.push('/Form');
    window.location.href = '/Form';
    // window.location.href = 'https://afrimart.com/en/register/pricing';
  };
  return (


    <div className="priceCard">
      <div className="pricingSwitch">
       
         <div className={`tab ${activeTab === 'single' ? 'activeTab' : ''}`} onClick={() => handleTabClick('single')}>
        <span>Single Merchant</span>
      </div>
  
        <div className={`tab ${activeTab === 'enterprise' ? 'activeTab' : ''}`} onClick={() => handleTabClick('enterprise')}>
        <span>Enterprise</span>
      </div>
      </div>

      {activeTab === 'single' && (
      <div className="pricingContent">
        <h2 className="cardHeader">A single store operator is a
           merchant site belonging to one
            vendor that may have multiple
             products displayed and marketed
              within their store.</h2>

              {/* <div className="pricingCards"> */}
                <div className="p_cardRow">

                <>
                <Swiper
                  pagination={{
                    type: 'fraction',
                  }}
                modules={[Pagination, Navigation]}
                breakpoints={{
                  // when window width is >= 320px
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                  },
                  // when window width is >= 480px
                  480: {
                    slidesPerView: 1,
                    spaceBetween: 30
                  },
                  // when window width is >= 640px
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 40
                  }
                }}
                className="p_cardRow"
              >

                <SwiperSlide>
                  <div className="pCard">
                    <h2 className="cardText">Bronze</h2>
                    <div className="month">
                      <span className="monthText">$<b>19.99</b>/month</span>
                      <span className="monthText">$<b>199.9</b>/year</span>
                    </div>
                    <div className="features">
                 <div className="feature">
                 <BsCheckAll className="FIcons"/>
                  <span className="FText">Products per store: 8</span>
                 </div>
                 <div className="feature">
                 <BsCheckAll className="FIcons"/>
                  <span className="FText">Store Type : Premium</span>
                 </div>
                 <div className="feature">
                 <BsCheckAll className="FIcons"/>
                  <span className="FText">Microsite: Yes</span>
                 </div>
                 <div className="feature">
                 <BsCheckAll className="FIcons"/>
                  <span className="FText">Free Monthly Leads: 5</span>
                 </div>
                 
                 <div className="feature">
                 <BsCheckAll className="FIcons"/>
                  <span className="FText">Adverts: No</span>
                 </div>
                 <div className="feature">
                 <BsCheckAll className="FIcons"/>
                  <span className="FText">Verified Seal: Yes</span>
                 </div>
                 <div className="feature">
                 <BsCheckAll className="FIcons"/>
                  <span className="FText">Importer Contacts/Month:10</span>
                 </div>
                 <div className="feature">
                 <BsCheckAll className="FIcons"/>
                  <span className="FText">RFQ Max Notification:1</span>
                 </div>
                 <div className="feature">
                 <BsCheckAll className="FIcons"/>
                  <span className="FText">Search Ranking: High</span>
                 </div>

                    </div>
                    <button class="btn" onClick={handleProceedSingleBronzeClick}>
                    Proceed
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="20px" width="20px" class="icon">
                  <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.5" stroke="orange" d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008"></path>
                  </svg>
                  </button>
                  </div>
            
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="pCard">
                    <h2 className="cardText">Sliver</h2>
                    <div className="month">
                      <span className="monthText">$<b>29.99</b>/month</span>
                      <span className="monthText">$<b>299.9</b>/year</span>
                    </div>
                    <div className="features">
                 <div className="feature">
                 <BsCheckAll className="FIcons"/>
                  <span className="FText">Products per store: 16</span>
                 </div>
                 <div className="feature">
                 <BsCheckAll className="FIcons"/>
                  <span className="FText">Store Type : Premium</span>
                 </div>
                 <div className="feature">
                 <BsCheckAll className="FIcons"/>
                  <span className="FText">Microsite: Yes</span>
                 </div>
                 <div className="feature">
                 <BsCheckAll className="FIcons"/>
                  <span className="FText">Free Monthly Leads: 10</span>
                 </div>
                 
                 <div className="feature">
                 <BsCheckAll className="FIcons"/>
                  <span className="FText">Adverts: yes</span>
                 </div>
                 <div className="feature">
                 <BsCheckAll className="FIcons"/>
                  <span className="FText">Verified Seal: Yes</span>
                 </div>
                 <div className="feature">
                 <BsCheckAll className="FIcons"/>
                  <span className="FText">Importer Contacts/Month:20</span>
                 </div>
                 <div className="feature">
                 <BsCheckAll className="FIcons"/>
                  <span className="FText">RFQ Max Notification:3</span>
                 </div>
                 <div className="feature">
                 <BsCheckAll className="FIcons"/>
                  <span className="FText">Search Ranking: Priority</span>
                 </div>

                    </div>
                    <button class="btn" onClick={handleProceedSingleSLiverClick}>
                    Proceed
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="20px" width="20px" class="icon">
                  <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.5" stroke="orange" d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008"></path>
                  </svg>
                  </button>
                  </div>
                  
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="pCard">
                    <h2 className="cardText">Gold</h2>
                    <div className="month">
                      <span className="monthText">$<b>59.99</b>/month</span>
                      <span className="monthText">$<b>599.9</b>/year</span>
                    </div>
                    <div className="features">
                 <div className="feature">
                 <BsCheckAll className="FIcons"/>
                  <span className="FText">Products per store: 100</span>
                 </div>
                 <div className="feature">
                 <BsCheckAll className="FIcons"/>
                  <span className="FText">Store Type : Premium</span>
                 </div>
                 <div className="feature">
                 <BsCheckAll className="FIcons"/>
                  <span className="FText">Microsite: Yes</span>
                 </div>
                 <div className="feature">
                 <BsCheckAll className="FIcons"/>
                  <span className="FText">Free Monthly Leads: 20</span>
                 </div>
                 
                 <div className="feature">
                 <BsCheckAll className="FIcons"/>
                  <span className="FText">Adverts: Yes</span>
                 </div>
                 <div className="feature">
                 <BsCheckAll className="FIcons"/>
                  <span className="FText">Verified Seal: Yes</span>
                 </div>
                 <div className="feature">
                 <BsCheckAll className="FIcons"/>
                  <span className="FText">Importer Contacts/Month:Unlimited</span>
                 </div>
                 <div className="feature">
                 <BsCheckAll className="FIcons"/>
                  <span className="FText">RFQ Max Notification:7</span>
                 </div>
                 <div className="feature">
                 <BsCheckAll className="FIcons"/>
                  <span className="FText">Search Ranking: VIP</span>
                 </div>

                    </div>
                    <button class="btn" onClick={handleProceedSingleGoldClick}>
                    Proceed
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="20px" width="20px" class="icon">
                  <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.5" stroke="orange" d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008"></path>
                  </svg>
                  </button>
                  </div>
                  </SwiperSlide>
                </Swiper>
                </>
                </div>
              {/* </div> */}
      </div>
       )}


{activeTab === 'enterprise' && (
      <div className="pricingenterpriseContent">
        <h2 className="cardHeader"> The Enterprise operator facilitates 
        a platform where multiple merchants can showcase and 
        sell their product(s) on a unified e-commerce website. 
        For personalized pricing, <i>please contact us for your customized pricing model</i>.</h2>
        {/* <h2 className="cardHeader"> An Enterprise operator is an
                 organization that provides a platform 
                 for multiple merchants/vendors to list 
                 and market their individual product(s) within 
                 a specified e-commerce website.This type of 
                 service allows the operator to host multiple
                  merchants/vendors and their product(s).</h2> */}

              <div className="pricingCards">
                <div className="p_cardERow">
                {/* <h6 className="cardSubText">please contact us for your customized pricing model</h6> */}
                  <div className="pECard">
                  <h2 className="cardText">Features</h2>                
                    <div className="features">
                 <div className="feature">
                 <BsCheckAll className="FIcons"/>
                  <span className="FText">Software as a Service </span>
                 </div>
                 <div className="feature">
                 <BsCheckAll className="FIcons"/>
                  <span className="FText">Custom Domain</span>
                 </div>
                 <div className="feature">
                 <BsCheckAll className="FIcons"/>
                  <span className="FText">Unlimited Products</span>
                 </div>
                 <div className="feature">
                 <BsCheckAll className="FIcons"/>
                  <span className="FText">Advanced Reports</span>
                 </div>
                 
                 <div className="feature">
                 <BsCheckAll className="FIcons"/>
                  <span className="FText">SEO</span>
                 </div>
                 <div className="feature">
                 <BsCheckAll className="FIcons"/>
                  <span className="FText">Multi Languages</span>
                 </div>
                 <div className="feature">
                 <BsCheckAll className="FIcons"/>
                  <span className="FText">Shipping System</span>
                 </div>
                 <div className="feature">
                 <BsCheckAll className="FIcons"/>
                  <span className="FText">Custom Design</span>
                 </div>
                 <div className="feature">
                 <BsCheckAll className="FIcons"/>
                  <span className="FText">Multiple Currencies</span>
                 </div>
                 <div className="feature">
                 <BsCheckAll className="FIcons"/>
                  <span className="FText">Electronic Payment</span>
                 </div>
                 <div className="feature">
                 <BsCheckAll className="FIcons"/>
                  <span className="FText">Inventory Management </span>
                 </div>
                 <div className="feature">
                 <BsCheckAll className="FIcons"/>
                  <span className="FText">Monthly Leads</span>
                 </div>
                 <div className="feature">
                 <BsCheckAll className="FIcons"/>
                  <span className="FText">Verified Seal</span>
                 </div>
                 <div className="feature">
                 <BsCheckAll className="FIcons"/>
                  <span className="FText">Unlimited RFQ Notifications</span>
                 </div>

                    </div>
                    <button class="btn" onClick={handleProceedClick}>
                    Contact
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="20px" width="20px" class="icon">
                  <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.5" stroke="orange" d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008"></path>
                  </svg>
                  </button>
                  {/* <div className="cl"  onClick={handleProceedClick}>click</div> */}
                  </div>
                </div>
              </div>
      </div>
       )}
    </div>
  )
}

export default PriceCard
