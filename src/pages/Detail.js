import React, { Component } from 'react';
import oompaLoompaService from '../services/oompaLoompaService'

class Detail extends Component {

  state = {
    oompaLoompa: {},
    isLoading: true,
  }

  componentDidMount(){
    const {id} = this.props.match.params;
    oompaLoompaService.getOompaLoompa(id)
      .then(({data})=>{
        console.log(data)
        this.setState({
          oompaLoompa: data,
          isLoading: false,
        })
      })
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
