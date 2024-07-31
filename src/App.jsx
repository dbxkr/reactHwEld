import { useState } from "react";
import "./App.css";
import ImageSlider from "./compos/ImgSlider";
import Recommend from "./compos/Recommend";

function App() {
  return (
    <div className="flex-co top-52 relative">
      <ImageSlider />
      <div className="flex-col">
        <Recommend
          title={"출혈 빌드 추천 무기"}
          itemList={[
            "혈귀의 팔 (Bloodfiend's Arm)",
            "주교의 대형 화염 망치 (Prelate's Inferno Crozier)",
          ]}
          itemNos={[8, 5]}
        />
        <Recommend
          title={"근력 빌드 추천 무기"}
          itemList={[
            "거인 부수기 (Giant-Crusher)",
            "그레이트 클럽 (Great Club)",
          ]}
          itemNos={[4, 6]}
        />
        <Recommend
          title={"특수 전회 추천 무기"}
          itemList={[
            "파수견의 석장 (Watchdog's Staff)",
            "화신의 의장 (Staff of the Avatar)",
            "기자의 수레바퀴 (Ghiza's Wheel)",
            "사자들의 부채피리 (Envoy's Greathorn)",
          ]}
          itemNos={[10, 11, 13, 14]}
        />
      </div>
    </div>
  );
}

export default App;
