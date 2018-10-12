import React, { Component } from 'react';
import '../App.css';

class Navbar extends Component {
  render() {
    return (
      <div className='Navbar'>
        <img src='https://s3.eu-central-1.amazonaws.com/napptilus/level-test/imgs/logo-umpa-loompa.png' alt='logo'/>
        Oompa Loompa's Crew
      </div>
    );
  }
}

export default Navbar;
