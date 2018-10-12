import React, { Component } from 'react';
import oompaLoompaService from '../services/oompaLoompaService'
import { Link } from 'react-router-dom';

class Home extends Component {
 
  state = {
    serverOompaLoompas: [], 
    oompaLoompas: [],
    isLoading: true,
  }
  page = 1;

  componentDidMount(){
    const cookies = document.cookie.search(`list${this.page}`);
    const inStorage = JSON.parse(localStorage.getItem(`list${this.page}`));

    if (document.cookie.length === 0) { //clean all storage
      console.log('clear storage')
      localStorage.clear();
    }

    if(cookies === -1){
      this.getOompaLoompas(this.page)
    } else {
      console.log('desde storage')
      this.setState({
        serverOompaLoompas: inStorage,
        oompaLoompas: inStorage,
        isLoading: false,
      })
    }

    document.onscroll = (e) => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight-0.5) {
        if (window.location.pathname === '/') {
        this.scrollList()
        }
      }
    }
  }

  getOompaLoompas = (page) => {
    console.log('llamada api')
    oompaLoompaService.getOompaLoompas(page)
      .then((data) => {
        if(this.page > 1){
          this.setState({
            serverOompaLoompas: this.state.serverOompaLoompas.concat(data),
            oompaLoompas: this.state.serverOompaLoompas.concat(data),
          })
          localStorage.setItem(`list${this.page}`, JSON.stringify(data));
          document.cookie = `list${this.page}=; max-age=86400`;
        } else {
          console.log(data)
          this.setState({
            serverOompaLoompas: data,
            oompaLoompas: data,
            isLoading: false,
          })
          localStorage.setItem(`list${this.page}`, JSON.stringify(data));
          document.cookie = `list${this.page}=; max-age=86400`;
        }
      })
  }

  search = (e) =>{
    const {serverOompaLoompas} = this.state; 
    const updateList = serverOompaLoompas.filter((oompa)=>{
      return oompa.first_name.toLowerCase().search(
        e.target.value.toLowerCase()) !== -1 || 
      oompa.last_name.toLowerCase().search(
        e.target.value.toLowerCase()) !== -1 ||
      oompa.profession.toLowerCase().search(
        e.target.value.toLowerCase()) !== -1;
    });
    this.setState({
      oompaLoompas: updateList,
    })
  }

  scrollList = () => {
    this.page++;
    const cookies = document.cookie.search(`list${this.page}`);
    const inStorage = JSON.parse(localStorage.getItem(`list${this.page}`));

    if (cookies === -1) {
      this.getOompaLoompas(this.page)
    } else {
      console.log('desde storage')
      this.setState({
        serverOompaLoompas: this.state.serverOompaLoompas.concat(inStorage),
        oompaLoompas: this.state.oompaLoompas.concat(inStorage),
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
      <div className='container'>
        <input type="text" className="" placeholder="Search" onChange={this.search}/>
        <h1>Find your Oompa Loompa</h1>
        <h2>There are more than 100k</h2>
        <div className='row'>
          {this.state.isLoading ? <span>Loading...</span> : this.renderList()}
        </div>
      </div>
    );
  }
}

export default Home;
