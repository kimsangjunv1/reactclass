import React from "react";

function Banner(props) {
  return (
    <section id="bannerType" class={`banner__wrap ${props.fonts}`}>
      <h2 class="blind">배너 영역</h2>
      <div class="banner__inner">
        <h3 class="title">#내_손으로_만들어_가는_루트</h3>
        <p class="desc">
          다양하고 다채로운 도시의 모습은 이곳을 참조하세요!
          <a href="/" title="유튜브 페이지로 이동">
            https://www.youtube.com/channel/UCqVDpXKLmKeBU_yyt_QkItQ/
          </a>
        </p>
        <span class="small">도시 속 모습_01</span>
      </div>
    </section>
  );
}

export default Banner;
