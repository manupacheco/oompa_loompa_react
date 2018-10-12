import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Navbar extends Component {
  render() {
    return (
      <div className='Navbar'>
        <div className='container'>
          <Link to='/'>
            <img src='https://s3.eu-central-1.amazonaws.com/napptilus/level-test/imgs/logo-umpa-loompa.png' className='logo' alt='logo'/>
          </Link>
          <b>Oompa Loompa's Crew</b>
        </div>
      </div>
    );
  }
}

export default Navbar;
