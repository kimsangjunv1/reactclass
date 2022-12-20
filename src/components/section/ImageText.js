import React from "react";

const ImgTextDesc = [
  {
    link : "/",
    desc : "오늘의 티"
  },
  {
    link : "/",
    desc : "오늘의 공원"
  },
  {
    link : "/",
    desc : "오늘의 장소"
  },
  {
    link : "/",
    desc : "오늘의 가게"
  },
  {
    link : "/",
    desc : "오늘의 춤"
  },
  {
    link : "/",
    desc : "오늘의 회사 출근 음악"
  }
]

const ImgText = ({link, desc}) =>{
  return (
    <li>
      <a href={`${link}`}>{desc}</a>
    </li>
  )
}

function ImageText({ attr }) {
  return (
    <section
      id="imgTextType"
      class={`imgText__wrap ${attr[0]} ${attr[1]} ${attr[2]} ${attr[3]}`}
    >
      <h2 class="blind">유용한 사이트 살펴보기 🎮</h2>
      <div class={`imgText__inner ${attr[4]}`}>
        <div class="imgText__txt">
          <span>여행 속 내 비즈니스</span>
          <h3>#일은_절대_놓을_수_없지</h3>
          <p>우리 다 같이 도시 라이프를 다채로운 방식으로 함께 즐겨보아요!</p>
          <ul>
            {ImgTextDesc.map((info, index)=>(
                <ImgText key={index} link={info.link} desc={info.desc}/>
              ))}
          </ul>
        </div>
        <div class="imgText__img img1">
          <a href="/">비즈니스</a>
        </div>
        <div class="imgText__img img2">
          <a href="/" class="blue">
            작업할때
          </a>
        </div>
      </div>
    </section>
  );
}

export default ImageText;
