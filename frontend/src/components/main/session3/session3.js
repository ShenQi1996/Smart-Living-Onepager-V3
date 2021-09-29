import React, { useState } from "react";

const Session3 = props => {
  const [page, setPage] = useState(0);

  if (page > 2 || page < 0) {
    setPage(0);
  }

  let pics;

  switch (page) {
    case 2:
      pics = <div className="Session3_inner_box1_pic2"></div>;
      break;
    case 1:
      pics = <div className="Session3_inner_box1_pic1"></div>;
      break;
    default:
      pics = <div className="Session3_inner_box1_pic0"></div>;
  }

  return (
    <div className="Session3_outter">
      <div className="Session3_inner_box1">{pics}</div>
      <div className="Session3_inner_box2">
        <div className="Session3_inner_box2_container1">
          <h1>4</h1>
          <h2> Our Projects</h2>
          <p>
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested.
          </p>
        </div>
        <div className="Session3_inner_box2_container2">
          <button
            className="Session3_inner_box2_container2_button1"
            onClick={() => setPage(page + 1)}
          >
            +
          </button>
          <button
            className="Session3_inner_box2_container2_button2"
            onClick={() => setPage(page - 1)}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default Session3;
