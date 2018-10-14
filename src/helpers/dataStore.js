class DataStore {
  
  searchCookie(item){
    return document.cookie.indexOf(item)
  }
  
  searchLocalStorage(item){
    return JSON.parse(localStorage.getItem(item))
  }

  createStorage(id, data){
    localStorage.setItem(id, JSON.stringify(data));
    document.cookie = `.${id}=; max-age=86400`;
  }
}

const dataStore = new DataStore();

export default dataStore;