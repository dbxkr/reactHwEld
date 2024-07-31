import React, { useRef, useState } from "react";
import HeaderDetail from "./HeaderDetail";
import { Link } from "react-router-dom";

function Header() {
  const [show, setShow] = useState(false);
  const [details, setDetails] = useState([]);
  const timeoutRef = useRef(null);

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShow(false);
    }, 800); // 0.8초 후에 setShow(false) 실행
  };

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current); // setTimeout 취소
  };
  const menuItems = ["소형 무기", "대형 무기", "원거리 무기", "촉매", "방패"];
  const detailItems = [
    [
      "단검",
      "투척검",
      "직검",
      "자검",
      "곡검",
      "역수검",
      "도",
      "쌍날검",
      "도끼",
      "망치",
      "철퇴",
      "창",
      "채찍",
      "주먹",
      "격투",
      "손톱",
      "짐승 발톱",
      "조향병",
    ],
    [
      "경대검",
      "대검",
      "특대검",
      "대자검",
      "대곡검",
      "대형 도",
      "대형 도끼",
      "대형 망치",
      "특대형 무기",
      "대형 창",
      "도끼 창",
      "낫",
    ],
    ["소형 활", "활", "대궁", "석궁", "발리스타", "화살/볼트"],
    ["지팡이", "성인"],
    ["횃불", "소형 방패", "중형 방패", "대형 방패", "관통 방패"],
  ];

  return (
    <>
      <div
        className="w-full h-20 header flex z-10 fixed"
        onMouseMove={handleMouseEnter}
      >
        <div className="w-1/6 bg-red-600 h-full text-center content-center text-white">
          <Link to={"/"}>틈땅 스토어</Link>
        </div>
        <div className="w-5/6 h-full">
          <ul className="flex h-full">
            {menuItems.map((item, index) => (
              <li
                key={item}
                onMouseEnter={() => {
                  setShow(true);
                  setDetails(detailItems[index]);
                }}
                className="header-compo h-full flex-grow text-center content-center"
              >
                {item}
              </li>
            ))}
          </ul>
          <HeaderDetail
            show={show}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            details={details}
          />
        </div>
      </div>
    </>
  );
}

export default Header;
