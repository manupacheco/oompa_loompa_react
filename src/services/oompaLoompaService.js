import axios from 'axios'

class OompaLoompaService {
  constructor(){
    this.api = axios.create({
      baseURL: 'https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus',
    })
  }

  getOompaLoompas() {
    return this.api.get('oompa-loompas?page=1')
      .then(({data}) => data.results);
  }
}

const oompaLoompaService = new OompaLoompaService();

export default oompaLoompaService;