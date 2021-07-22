import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, receiveErrors } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";

const Login_form = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const errors = useSelector(state => state.sessionError.sessionError);

  const isSignedIn = useSelector(state => state.session.isSignedIn);

  const [errored, setErrored] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {}, [errors]);

  useEffect(() => {
    return () => {
      dispatch(receiveErrors([]));
      setErrored(false);
    };
  }, [user]);

  useEffect(() => {
    if (errors) setErrored(true);
  }, [errors]);

  const handleInput = e => {
    const { name, value } = e.target;
    setUser(user => ({ ...user, [name]: value }));
    setErrored(false);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (errors.length === 0) {
      dispatch(login(user));
    }
  };

  const demoSubmit = () => {
    const demoUser = {
      email: "test@gmail.com",
      password: "123456789",
    };

    dispatch(login(demoUser)).then(dispatch(closeModal()));
  };

  const handleModal = e => {
    e.preventDefault();
    dispatch(openModal("Sign Up"));
  };

  if (isSignedIn) {
    dispatch(closeModal());
  }

  return (
    <div>
      <h1>Pleasse Sign In</h1>
      <div>
        <form>
          <label>
            Email:
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={handleInput}
              name="email"
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handleInput}
              name="password"
            />
            {errors.length > 0 && <li>{errors}</li>}
          </label>

          <button type="submit" onClick={handleSubmit}>
            Sign In
          </button>
        </form>
        <div>
          <span onClick={demoSubmit}>Continue with DemoUser</span>
          <span> / </span>
          <span onClick={handleModal}>Create an account </span>
        </div>
      </div>
    </div>
  );
};

export default Login_form;
