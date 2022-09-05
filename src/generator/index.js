function* gen(){
    yield 1;//palabra revservada para iteraciones
    yield 2;
    yield 3;
}

const g = gen();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

function* gen(array){
    for (let value of array) {
        yield value;
    }
}

const y = gen(['Angie', 'Alessio','Rosa','Carlos']);
console.log(y.next().value);
console.log(y.next().value);
console.log(y.next().value);

const yo = gen('Angie', 'Alessio','Rosa','Carlos');
console.log(yo.next().value);
console.log(yo.next().value);
console.log(yo.next().value);