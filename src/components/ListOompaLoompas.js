import React, { Component } from 'react';
import oompaLoompaService from '../services/oompaLoompaService'
import { Link } from 'react-router-dom';

class ListOompaLoompas extends Component {

  state = {
    oompaLoompas: [],
    isLoading: true,
  }

  componentDidMount(){
    const cookies = document.cookie.search('list');
    const inStorage = JSON.parse(localStorage.getItem('list'));

    if(cookies === -1){
    oompaLoompaService.getOompaLoompas()
      .then((data) => {
        console.log(data)
        this.setState({
          oompaLoompas: data,
          isLoading: false,
        })
        localStorage.setItem('list', JSON.stringify(data));
        document.cookie = `list=true; max-age=86400`;
      })
    } else {
      console.log('desde storage')
      this.setState({
        oompaLoompas: inStorage,
        isLoading: false,
      })
    }
  }

  renderList = () => {
    return this.state.oompaLoompas.map(({ first_name, last_name, gender, image, profession, id}) =>
    <div className='col-md-4 col-sm-12' key={id}>
      <Link to={`/${id}`} className='card-link'>
        <img src={image} alt={last_name}/>
        <h3>{first_name} {last_name}</h3>
      </Link>
      <p>{gender==='F' ? 'Woman' : 'Men'}</p>
      <p>{profession}</p>
    </div>)
  }

  render() {
    return (
      <div className='row'>
          {this.state.isLoading ? <span>Loading...</span> : this.renderList()}
      </div>
    );
  }
}

export default ListOompaLoompas;
