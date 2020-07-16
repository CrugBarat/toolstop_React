import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './views/Home.js';
import Top40 from './views/Top40.js';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/top-40-sellers">
          <Top40 />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
