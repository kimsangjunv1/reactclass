import React from "react";

const TextInfo=[
  {
    className : "t1",
    title: "내 장소",
    desc : "가끔은 내가 원하는 장소를 찾아야 할떄가 있죠, 그럴때에는 이 메뉴를 클릭해 다음과 같은 사항을 숙지해 앞으로 맞게 될 여행을",
    more : "더보기"
  },
  {
    className : "t2",
    title: "내 동반자",
    desc : "자신의 동반자를 찾는것은 중요합니다 그러기에 저희는 찾아드리는 서비스를 하고 있으며, 그럴때에는 이 메뉴를 클릭해 다음과 같은 사항을 숙지해 앞으로 맞게 될 여행을",
    more : "더보기"
  },
  {
    className : "t3",
    title: "여행패키지",
    desc : "여행 패키지를 찾음으로써 각종 사항에 굳이 시간을 소비할 필요가 없습니다 그래서 만약 찾고계시다면 그럴때에는 이 메뉴를 클릭해 다음과 같은 사항을 숙지해 앞으로 맞게 될 여행을",
    more : "더보기"
  },
  {
    className : "t4",
    title: "내 장소",
    desc : "여행도구는 정말 없어서는 안될 그런 도구입니다 그러니 꼭 필요한 물품으로써 그럴때에는 이 메뉴를 클릭해 다음과 같은 사항을 숙지해 앞으로 맞게 될 여행을",
    more : "더보기"
  },
  {
    className : "t5",
    title: "내 장소",
    desc : "즐길거리가 또 빠지게 되면 섭하죠 그러니 혹여나 찾고계시다면 그럴때에는 이 메뉴를 클릭해 다음과 같은 사항을 숙지해 앞으로 맞게 될 여행을",
    more : "더보기"
  },
  {
    className : "t6",
    title: "내 장소",
    desc : "다양한 참고할만한 자료가 필요할때 분명 있습니다 <br/> 그렇기에 저희는 데이터를 축적해놨는데요 그럴때에는 이 메뉴를 클릭해 다음과 같은 사항을 숙지해 앞으로 맞게 될 여행을",
    more : "더보기"
  }
]

const TextDesc = ({className, title, desc, more}) => {
  return(
    <div class={`text ${className}`}>
      <h3 class="text__title">{title}</h3>
      <p class="text__desc">
        {desc}{" "}
      </p>
      <a class="text_btn loading" href="/">
        {more}
      </a>
    </div>
  )
}

function Text(props) {
  return (
    <section id="textType" class={`text__wrap ${props.attr[0]} ${props.attr[1]}`}>
      <span>도와드릴게요.</span>
      <h2 class="mb70">#어느걸_찾으세요?</h2>
      <div class={`text__inner ${props.attr[2]}`}>
        {TextInfo.map((info, index) => (
          <TextDesc key={index} className = {info.className} title = {info.title} desc = {info.desc} more = {info.more} /> 
        ))}
      </div>
    </section>
  );
}

export default Text;
