import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdKeyboardArrowRight } from "react-icons/md";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './home.css';

// import required modules
import { Navigation ,Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const Home = () => {
  return (
    <div>
        <Swiper cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper">
        <SwiperSlide>
            <div className='main-banner-1'>
            <div className='text-main'>
              <div className='text'>
                <p className='text-1'>All-In-One Mini Drone</p>
                <h1>Dji Mini 4 <span>PRO</span></h1>
                <h3>Mini to the Max</h3>
              </div>
              <div className='buttons'>
                <button className='btn'>Learn More <span><MdKeyboardArrowRight/></span></button>
                <button className='btn'> Buy Now <span></span><MdKeyboardArrowRight/></button>
              </div>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='main-banner-2'>
          <div className='text-main'>
              <div className='text'>
                <p className='text-1'>All-In-One Mini Drone</p>
                <h1>Dji Mini 4 <span>PRO</span></h1>
                <h3>Mini to the Max</h3>
              </div>
              <div className='buttons'>
                <button className='btn'>Learn More <span><MdKeyboardArrowRight/></span></button>
                <button className='btn'> Buy Now <span></span><MdKeyboardArrowRight/></button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='main-banner-3'>
          <div className='text-main'>
              <div className='text'>
                <p className='text-1'>All-In-One Mini Drone</p>
                <h1>Dji Mini 4 <span>PRO</span></h1>
                <h3>Mini to the Max</h3>
              </div>
              <div className='buttons'>
                <button className='btn'>Learn More <span><MdKeyboardArrowRight/></span></button>
                <button className='btn'> Buy Now <span></span><MdKeyboardArrowRight/></button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='main-banner-4'>
          <div className='text-main'>
              <div className='text'>
                <p className='text-1'>All-In-One Mini Drone</p>
                <h1>Dji Mini 4 <span>PRO</span></h1>
                <h3>Mini to the Max</h3>
              </div>
              <div className='buttons'>
                <button className='btn'>Learn More <span><MdKeyboardArrowRight/></span></button>
                <button className='btn'> Buy Now <span></span><MdKeyboardArrowRight/></button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='main-banner-5'>
          <div className='text-main'>
              <div className='text'>
                <p className='text-1'>All-In-One Mini Drone</p>
                <h1>Dji Mini 4 <span>PRO</span></h1>
                <h3>Mini to the Max</h3>
              </div>
              <div className='buttons'>
                <button className='btn'>Learn More <span><MdKeyboardArrowRight/></span></button>
                <button className='btn'> Buy Now <span></span><MdKeyboardArrowRight/></button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='main-banner-6'>
          <div className='text-main'>
              <div className='text'>
                <p className='text-1'>All-In-One Mini Drone</p>
                <h1>Dji Mini 4 <span>PRO</span></h1>
                <h3>Mini to the Max</h3>
              </div>
              <div className='buttons'>
                <button className='btn'>Learn More <span><MdKeyboardArrowRight/></span></button>
                <button className='btn'> Buy Now <span></span><MdKeyboardArrowRight/></button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='main-banner-7'>
          <div className='text-main'>
              <div className='text'>
                <p className='text-1'>All-In-One Mini Drone</p>
                <h1>Dji Mini 4 <span>PRO</span></h1>
                <h3>Mini to the Max</h3>
              </div>
              <div className='buttons'>
                <button className='btn'>Learn More <span><MdKeyboardArrowRight/></span></button>
                <button className='btn'> Buy Now <span></span><MdKeyboardArrowRight/></button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Home