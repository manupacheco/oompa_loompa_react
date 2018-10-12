import React, { Component } from 'react';
import oompaLoompaService from '../services/oompaLoompaService'

class ListOompaLoompas extends Component {

  state = {
    oompaLoompas: [],
    isLoading: true,
  }

  componentDidMount(){
    oompaLoompaService.getOompaLoompas()
      .then((data) => {
        console.log(data)
        this.setState({
          oompaLoompas: data,
          isLoading: false,
        })
      })
  }

  renderList = () => {
    return this.state.oompaLoompas.map(({ first_name, last_name, gender, image, profession, id}) =>
    <div key={id}>
      <img src={image} alt={last_name}/>
      <h3>{first_name} {last_name}</h3>
      <p>{gender==='F' ? 'Woman' : 'Men'}</p>
      <p>{profession}</p>
    </div>)
  }

  render() {
    return (
      <div>
          {this.state.isLoading ? <span>Loading...</span> : this.renderList()}
      </div>
    );
  }
}

export default ListOompaLoompas;
