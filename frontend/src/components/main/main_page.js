import React from "react";
import { openModal } from "../../actions/modal_actions";
import { useDispatch } from "react-redux";

const MainPage = props => {
  const dispatch = useDispatch();

  const handleModal = e => {
    e.preventDefault();
    dispatch(openModal("sign in"));
  };

  return (
    <div>
      <h1>MetalMen</h1>
      <button onClick={handleModal}>Click Me !!</button>
      <footer>Copyright &copy; 2021 The S&S Group</footer>
    </div>
  );
};

export default MainPage;
