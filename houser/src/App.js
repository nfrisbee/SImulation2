import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Wizard from './Components/Wizard/Wizard';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import route from './route';

class App extends Component {
  render() {
    return (
      <div>
        { route }
      </div>
    );
  }
}

export default App;
