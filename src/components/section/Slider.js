import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const SwiperData = [
  {
    title: "어디로 가볼까?",
    mainTitle: "아트 뮤지엄 전시회",
    desc: "고즈넉한 ",
    link1: "/",
    link2: "/",
  },
  {
    title: "저기로 가볼까?",
    mainTitle: "귀여운 양들",
    desc: "눈 덮힌 마을 속 고히 잠들어 있는 새싹들",
    link1: "/",
    link2: "/",
  },
  {
    title: "NY❤️전시회",
    mainTitle: "따스한 봄날",
    desc: "눈 덮힌 마을 속 고히 잠들어 있는 새싹들",
    link1: "/",
    link2: "/",
  },
];

function Slider(props) {
  return (
    <section id="sliderType" className={`slider__wrap ${props.fonts}`}>
      <div className="slider__inner">
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper"
        >
          {/* {SwiperData.map((info,index)=>(
            <SwiperText key={index} title={info.title} mainTitle={info.mainTitle} desc={info.desc} link1={info.link1} link2={info.link2}/>
          ))} */}
          <SwiperSlide>
            <div class="desc">
              <span>{SwiperData[0].title}</span>
              <h3>{SwiperData[0].mainTitle}</h3>
              <p>{SwiperData[0].desc}</p>
              <div class="btn">
                <a class="loading" href={`${SwiperData[0].link1}`}>
                  자세히 보기
                </a>
                <a href={`${SwiperData[0].link2}`} class="black loading">
                  사이트 보기
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="desc">
              <span>{SwiperData[1].title}</span>
              <h3>{SwiperData[1].mainTitle}</h3>
              <p>{SwiperData[1].desc}</p>
              <div class="btn">
                <a class="loading" href={`${SwiperData[1].link1}`}>
                  자세히 보기
                </a>
                <a href={`${SwiperData[1].link2}`} class="black loading">
                  사이트 보기
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="desc">
              <span>{SwiperData[2].title}</span>
              <h3>{SwiperData[2].mainTitle}</h3>
              <p>{SwiperData[2].desc}</p>
              <div class="btn">
                <a class="loading" href={`${SwiperData[2].link1}`}>
                  자세히 보기
                </a>
                <a href={`${SwiperData[2].link2}`} class="black loading">
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
      </div>
    </section>
  );
}

export default Slider;
