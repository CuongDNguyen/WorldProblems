// src/App.js

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProblemsPage from "./pages/ProblemsPage";
import Problem from "./components/Problem";
import ProblemsList from "./components/ProblemList";

function App() {

  return (
    <div className="App">
      <ProblemsPage />
      <ProblemsList />
      {/* New - use BrowserRouter to provide access to /profile
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Problem}/>
          <Route path="/problem" component={Problem} />
          <Route path="/problems" component={ProblemsPage} />
        </Switch>
      </BrowserRouter> */}

    </div>
  );
}

export default App;