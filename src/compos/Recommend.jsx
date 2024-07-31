import React from "react";
import Merch from "./Merch";
import { Link } from "react-router-dom";

function Recommend({ title, itemList, itemNos }) {
  return (
    <div className="w-4/5 recommend-body">
      <div className="recommend-title">{title}</div>
      {/* <Link to="test">테스트 페이지</Link> */}
      <div className="flex gap-3">
        {itemList.map((item, index) => (
          <Merch wName={item} key={index} index={itemNos[index]} />
        ))}
      </div>
    </div>
  );
}

export default Recommend;
