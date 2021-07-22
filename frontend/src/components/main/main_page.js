import React from "react";
import { useDispatch } from "react-redux";

const MainPage = props => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>MetalMen</h1>
      <footer>Copyright &copy; 2021 The S&S Group</footer>
    </div>
  );
};

export default MainPage;
