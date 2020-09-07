import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AgentPage from "./pages/AgentPage";
import PricingPage from "./pages/PricingPage";

const App = () => {
  return (
    <div>
      <Header />

      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/agent" exact>
          <AgentPage />
        </Route>
        <Route path="/pricing" exact>
          <PricingPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
