import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop/hats" component={HatsPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
