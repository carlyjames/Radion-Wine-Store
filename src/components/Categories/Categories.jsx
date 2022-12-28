import React, { useRef, useState } from "react";

// import categories
import './Category'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ArrowBackIosNew } from "@mui/icons-material";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";
import '../../Styles/custom.css'


// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import Category from "./Category";

export default function Categories() {
  return (
    <>
    <div className="container-fluid category-container">
      <div className="p-1 pt-2 text-dark category-header">Wine <span className="colored-category-header">Categories</span> </div>
      <Swiper
             slidesPerView={6}
             spaceBetween={20}
             loop={true}
            //  freeMode = {true}
             grabCursor = {true}
             freeModeMomentum = {false}
             reverseDirection = {true}
             direction = 'horizontal'
            // loopFillGroupWithBlank={true}
             speed={3000}
             autoplay={{
               delay: 0,
               disableOnInteraction: true,
             }}
             pagination={{
               clickable: true,
               dot : true,
             }}
            //  navigation = {true}
            // navigation={{
            //   prevEl: ".swiper-button-prev",
            //   nextEl: ".swiper-button-next",
            // }}

            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 20 },
              480: { slidesPerView: 3, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 10 },
              1024: { slidesPerView: 6, spaceBetween: 20 },
            }}
            //  navigation={true}
             modules={[Autoplay, Pagination, Navigation]}
             className="mySwiper p-2"
            >
             { Category.map((category)=>(
                <SwiperSlide className="swiper-div d-flex align-items-center justify-content-evenly px-2 ">
                  <div className="image-holder col-md-8" >
                    <img src={category.image} alt={category.name} />
                  </div>
                  <div className="caption-holder col-md-4 d-flex flex-column align-items-center">
                    <div className="category-name ">{category.name}</div>
                  </div>
                </SwiperSlide>
              )) }

              {/* <ArrowForwardIosIcon className="swiper-button-next" />
              <ArrowBackIosNew className="swiper-button-prev" /> */}


      </Swiper>
    </div>
      
    </>
  );
}
