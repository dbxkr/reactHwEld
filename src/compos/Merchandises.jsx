import React from "react";
import Merch from "./Merch";

function Merchandises() {
  const wName = [
    "투사의 대형 도끼 (Duelist Greataxe)",
    "부패한 대형 도끼 (Rotten Greataxe)",
    "골렘의 도끼창 (Golem's Halberd)",
    "거인 부수기 (Giant-Crusher)",
    "주교의 대형 화염 망치 (Prelate's Inferno Crozier)",
    "그레이트 클럽 (Great Club)",
    "트롤 해머 (Troll's Hammer)",
    "대룡조 (Dragon Greatclaw)",
    "혈귀의 팔 (Bloodfiend's Arm)",
    "파수견의 석장 (Watchdog's Staff)",
    "화신의 의장 (Staff of the Avatar)",
    "부패한 의장 (Rotten Staff)",
    "사자들의 부채피리 (Envoy's Greathorn)",
    "기자의 수레바퀴 (Ghiza's Wheel)",
    "성수의 턱 (Fallingstar Beast Jaw)",
    "모루 해머 (Anvil Hammer)",
    "데보니아의 대형 망치 (Devonia's Hammer)",
    "고드프리의 왕 도끼 (Axe of Godfrey)",
    "큰 영륜초 꽃 (Shadow Sunflower Blossom)",
    "바라보는 손가락 (Gazing Finger)",
  ];
  return (
    <div className="flex-co top-52 relative">
      <div className=" text-center">
        <h1 style={{ fontSize: "30px" }}>특대형 무기</h1>
        지금 DB가 없어서 뭘 눌러도 특대형 무기로만 이동합니다
      </div>
      <div className="merch-container">
        {wName.map((item, index) => (
          <Merch wName={item} key={index} index={index + 1} />
        ))}
      </div>
    </div>
  );
}

export default Merchandises;
