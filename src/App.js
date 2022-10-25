import React from "react";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Slider from "./components/section/Slider";
import Image from "./components/section/Image";
import ImageText from "./components/section/ImageText";
import Card from "./components/section/Card";
import Banner from "./components/section/Banner";
import Text from "./components/section/Text";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      {/* 컴포넌트 */}
      <Header fonts="nexon" />
      <Main>
        <Slider />
        <Image attr={["section", "nexon", "container"]} />
        <ImageText
          attr={["nexon", "section", "gray", "baegopa", "container"]}
        />
        <Card attr={["section", "nexon", "container"]} />
        <Banner fonts="nexon" />
        <Text attr={["section", "nexon", "container"]} />
      </Main>
      <Footer attr={["section", "nexon", "gray", "container"]} />
    </>
  );
}

export default App;
