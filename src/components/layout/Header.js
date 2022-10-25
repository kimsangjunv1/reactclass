import React from "react";

function Header(props) {
  return (
    <header id="headerType" className={`header__wrap ${props.fonts}`}>
      <div className="header__inner">
        <div className="header__logo">
          <a href="/">#여행_가자!</a>
        </div>
        <div className="header__menu">
          <ul>
            <li className="actived">
              <a href="#sliderType">슬라이드 영역</a>
            </li>
            <li>
              <a href="#imageType01">이미지 영역</a>
            </li>
            <li>
              <a href="#imgTextType">이미지/텍스트 영역</a>
            </li>
            <li>
              <a href="#cardType">카드 영역</a>
            </li>
            <li>
              <a href="#bannerType">배너 영역</a>
            </li>
            <li>
              <a href="#textType">텍스트 영역</a>
            </li>
            <li>
              <a href="#footerType">푸터 영역</a>
            </li>
          </ul>
        </div>
        <div className="header__member">
          <a href="/" className="loading">
            로그인
          </a>
        </div>
        <div className="header__ham">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
