import React, { useEffect } from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Route, Switch } from "react-router-dom";
import MainPage from "./main/main_page";
import Modal from "./modal/modal";
import Navbar from "./nav/navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Modal />
      <Switch>
        <Route exact path="/" component={MainPage} />
      </Switch>
    </>
    )
  };

export default App;
