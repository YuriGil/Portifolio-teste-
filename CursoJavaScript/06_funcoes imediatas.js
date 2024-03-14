/*IIFE =. immediately invoed function expression 
Ou funcoes auto envocadas
tudo escrito na função envolta em () e chamada no final
() será automaticamente executado e não afetará o
 escopo global*/
 //parametros idade peso altura
(function(idade, peso, altura){
const sobrenome = 'miranda';
function criaNome (nome) {
    return nome + ' ' + sobrenome;
}
function falaNome () {
    console.log(criaNome('Luiz'));
}
falaNome();
console.log(idade, peso, altura);
//argumentos dados
})(30, 80, 1.80);