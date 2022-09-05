//asyn: cuerpo de nustra funcion
//await: dentro de la logica
const fnAsync = () => {
    return new Promise((resolve, reject) => {
      (true)
        ? setTimeout(() => resolve('Async!!'), 2000)//recibe 1 funcion y el tiempo
        : reject(new Error('Error!'));
    });
  }
  //async devuelve una promesa
  const anotherFn = async () => {
    const something = await fnAsync();//devuelve promesa que se almacena en something
    console.log(something);//imprime promesa
    console.log('Hello!');
  }
  
  console.log('Before');
  anotherFn();
  console.log('After');

//creamos variable que almacene una funcion
const functionAsync = () => {
    return new Promise((resolve,reject) => {
        //if ternario
        (true)
        ? setTimeout(() => {
            resolve('async!')
        }, 2000)
        : reject(new Error('Error'));
    });
}

//crear otra funcion donde use functionAsync y es de tipo async
const anotherFunction = async()=>{//devuelve objeto AsyncFunction
    //regresa promesa
    const algo = await functionAsync();//devuelve promesa y await espera hasta que la promesa functionAsync se cumpla
    console.log(algo);
    console.log('Holi');
}

console.log('antes');
anotherFunction();
console.log('Después');