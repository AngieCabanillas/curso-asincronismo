//declarar promesa
const promise = new Promise(function (resolve, reject){
    resolve('hey');
});

const cows=25;

const countCows = new Promise(function(resolve, reject){
    if(cows>10){
        resolve("Hay suficientes vacas");//siempre concatenar con comillas dobles
    } else{
        reject("No hay suficientes vacas");//siempre concatenar con comillas dobles
    }
});

//ejecutando promesa
countCows.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log('Finalizó');
});
