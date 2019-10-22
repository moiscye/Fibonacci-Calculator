import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import OtherPage from "./OtherPage";
import Fib from "./Fib";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/">Home</Link>
        <Link to="/otherpage">Otherpage</Link>
      </header>
      <Router>
        <div className="App">
          <Route exact path="/" component={Fib}></Route>
          <Route path="/otherpage" component={OtherPage}></Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
