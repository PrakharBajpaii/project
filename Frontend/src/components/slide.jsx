import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

export default function HeroSlider() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"

      >

        <SwiperSlide className=""
          style={{ height: "50vh" }}>
             <img className='block  w-full mx-auto pt-6 md:pt-0 md:items-top bg-top object-cover' src="https://www.cnet.com/a/img/resize/41653b34dfe625a2379c34cf56765920224eab4e/hub/2022/01/07/fa883212-8dac-4e37-9459-11f0c0b5e59e/baby-clothes-hero-image.jpg?auto=webp&fit=crop&height=900&width=1200" alt="IMG" />
        </SwiperSlide>
        <SwiperSlide className=""
          style={{ height: "50vh" }}>
          <img className='object-cover block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-center' src="https://i0.wp.com/poppi.co.za/wp-content/uploads/2022/09/16442885764edc6f1362bfe44a93408a110fd8eb07.jpg?fit=768%2C1024&ssl=1 " alt="IMG" />
        </SwiperSlide>
        <SwiperSlide className=""
          style={{ height: "50vh" }}>
            
          <img className='object-cover block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-center' src="https://www.rootandsoil.in/cdn/shop/files/tender-coconut-absolute-bathing-bar-for-babies-from-0-months-100-g-root-and-soil-r.jpg?v=1711972652"  alt="IMG" />
        
        </SwiperSlide>


      </Swiper>

    </>
  );
}