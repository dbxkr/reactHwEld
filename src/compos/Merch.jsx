import React from "react";

function Merch({ wName, index }) {
  return (
    <div className="merch-body">
      <img src={"/img/w-1-1/w-1-1-" + index + ".png"} />
      {wName}
      <div>15000 Rune</div>
    </div>
  );
}

export default Merch;
