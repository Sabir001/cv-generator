import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingMain from "./components/landing-page/main";
import CreateCVForm from "./components/create-cv-form/CreateCVForm";
import Templates from "./components/templates/templates";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <LandingMain />
      </Route>
      <Route path="/create">
        <CreateCVForm />
      </Route>
      <Route path="/templates">
        <Templates />
      </Route>
    </Switch>
  );
}

export default App;