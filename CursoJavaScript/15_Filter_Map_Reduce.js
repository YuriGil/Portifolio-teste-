// Filter -> Sempre retornar um Array, com a mesma quantidade OU MENOS

// Retorne os numeros maiores que 10
/*
    Forma não resumida/estrutural:::::::::

const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 15, 22, 27];


function callbackFilter (valor, indice, array){
   if(valor > 10){
    return true;
   } else {
    return false;
   }
}

.filter = Literalmente filtra os dados baseado no solicitado
const numerosFiltrados = numeros.filter(callbackFilter);

console.log(numerosFiltrados);
            
    Forma resumida:::::

const numerosFiltrados = numeros.filter(valor => valor > 10);


//////////////////////exercicio .filter////////////////////////////////

const pessoas = [
    {nome: 'Luiz', idade: 62}, 
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Pedro', idade: 47},
];

//Retorne as pessoas que tem o nome com 5 letras ou mais

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
console.log(pessoasComNomeGrande);

//Retorne as pessoas com mais de 50 anos

const pessoasComMaisDe50anos = pessoas.filter(obj => obj.idade >= 45);
console.log(pessoasComMaisDe50anos);

//Retorne as pessoas cujo nome termina com A

const pessoasTerminadasComA = pessoas.filter(obj => {
    return obj.nome.toLocaleLowerCase().endsWith('o');
});
console.log(pessoasTerminadasComA);
*/
/*
// Map ->sem alterar o array original, retorna um novo array

// Mesma coisa do Filter, sem alterar valor original

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => valor*2);
    console.log(numerosEmDobro);


const pessoas = [
    {nome: 'Luiz', idade: 62}, 
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Pedro', idade: 47},
];
const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(function(obj){
    delete obj.nome;
    return obj;
});
//Uma forma resumida de escrever.
envolver o obj {} em () transformando em uma expressao

//const idades = pessoas.map(obj => ({ idade: obj.idade}));

//também é possivel modificar o array add uma nova chave 
const addIds = pessoas.map(function(obj, indice){
    obj.id = (indice +1)*1000;
    return obj;
});

//Uma maneira de inteirar sobre os arrays (altera o registro original)
//para evitar isso, usa o endereço original do arrary:

const addIds = pessoas.map(function(obj, indice){
    const newObj = {...obj};
    newObj.id = indice;
    return obj;
});
*/
/*

// Reduce -> Literalmente reduz o array a um unico elemento pra facil retorno
//transofrma esse unico elemeto em obj manipulavel

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function(acumulador, valor){
    acumulador += valor;
    return acumulador;
}, 0); -> possivel setar o valor inicial do acumulador

console.log(total);

//retornar pessoa mais velha
const pessoas = [
    {nome: 'Luiz', idade: 62}, 
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Pedro', idade: 47},
];
const maisVelho = pessoa.reduce(function(acumulador, valor){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelho);

//Filter+Map+Reduce
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosPares = numeros
        .filter(valor => valor % 2 ===0)
        .map(valor => valor * 2)
        .reduce(ac, valor) => ac + valor);

*/