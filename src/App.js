import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Detail from './pages/Detail';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Navbar></Navbar>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/detail' component={Detail}/>
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
