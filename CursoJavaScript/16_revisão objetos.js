//OBJETO LITERAL = união de dados/ logo é uma variavel
/*
Objeto literal é criado entre chaves, e cada ''caracteristica'
é uma 'chave'


const pessoa = {
    //chave nome
    nome:'luiz', 
    sobrenome:'Otavio'
};
console.log(pessoa.sobrenome);

//acesso dinamico de chaves
const chave = 'nome';
console.log(pessoa[chave]);


função construtora de objetos. Não é muito utilizada

const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome. = 'Otavio';

///////////////////////Metodo//////////////////////

//metodo = função dentro do objeto que executa uma ação
//manipula o objeto direto na base de dados, alterando os valores

const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome. = 'Otavio';
pessoa1.idade = 2;
pessoa1.falarNome = function(){
    return (`${this.nome} esta falando`);
};

pessoa1.getDataNascimento = function () {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa1.getDataNascimento());

//////////////////////Factory functions//////////////

function criaPessoa (nome, sobrenome) {
    //função
    return {
        nome, sobrenome, 
        set/get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}
const p1 = criaPessoa('luiz', 'Otavio');
console.log(p1.nomeCompleto());

*/

////////////////Constructor function////////////////

//em suma a mesma coisa da factory function,
//porem o JS muda o comportamento devido a palavra 'new'
//Pessoa = Obj construtor, podendo criar varias

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}
//cria um objeto vazio = {}
//atrela o 'this' ao objeto vazio e retorna esse 'Objeto vaizo',, porem preenchido

//variavel -> endereço de variavel -> valor contido no endereço
//no caso do p1.nome abaixo, a variavel p1 se mantem
//porem é possivel setar um novo valor pra ela.
const p1 = new Pessoa ('Luiz', 'Otavio');

            //Object.freeze(p1);        'congela a chave'
p1.nome = 'outra coisa';
        delete p1.nome;
const p2 = new Pessoa ('Maria', 'luiza');
console.log(p1);











