import React from "react";

const imageTitle = {
  title: "#내_여행_동반자",
  desc: "내 여행동안 내 외로움을 채워줄 소울 메이트는 어떠세요?"
}

const imageText = [
  {
    title : "불독은 어떠세요?",
    desc : "불독은 혼종이라고 하는데, 사람들에게 인기많은 이유는 생김새를 떠나서 강아지를 키운다는 그 사실이 좋은겁니다.",
    className : "img1",
    btnClass: "yellow",
    btnAddress: "/"
  },
  {
    title : "웰시코기는 어떠세요?",
    desc : "웰시코기는 다리가 참 짧죠? 그래서 키우는 사람들도 많은 편이고 총총 걸어다니는 모습을 보고있자니 너무 귀엽답니다!.",
    className : "img2",
    btnClass: "orange",
    btnAddress: "/"
  }
]

const ArticleText = ({title, desc, className, btnClass, btnAddress}) => {
  return (
    <article className={`image ${className}`}>
      <h3 className="image__title">{title}</h3>
      <p className="image__desc">
      {desc}
      </p>
      <a className={`image__btn ${btnClass} loading`} href={`${btnAddress}`} title="자세히 보기">
      자세히 보기
      </a>
    </article>
  )
}

function Image(props) {
  return (
    <section
      id="imageType01"
      className={`image__wrap ${props.attr[0]} ${props.attr[1]} ${props.attr[2]}`}
    >
      <h2>{imageTitle.title}</h2>
      <p>{imageTitle.desc}</p>
      <div className="image__inner">
        {imageText.map((info, index) => (
            <ArticleText key={index} title={info.title} desc={info.desc} className={info.className} btnClass={info.btnClass} btnAddress={info.btnAddress}/>
        ))}
      </div>
    </section>
  );
}

export default Image;
