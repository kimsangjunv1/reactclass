import React from "react";

const bannerInfo = [
  {
    title: "내 손으로 만들어 가는 루트",
    desc: "다양하고 다채로운 도시의 모습은 이곳을 참조하세요!",
    url: "https://www.youtube.com/channel/UCqVDpXKLmKeBU_yyt_QkItQ/",
    small: "도시 속 모습_01",
  },
];

const BannerText = ({ title, desc, url, small }) => {
  return (
    <div className="banner__inner">
      <h3 className="title">{title}</h3>
      <p className="desc">
        {desc}
        <a href={`${url}`} title="유튜브 페이지로 이동">
          {url}
        </a>
      </p>
      <span className="small">{small}</span>
    </div>
  );
};

function Banner(props) {
  return (
    <section id="bannerType" class={`banner__wrap ${props.fonts}`}>
      <h2 className="blind">배너 영역</h2>

      {bannerInfo.map((info, index) => (
        <BannerText
          key={index}
          title={info.title}
          desc={info.desc}
          url={info.url}
          small={info.small}
        />
      ))}

      {/* <h2 class="blind">배너 영역</h2>
      <div class="banner__inner">
        <h3 class="title">#내_손으로_만들어_가는_루트</h3>
        <p class="desc">
          다양하고 다채로운 도시의 모습은 이곳을 참조하세요!
          <a href="/" title="유튜브 페이지로 이동">
            https://www.youtube.com/channel/UCqVDpXKLmKeBU_yyt_QkItQ/
          </a>
        </p>
        <span class="small">도시 속 모습_01</span>
      </div> */}
    </section>
  );
}

export default Banner;
