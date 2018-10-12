import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Detail extends Component {
  render() {
    return (
      <div>
        Detail
        <Link to='/'>Home</Link>
      </div>
    );
  }
}

export default Detail;
