let saudacao: string = 'Hello, mundo';
console.log(saudacao);

function saudar() {
    console.log('Alô, mundo!');
}

saudar();

function saudarComNome(nome: string) {
    console.log(`Alô, ${nome}!`);
}

saudarComNome('Luana');

function criarSaudacao(nome: String) {
    return `Alô, ${nome}!`;
}

console.log(criarSaudacao('Luana'));

function potencia(base: number, expoente: number = 0) {
    let resultado = 1;
    for (let cont = 0; cont < expoente; cont++) {
        resultado = resultado * base;
    }
    return resultado;
}

console.log(potencia(2,3));
console.log(potencia(2));

const saudarAnonima = function (nome: string) {
    return `Alô, ${nome}!`;
}

console.log(saudarAnonima);
console.log(saudarAnonima('Luana'));

const saudarArrow = (nome: string) => `Alô, ${nome}!`;

console.log(saudarArrow('Luana'));

//funcao imediata de uma funcao
(function (x: number, y: number) {
    console.log(x + y);
})(1,2);

//Closure
function multiplicador(fator: number): (n: number) => number {
    return numero => numero * fator;
}

const dobrar = multiplicador(2);
console.log(dobrar(5));