import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Detail from './pages/Detail';

const GlobalStyle = createGlobalStyle`
  .container{
    display: flex;
    flex-direction: column;
  }
`;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <GlobalStyle/>
          <Navbar></Navbar>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/:id' component={Detail}/>
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
