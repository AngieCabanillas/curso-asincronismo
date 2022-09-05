import fetch from 'node-fetch';
const API = "https://api.escuelajs.co/api/v1";

//1 manera de declarar async
//funcion que trae peticiones
async function fetchData(urlApi){
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

//2 manera de declarar async
const otherFunction = async (urlApi) => {
    try {
        //empezamos a tomar los datos
        //1.obteniendo lista de productos
        const products = await fetchData(`${urlApi}/products`);
        //obteniendo 1 producto
        const product =  await fetchData(`${urlApi}/products/${products[0].id}`);
        //3.obtenieno categoria de ese producto
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);

        //imprime cada uno
        console.log(products);
        console.log(product.title);
        console.log(category.name);
    } catch (error) {
        console.log(error);
    }
}
otherFunction(API);



