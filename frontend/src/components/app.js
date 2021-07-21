import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";

import MainPage from "./main/main_page";
import Modal from "../components/modal/modal";
import Navbar from "../components/nav/navbar";

const App = () => (
  <>
    <Navbar />
    <Modal />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
    </Switch>
  </>
);

export default App;
