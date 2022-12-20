import React from "react";

function Image(props) {
  return (
    <section
      id="imageType01"
      className={`image__wrap ${props.attr[0]} ${props.attr[1]}`}
    >
      <h2>#내_여행_동반자</h2>
      <p>내 여행동안 내 외로움을 채워줄 소울 메이트는 어떠세요?</p>
      <div className={`image__wrap ${props.attr[2]}`}>
        <article className="image img1">
          <h3 className="image__title">불독은 어떠세요?</h3>
          <p className="image__desc">
            불독은 혼종이라고 하는데, 사람들에게 인기많은 이유는 생김새를 떠나서
            강아지를 키운다는 그 사실이 좋은겁니다.
          </p>
          <a className="image__btn yellow loading" href="/" title="자세히 보기">
            자세히 보기
          </a>
        </article>
        <article className="image img2">
          <h3 className="image__title">웰시코기는 어떠세요?</h3>
          <p className="image__desc">
            웰시코기는 다리가 참 짧죠? 그래서 키우는 사람들도 많은 편이고 총총
            걸어다니는 모습을 보고있자니 너무 귀엽답니다!
          </p>
          <a className="image__btn loading" href="/" title="자세히 보기">
            자세히 보기
          </a>
        </article>
      </div>
    </section>
  );
}

export default Image;


{/* <article className={`image ${imageText[1].className}`}>
          <h3 className="image__title">{imageText[1].title}</h3>
          <p className="image__desc">
            {imageText[1].desc}
          </p>
          <a className="image__btn loading" href="/" title="자세히 보기">
            자세히 보기
          </a>
        </article> */}