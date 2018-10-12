import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Navbar extends Component {
  render() {
    return (
      <div className='Navbar'>
        <Link to='/'>
          <img src='https://s3.eu-central-1.amazonaws.com/napptilus/level-test/imgs/logo-umpa-loompa.png' alt='logo'/>
        </Link>
        Oompa Loompa's Crew
      </div>
    );
  }
}

export default Navbar;
