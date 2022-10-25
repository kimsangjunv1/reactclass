import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

function Slider() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper section"
      >
        <SwiperSlide>
          <div class="desc">
            <span>어디로 가볼까?</span>
            <h3>#새하얀_눈.</h3>
            <p>눈 덮힌 마을 속 고히 잠들어 있는 새싹들</p>
            <div class="btn">
              <a class="loading" href="/">
                자세히 보기
              </a>
              <a href="/" class="black loading">
                사이트 보기
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="desc">
            <span>어디로 가볼까?</span>
            <h3>#새하얀_눈.</h3>
            <p>눈 덮힌 마을 속 고히 잠들어 있는 새싹들</p>
            <div class="btn">
              <a class="loading" href="/">
                자세히 보기
              </a>
              <a href="/" class="black loading">
                사이트 보기
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="desc">
            <span>어디로 가볼까?</span>
            <h3>#새하얀_눈.</h3>
            <p>눈 덮힌 마을 속 고히 잠들어 있는 새싹들</p>
            <div class="btn">
              <a class="loading" href="/">
                자세히 보기
              </a>
              <a href="/" class="black loading">
                사이트 보기
              </a>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide></SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}

export default Slider;
