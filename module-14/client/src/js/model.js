import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

export default class Model {
  constructor(items = []) {
    this.items = items;
  }

  addData(text) {
    const item = { text };
    return axios.post('/notes', item)
      .then(response => {
        this.items.push(response.data);
        return response.data;
      });
  }

  removeData(id) {
    return axios.delete(`/notes/${id}`)
      .then(response => {
        if (response.status === 200) {
          this.items = this.items.filter(item => item.id !== id);
          return id;
        }
      });
  }

  fetchDataInitStory() {
    return axios.get('/notes').then(response => response.data);
  }
}
