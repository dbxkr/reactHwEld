import React, { useRef } from "react";
import { Link } from "react-router-dom";

function HeaderDetail({ details, show, handleMouseEnter, handleMouseLeave }) {
  return (
    <div
      className={show ? "detail-info info-show" : "detail-info"}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ul className="flex gap-4">
        {details.map((item) => (
          <li key={item}>
            <Link to={"/weapon/1/1"}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HeaderDetail;
