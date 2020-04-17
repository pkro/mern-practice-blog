import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Article from './pages/Article';
import ArticleList from './pages/ArticleList';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="app">
        <div id="page-body">
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={About} />
          <Route path="/article/:id" component={Article} />
          <Route path="/articles" component={ArticleList} />
        </div>
      </div>
    </Router>
  );
}

export default App;
