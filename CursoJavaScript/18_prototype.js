/*
""""""""""""funções base, usadas de referencia"""""""""""""""""
JavaScript é baseado em prototipos para passar propriedades
e metodos de um objeto para outro.

Definição de prototype
É o termo usado para se referir ao que foi criado pela 
primeira vez, que serve de modelo/mode para futuras ações

Todo os objetos tem uma referencia interna para um prototype (__proto__)
que vem da propriedade prototype da função construtora que foi 
usada para cria-lo. Quando tentamos aessar um menbro de um objeto, 
primeiro o motor do JS vai tentar encontrar este membro no proprio obj
e dps a cadeia de prototipos é usad aaté o topo (null) até
encontrar (ou não) o prototipo

Pessoa.prototype === pessoa1.__proto__

(__proto__)/prototype = um objeto automaticamente atrelado a função
nele há uma serie de configurações e parametros imbutidos

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () =>this.nome + ' ' + this.sobrenome;
}
//retorna o obj Pessoa.prototye como propriedade

const pessoa1 = new Pessoa ('Luiz', 'O.'); // <-- Pessoa = função construtora
const data = new Date() // <--- Date = função construtor

//pessoa1 --> Pessoa.prototype --> Object.prototype

*/
















