import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Logo';

const StyledNavbar = styled.div`
  background-color: rgb(202, 202, 202);
  >div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

class Navbar extends Component {
  render() {
    return (
      <StyledNavbar>
        <div className='container'>
          <Link to='/'>
            <Logo/>
          </Link>
          <b>Oompa Loompa's Crew</b>
        </div>
      </StyledNavbar>
    );
  }
}

export default Navbar;
