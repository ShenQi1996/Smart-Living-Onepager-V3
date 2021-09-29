import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/session_actions";
import { openModal } from "../../actions/modal_actions";
import NavPages from "./nav_pages/nav_pages";

const Navbar = props => {
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
  const loggedIn = useSelector(state => state.session.isAuthenticated);

  const handleModal = e => {
    e.preventDefault();
    dispatch(openModal(e.target.innerText));
  };

  const logoutUser = e => {
    e.preventDefault();
    dispatch(logout());
  };

  let signIn;
  let slide;
  if (page < 0 || page > 2) {
    setPage(0);
  }
  switch (page) {
    case 1:
      slide = (
        <div>
          <NavPages page={page} />
          <div className="Nav_bar_bottom">
            <h1>{page}</h1>
            <p>
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested. Sections
            </p>
            <div className="Nav_bar_button">
              <button
                className="Nav_bar_button1"
                onClick={() => setPage(page + 1)}
              >
                +
              </button>
              <button
                className="Nav_bar_button2"
                onClick={() => setPage(page - 1)}
              >
                -
              </button>
            </div>
          </div>
        </div>
      );
      break;
    case 2:
      slide = (
        <div>
          <NavPages page={page} />
          <div className="Nav_bar_bottom">
            <h1>{page}</h1>
            <p>
              Desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
            <div className="Nav_bar_button">
              <button
                className="Nav_bar_button1"
                onClick={() => setPage(page + 1)}
              >
                +
              </button>
              <button
                className="Nav_bar_button2"
                onClick={() => setPage(page - 1)}
              >
                -
              </button>
            </div>
          </div>
        </div>
      );
      break;
    default:
      slide = (
        <div>
          <NavPages page={page} />
          <div className="Nav_bar_bottom">
            <h1>{page}</h1>
            <p>
              Web sites still in their infancy. Various versions have evolved
              over the years
            </p>
            <div className="Nav_bar_button">
              <button
                className="Nav_bar_button1"
                onClick={() => setPage(page + 1)}
              >
                +
              </button>
              <button
                className="Nav_bar_button2"
                onClick={() => setPage(page - 1)}
              >
                -
              </button>
            </div>
          </div>
        </div>
      );
  }

  if (loggedIn) {
    signIn = (
      <div>
        <button onClick={logoutUser}>Sign Out</button>
      </div>
    );
  } else {
    signIn = (
      <div>
        <a href="#" target="_blank"></a>
        <button onClick={handleModal}>Sign In</button>
        <button onClick={handleModal}>Sign Up</button>
      </div>
    );
  }

  return (
    <div className="Nav_bar_outter">
      <div>
        <div>{slide}</div>
        <div className="Nav_bar_signIn">
          <h1>Join Us Today</h1>
          {signIn}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
