//importar fetch
import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data) {
    //recibe urlApi y un objeto donde estara toda la configuracion de la data
    const response = fetch(urlApi, {//usando metodo fetch
    method: 'POST',//debe ir en mayusculas la peticion
    mode: 'cors',//permisos que tiene, por defecto:cors
    credentials: 'same-origin',
    headers: {//como se hace peticion mediante consola, se debe especificar formato
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)//convertir json a string
  });
  return response;
}

const data = {
  "title": "212",
  "price": 212,
  "description": "A description",
  "categoryId": 1,
  "images": [
    "https://placeimg.com/640/480/any"
  ]
}

postData(`${API}/products`, data)
  .then(response => response.json())
  .then(data => console.log(data));

