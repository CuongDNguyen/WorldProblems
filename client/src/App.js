// src/App.js

import React from "react";
import ProblemsPage from "./pages/ProblemsPage";

function App() {

  return (
    <div className="App">
      <ProblemsPage />
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