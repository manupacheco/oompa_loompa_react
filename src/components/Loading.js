import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components'
import Logo from './Logo'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const rotate360 = keyframes `
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Rotate = styled.div `
  display: inline-block;
  animation: ${rotate360} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

class Loading extends Component {
  render() {
    return (
      <Wrapper>
        <Rotate>
          <Logo />
        </Rotate>
        <p>Loading...</p>
      </Wrapper>
    );
  }
}

export default Loading;
