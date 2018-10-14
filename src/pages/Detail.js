import React, { Component } from 'react';
import styled from 'styled-components';
import dataStore from '../helpers/dataStore';
import Loading from '../components/Loading'
import oompaLoompaService from '../services/oompaLoompaService';

const Info = styled.div.attrs({
  className: 'row',
})`
  padding: 60px 0px;
  >img {
    width: 100%;
    height: 100%;
  }
  >div { 
    display: flex;
    flex-direction: column;
    line-height: 1.5;
    >b { font-size: 20px }
    >span { color: #969696; }
    >#profession { font-style: italic; }
  }
`;

class Detail extends Component {

  state = {
    oompaLoompa: {},
    isLoading: true,
  }

  componentDidMount(){
    const {id} = this.props.match.params;
    const cookies = dataStore.searchCookie(`.${id}=`);
    const inStorage = dataStore.searchLocalStorage(id);
     
    if(document.cookie.length === 0){ //clean all storage
      localStorage.clear();
    }

    if(cookies === -1){
      localStorage.removeItem(id)
      oompaLoompaService.getOompaLoompa(id)
        .then(({data}) => {
            this.setState({
              oompaLoompa: data,
              isLoading: false,
            })
            dataStore.createStorage(id, data);
          })
    } else {
      this.setState({
        oompaLoompa: inStorage,
        isLoading: false,
      })
    }
  }

  renderInfo = () => {
    const { first_name, last_name, gender, profession, description, image } = this.state.oompaLoompa;
    return (
      <Info>
        <img src={image} className='col-md-8 col-sm-12' alt={last_name}/>
        <div className='col-md-4 col-sm-12'>
          <b>{first_name} {last_name}</b>
          <span>{gender==='F' ? 'Woman' : 'Men'}</span>
          <span id='profession'>{profession}</span>
          <p dangerouslySetInnerHTML={{__html: description}}></p>
        </div>
      </Info>
    )
  }

  render() {
    return (
      <div className='container'>
        {this.state.isLoading ? <Loading/> : this.renderInfo()}
      </div>
    );
  }
}

export default Detail;
