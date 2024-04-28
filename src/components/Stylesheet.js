import React from "react";
import "./mystyles.css";

function Stylesheet(props) {
  let styleName = props.primary ? "primary" : " ";
  return (
    <div>
      <h1 className={`${styleName} font-xl`}>Stylesheet</h1>
    </div>
  );
}

export default Stylesheet;
