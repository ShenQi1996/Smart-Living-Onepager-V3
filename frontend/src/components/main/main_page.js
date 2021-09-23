import React from "react";
import Session1 from "./session1/session1";
import Session2 from "./session2/session2";

const MainPage = props => {
  return (
    <div>
      <section>
        <Session1 />
      </section>
      <section>
        <Session2 />
      </section>
      <footer>Copyright &copy; 2021 Sam Qi</footer>
    </div>
  );
};

export default MainPage;
