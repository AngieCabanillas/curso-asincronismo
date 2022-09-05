import fetch from 'node-fetch';//impportando fetch
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlAPI){
    return fetch(urlAPI);
};

// fetchData(`${API}/products`)
// .then(response => response.json())
// .then(products => {
//     console.log(products);
// })
// .catch(error => {
//     console.log(error);
// });

//retornando los 3 valores
fetchData(`${API}/products`)
.then(response => response.json())
.then(products => {
    console.log(products);
    return fetchData(`${API}/products/${products[0].id}`)//devuelve producto con ese id
})
.then(response => response.json())
.then(product => {
    console.log(product.title);
    return fetchData(`${API}/categories/${product.category.id}`)
})
.then(response => response.json())
.then(category=>{
    console.log(category.name);
    console.log(category.image);
})
.catch(error => console.log(error))
.finally(()=>console.log('Se terminó'))