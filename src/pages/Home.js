import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <input></input>
        <h1>Find your Oompa Loompa</h1>
        <h2>There are more than 100k</h2>
      </div>
    );
  }
}

export default Home;
