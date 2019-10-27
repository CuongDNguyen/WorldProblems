// src/App.js

import React from "react";
import { useAuth0 } from "./react-auth0-spa";
import SignInSide from "./pages/SignInSide";

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <div className="App">
      <header>
        <SignInSide />
      </header>
    </div>
  );
}

export default App;