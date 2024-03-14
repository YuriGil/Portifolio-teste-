function Pessoa (nome, sobrenome) {
    const ID = 123456;
    //metodo acessivel apenas no escopo interno 
    const metodoInterno = function (){

    };
    this.nome = nome;
    //Pessoa.nome = 
    this.sobrenome = sobrenome;
    //metodo = função dentro da funçao
    //metodo acessivel no escopo global
    this.metodo = function(){
        console.log(this.nome + ': Sou um metodo');
    };
}
/*
new = cria um obj vazio, aponta o 'this' para ele,
e retorna o valor do paramentro ex: p2.sobrenome = Oliveira
*/
const p1 = new Pessoa('Luiz', 'Otavio');
const p2 = new Pessoa('Maria', 'Oliveira');
p1.metodo();