import React from "react";
// import { Router } from "@reach/router";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Routes from './Routes';

function App() {
  return (
    <div className="flexible-content">
      <main id="content" className="p-5">
        <Router>
          <div>
            <Routes />
          </div>
        </Router>
      </main>
    </div>
  );
}export default App;