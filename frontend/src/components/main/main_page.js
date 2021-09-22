import React from "react";
import { useDispatch } from "react-redux";

const MainPage = props => {
  const dispatch = useDispatch();

  return (
    <div>
      <section>
        <h1>Home Page</h1>
      </section>
      <footer>Copyright &copy; 2021 Sam Qi</footer>
    </div>
  );
};

export default MainPage;
