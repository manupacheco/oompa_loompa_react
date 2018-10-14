import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div.attrs({
  className: 'col-md-4 col-sm-12',
})`
  display: flex;
  flex-direction: column;
  line-height:1.5;
  margin-top: 50px;
  >#link {
    text-decoration: none;
    color: black;
    overflow: hidden;
    :hover { color: #00a6e7; };
    >img { 
      width: 100%;
      margin: -30px 2px;
      margin-bottom: 20px;
    }
    >b { font-size: 20px }
  }
  >span { color: #969696; }
  >#profession { font-style: italic; }
`;

class CardList extends Component {
  render() {
    const { first_name, last_name, gender, image, profession, id } = this.props.oompa
    return (
      <Card>
        <Link to={`/${id}`} id='link'>
          <img src={image} alt={last_name}/>
          <b>{first_name} {last_name}</b>
        </Link>
        <span>{gender==='F' ? 'Woman' : 'Men'}</span>
        <span id='profession'>{profession}</span>
      </Card>
    );
  }
}

export default CardList;
