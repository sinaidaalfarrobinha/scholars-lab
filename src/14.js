
// Scholars-Lab Code Sample
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import NoMatch from './components/NoMatch';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NoMatch} />
      </div>
    </Router>
  );
}

export default App;