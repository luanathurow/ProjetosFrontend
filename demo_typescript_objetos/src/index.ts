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

const outraPessoa = {
    nome: 'Mayra Bordin',
    idade: 20,
    saudar: function () {
        return `Olá! Meu nome é ${this.nome}`;
    }
};
console.log(outraPessoa.idade);
console.log(outraPessoa.saudar());

const maisOutraPessoa = {
    nome: 'Luana Thurow',
    idade: 20,
    saudar() {
        return `Olá! Meu nome é ${this.nome}`;
    }
};
console.log(maisOutraPessoa.saudar());

type Pessoa = {nome: string; idade: number; vivo?:boolean}; //? para tornar uma propriedade opcinal
function alo(umaPessoa: Pessoa) {
    console.log(`Alô, ${umaPessoa.nome}! Você tem ${umaPessoa.idade} anos!`)
}
alo(pessoa);
alo(outraPessoa);
alo(maisOutraPessoa);

const temperatura = {
    celcius: 23,
    get farenheit() {
        return this.celcius * 1.8 + 32;
    }
};
console.log(temperatura.celcius);
console.log(temperatura.farenheit);


const outraTemperatura = Object.create(temperatura);//cria um novo objeto com a mesma estrutura do que eu passei como parametro
outraTemperatura.celcius = 13;
console.log(outraTemperatura.celcius);
console.log(outraTemperatura.farenheit);

//construtor de objetos
/*
type Carro = {modelo:string, fabricante:string, ano:number};
function Carro(this:{modelo:string, fabricante:string, ano:number}, modelo:string, fabricante:string, ano:number) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.ano = ano;
}

const carro = new (Carro as any)('Fusca','VW',1970); //desligar a verificacao de tipo 
console.log(carro);
*/