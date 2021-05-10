import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/portfolio' exact component={Cards} />
        <Route path='/about' exact component={Footer} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
