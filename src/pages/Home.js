import React, { Component } from 'react';
import oompaLoompaService from '../services/oompaLoompaService';
import { TitleOne, TitleTwo } from '../components/Titles';
import SearchInput from '../components/SearchInput';
import CardList from '../components/CardList';

class Home extends Component {
 
  state = {
    serverOompaLoompas: [], 
    oompaLoompas: [],
    isLoading: true,
  }
  page = 1;

  componentDidMount(){
    const cookies = document.cookie.indexOf(`list${this.page}`);
    const inStorage = JSON.parse(localStorage.getItem(`list${this.page}`));

    if (document.cookie.length === 0) { //clean all storage
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
    const cookies = document.cookie.indexOf(`list${this.page}`);
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
    return this.state.oompaLoompas.map((oompa) =>
      <CardList oompa={oompa} key={oompa.id}/>)
  }

  render() {
    return (
      <div className='container'>
        <SearchInput type='search' id='search' placeholder="Search" onChange={this.search}></SearchInput>
        <TitleOne>Find your Oompa Loompa</TitleOne>
        <TitleTwo>There are more than 100k</TitleTwo>
        <div className='row'>
          {this.state.isLoading ? <span>Loading...</span> : this.renderList()}
        </div>
      </div>
    );
  }
}

export default Home;
