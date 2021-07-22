import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Login_form = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  return <div> I am the login form</div>;
};

export default Login_form;
