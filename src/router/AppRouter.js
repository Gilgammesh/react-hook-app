import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AboutScreen from "../components/09-useContext/AboutScreen";
import HomeScreen from "../components/09-useContext/HomeScreen";
import LoginScreen from "../components/09-useContext/LoginScreen";
import Screen404 from "../components/09-useContext/Screen404";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/home" component={HomeScreen} />
          <Route exact path="/about" component={AboutScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Route component={Screen404} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
