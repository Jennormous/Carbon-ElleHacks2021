import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/Homepage";
import Inventory from "./components/InventoryList";

import Recipes from "./components/Recipes";

export default function App() {
  return (
    
    <div className="body">
      <Header />
      <Switch>
        <Route path="/" exact render={props => <HomePage {...props} />} />
        <Route path="/grocery" render={props => <Inventory {...props} />} />
        <Route path="/recipe" render={props => <Recipes {...props} />} />
      </Switch>
    </div>
  );
}
