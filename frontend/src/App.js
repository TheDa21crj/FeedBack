import React, { createContext } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Registration from "./Pages/Registration";
import Login from "./Pages/Login";
import Contact from "./Pages/Contact";
import Logout from "./Pages/Logout";
import Error_404 from "./Pages/Error_404";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Registration />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route path="">
            <Error_404 />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
