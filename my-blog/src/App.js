import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Article from './pages/Article';
import Articles from './pages/Articles';
import Navbar from './layout/Navbar';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="app">
        <div id="page-body">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={About} />
            <Route path="/articles" component={Articles} />
            <Route path="/article/:name" component={Article} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
