import React, { Component } from 'react';
import oompaLoompaService from '../services/oompaLoompaService';

class Detail extends Component {

  state = {
    oompaLoompa: {},
    isLoading: true,
  }

  componentDidMount(){
    const {id} = this.props.match.params;
    const inStorage = JSON.parse(localStorage.getItem(id));
    const cookies = document.cookie.search(`.${id}=true`);
    console.log(document.cookie)
    
    if(document.cookie.length === 0){ //clean all storage
      console.log('clear storage')
      localStorage.clear();
    }

    if(cookies === -1){
      localStorage.removeItem(id)
      console.log('elimina storage y llamada API')
      oompaLoompaService.getOompaLoompa(id)
        .then(({data}) => {
            this.setState({
              oompaLoompa: data,
              isLoading: false,
            })
            localStorage.setItem(id, JSON.stringify(data));
            document.cookie = `.${id}=true; max-age=86400`;
          })
    } else {
      console.log('desde storage')
      this.setState({
        oompaLoompa: inStorage,
        isLoading: false,
      })
    }
  }

  renderInfo = () => {
    const { first_name, last_name, gender, profession, description, image } = this.state.oompaLoompa;
    return (
      <div className='row info'>
        <img src={image} className='col-md-8 col-sm-12' alt={last_name}/>
        <div className='col-md-4 col-sm-12 description'>
          <h3>{first_name} {last_name}</h3>
          <span>{gender==='F' ? 'Woman' : 'Men'}</span>
          <span>{profession}</span>
          <p>{description}</p>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className='container'>
        {this.state.isLoading ? <span>Loading...</span> : this.renderInfo()}
      </div>
    );
  }
}

export default Detail;
