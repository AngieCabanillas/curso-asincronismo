function suma(n1, n2){
    return n1 + n2;
}
function calculo(n1,n2,callback){
    return callback(n1,n2);

}
console.log(calculo(20,2,suma));
//
setTimeout(function(){  
    console.log('Hola JavaScript');
},5000)
function gretting(name){
    console.log(`Hola ${name}`);
}
setTimeout(gretting,2000,'Oscar');