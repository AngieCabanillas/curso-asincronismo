// llamar a xmlhttprequest para poder usarlo
// const XMLHttpRequest = require("xmlhttprequest");

// llamar a API generando variable(generando referencia al root de la API)
// const API = "https://ap.escuelajs.so/api/v1";

// funcion para recibir URL y callback
// function fetchData(urlApi, callback) {
//   let xhttp = XMLHttpRequest();
//   xhttp.open("GET", urlApi, true); //abrir conexion con API
//   xhttp.onreadystatechange = function (event) {
//     if (xhttp.readychange === 4) {
//       validando que se completó solicitud
//       if (xhttp.status === 200) {
//         validando si la solicitud fue satisfactoria
//         convirtiendo la respuesta de la solicitud a formato json
//         callback(null, JSON.parse(xhttp.responseText));
//       }
//     } else {
//       const error = new Error("Error" + urlApi);
//       return callback(error, null);
//     }
//   };
//   xhttp.send(); //escuchar estados de la solicitud
// }

// llamar a xmlhttprequest para poder usarlo
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// llamar a API generando variable(generando referencia al root de la API)
const API = "https://api.escuelajs.co/api/v1";

// funcion para recibir URL y callback
function fetchData(urlApi, callback) {
  let xhttp = new XMLHttpRequest();//inicializar un objeto de tipo XMLHttpRequest
  //El metodo .open realiza la petición de apertura de comunicación, el metodo puede ser 'GET' o 'POST', luego se envia la URL, si es asincrono (true o false), usuario y contraseña. En esta caso solo se utiliza el metodo, la url y async
  xhttp.open("GET", urlApi, true);//abrir conexion con API
  
   //Almacena el nombre de la función que se ejecutará cuando el objeto XMLHttpRequest cambie de estado
   //Manejador del evento que se dispara el evento 
  xhttp.onreadystatechange = function (event) {
    if (xhttp.readyState === 4) {//solicitud completa
    //validando que se completó solicitud
      if (xhttp.status === 200) {//validando codigo de estado de la solicitud
        //validando si la solicitud fue satisfactoria convirtiendo la respuesta de la solicitud a formato json
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error("Error" + urlApi);
        return callback(error, null);
      }
    }
  };
  //envía la solicitud al servidor.
  xhttp.send();//escuchar estados de la solicitud
}
//se invoca el metodo fetchData() pasandole como argumentos la varible API concatenada con la cadena 'products' para acceder a la URL de la API deseada, y una función anónima que recibe 2 parámetros (un objeto de error y un arreglo que almacena todos los objetos traidos por la API).

fetchData(`${API}/products`, function (error1, data1) {
    //se valida si existe un error, en caso de que exista se detiene el proceso y se imprime el error
    if (error1) return console.error(error1);
    //se invoca nuevamente la función fetchData con el fin de acceder a un objeto puntual del arreglo data1, se envia como parámetros la url de la API apuntando al atributo del primer objeto de arreglo data1 y nuevamente una función anónima.
    fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) {
        if (error2) return console.error(error2);
        //Se invoca nuevamente la funcion fetchData con el fin de acceder a la categoria, se envían como parametros la url de la API con la concatenación de 'Categories' y el atributo Id de categoria del objeto data2 de la función anterior
        //en este caso puntual se hace uso de Optional Caining el cual hace una evaluación de las propiedades de un objeto y en vez de arrojar un error devuelve undefined en caso que la propiedad no exista o sea null.
        //igual que las anteriores se envia una funcion anonima con 2 argumentos, un objeto Error y un objeto de datos
        fetchData(
        `${API}/categories/${data2?.category?.id}`,
        function (error3, data3) {
            if (error3) return console.error(error3);
            //Se imprime el objeto en la posición 1 del arreglo de los objetos obtenidos en el metodo invocado inicialmente
            console.log(data1[0]);
            //Se imprime el titulo del objeto que se consultó en la seguna invocación de la función
            console.log(data2.title);
            //Se imprime el nombre de la categoria a la que pertenece el objeto que se consultó en la seguna invocación del método.
            console.log(data3.name);
        }
        );
    });
});

