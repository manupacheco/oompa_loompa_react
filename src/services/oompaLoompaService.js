import axios from 'axios'

class OompaLoompaService {
  constructor(){
    this.api = axios.create({
      baseURL: 'https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas',
    })
  }

  getOompaLoompas() {
    return this.api.get('?page=1')
      .then(({data}) => data.results);
  }

  getOompaLoompa(id) {
    return this.api.get(`/${id}`);
  }
}

const oompaLoompaService = new OompaLoompaService();

export default oompaLoompaService;