//inicializador de objetos
const pessoa = {
    nome: 'Luana Thurow',
    idade: 22
};

console.log(pessoa.nome);
console.log(pessoa.idade);
pessoa.idade = 23;
console.log(pessoa.idade);
console.log(typeof pessoa); //imprime o tipo da variavel pessoa

//construtor de objetos
type Carro = {modelo:string, fabricante:string, ano:number};
function Carro(this:{modelo:string, fabricante:string, ano:number}, modelo:string, fabricante:string, ano:number) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.ano = ano;
}

const carro = new (Carro as any)('Fusca','VW',1970); //desligar a verificacao de tipo 
console.log(carro);