
//o retorno da função pode ser o parametro dela:
function criaPessoa(nome, sobrenome){
    return {nome, sobrenome};
}
const p1 = criaPessoa ('Luiz', 'Otavio');
//declaração de um objeto literal:
const p2 = {
    nome:'joão'.
    sobrenome:'Oliveira'
};
console.log(p1);
console.log(p2);
/*
No caso abaixo, o retorno da funçao pai sera o resultado
entre a concatenação dele e do filho.

*/
function falaFrase (comeco) {
    function falaResto (resto) {
        return comeco + '' + resto;
    }
    return falaResto;
}
const olaMundo = falaFrase('Olá');
console.log(olaMundo('mundo!'));

/*
uma função que ja de retorna a criação de outra função 
para evitar repetição
 */

function criaMultiplicador(multiplicador) {
    return function(n){
        return n * multiplicador;
    };
}
/*
com a 'base' da multiplicação criada, define o 'numero'
de vezes que será multiplicado
*/
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadraplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(());
console.log(());
