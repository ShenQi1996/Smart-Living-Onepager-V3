import React, { useState } from "react";

const NavPages = props => {
  let content = "";
  switch (props.page) {
    case 1:
      content = (
        <div className="Nav_bar_page1">
          <h1>Property Development</h1>
        </div>
      );
      break;
    case 2:
      content = (
        <div className="Nav_bar_page2">
          <h1>Property Development</h1>
        </div>
      );
      break;
    default:
      content = (
        <div className="Nav_bar_page0">
          <h1>Property Development</h1>
        </div>
      );
  }
  return <div className="Nav_bar_container">{content}</div>;
};

export default NavPages;
