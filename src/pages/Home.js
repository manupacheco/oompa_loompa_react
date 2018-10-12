import React, { Component } from 'react';
import ListOompaLoompas from '../components/ListOompaLoompas'

class Home extends Component {
  render() {
    return (
      <div className='container'>
        <input></input>
        <h1>Find your Oompa Loompa</h1>
        <h2>There are more than 100k</h2>
        <ListOompaLoompas></ListOompaLoompas>
      </div>
    );
  }
}

export default Home;
