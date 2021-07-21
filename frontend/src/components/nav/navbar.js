import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Navbar = props => {
  const dispatch = useDispatch();
  const loggedIn = useSelector(state => state.session.isAuthenticated);

  return <div>Navbar</div>;
};

export default Navbar;
