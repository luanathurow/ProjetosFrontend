const numeros = [1,2,3,4,5];
console.log(numeros);
console.log(numeros[0]);
numeros[0] = 0;
console.log(numeros);
console.log(numeros.length);
numeros.length = 10;
console.log(numeros.length);
console.log(numeros);
console.log(numeros[7]);
console.log('Imprimindo conteúdo do array: ');
for(let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}
console.log('Imprimindo conteúdo do array: ');
for(let n of numeros) {
    console.log(n);
}
console.log('Imprimindo conteúdo do array: ');
numeros.forEach(n => console.log(n));//não imprime o undefined
console.log('Imprimindo conteúdo do array: ');
numeros.forEach((n,i) => console.log(`numeros[${i}]=${n}`));

const palavras = ['alfa', 'bravo', 'charlie', 'delta'];
const resultado = palavras.find(p => p.length === 5);//1° palavra com tamanho 5
console.log(resultado);
const resultado2 = palavras.filter(p => p.length > 4);//palavras maiores que 4 letras
console.log(resultado2);
const resultado3 = palavras.map(p => p.length);//retorna o tamanho de cada palavra
console.log(resultado3);
const resultado4 = numeros.reduce((valorAnterior, valorAtual) => valorAnterior+valorAtual,0);
console.log(resultado4);

const mapa = new Map<string, string>();
mapa.set('RS', 'Rio Grande Sul');
mapa.set('SC', 'Santa Catarina');
mapa.set('PR', 'Paraná');
console.log(mapa.get('RS'));
for(let e of mapa) {
    console.log(e);
}
for(let sigla of mapa.keys()) {
    console.log(sigla);
}
for(let estado of mapa.values()) {
    console.log(estado);
}

const conjunto = new Set<number>();
conjunto.add(1);
conjunto.add(2);
conjunto.add(1);
console.log(conjunto.size);//imprime o tamanho do conjunto

const conjuntoMisto = new Set<number|string>();
conjuntoMisto.add(1);
conjuntoMisto.add('teste');
conjuntoMisto.forEach(e => console.log(e));
console.log(conjuntoMisto.has(3));//verfica se tem o valor 3
