const urlApi = 'http://api.linkpreview.net/?key=5b715cee99f3e066e25a0712b306a9b95230f6ec4a051&q=';

export default function fetchData(url) {
  return fetch(urlApi + url)
    .then(response => {
      if (response.ok) return response.json();
      throw new Error(`ERROR: ${response.statusText}`);
    })
    .catch(err => console.log(err));
};


