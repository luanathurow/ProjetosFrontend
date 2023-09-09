//classe com propriedade publicas
class Pessoa {
    nome: string;
    idade: number;
    constructor(nome:string, idade:number) {
        this.nome = nome;
        this.idade = idade;
    }
}
const p1 = new Pessoa('Luana Thurow', 20);
const p2 = new Pessoa('Mayra bordin', 21);
console.log(typeof p1);
console.log(p1);
console.log(p1.nome);

//Classe com propriedades publicas
class PessoaV2 {
    constructor(public nome:string, public idade:number) {}
}
const p3 = new PessoaV2('Teste', 15);
console.log(p3);

//Classe com propriedade privada
class PessoaV3 {
    #nome: string;
    #idade: number;
    #peso = 0;

    constructor(nome: string, idade: number) {
        this.#nome = nome;
        this.#idade = idade;
    }

    get nome() {
        return this.#nome;
    }

    get idade() {
        return this.#idade;
    }

    get peso() {
        return this.#peso;
    }

    set peso(novoPeso: number) {
        this.#peso = novoPeso;
    }

    fazAniversario() {
        this.#idade = this.#idade +1;
    }
}
const p4 = new PessoaV3('Fulano de Tal', 24);
console.log(p4.nome);
console.log(p4.idade);
p4.peso = 45.68;
console.log(p4.peso);
p4.fazAniversario();
console.log(p4.idade);


//desestruturação de objeto
let {nome, idade} = p4;
console.log(nome);

function saudar({nome}: Pessoa) {
    console.log(`Alô, ${nome}!`);
}
saudar(p4);

//gerar JSON
const json = JSON.stringify(p1);//strinhgify só é possível gerar em objetos publicos
console.log(json);
//ler JSON
const json2 = '{"nome": "Json da Silva", "idade":8}'; //pegou este string e gerou um obj json
const obj2: Pessoa = JSON.parse(json2); //utilizando a verificao de tipo Pessoa
console.log(obj2);