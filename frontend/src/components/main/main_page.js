import React from "react";
import Session1 from "./session1/session1";
import Session2 from "./session2/session2";
import Session3 from "./session3/session3";
import Session4 from "./session4/session4";
const MainPage = props => {
  return (
    <div>
      <section id="session1">
        <Session1 />
      </section>
      <section id="session2">
        <Session2 />
      </section>
      <section id="session3">
        <Session3 />
      </section>
      <section id="session4">
        <Session4 />
      </section>
      <footer className="main_footer">Copyright &copy; 2021 Sam Qi</footer>
    </div>
  );
};

export default MainPage;
