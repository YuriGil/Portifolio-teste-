//               -5       -4       -3         -2        -1
//.               0        1        2          3         4 
const nomes = ['Maria', 'Joao', 'Eduardo', 'Gabriel', 'Julia'];
    console.log(nomes);
//nome.splice(Indice inicial, delete, add: elm1, elm2, elm3...);
//splice armazena o resultado(sobra) numa variavel
const removidos = nomes.splice(-1, 1);
//Number.MAX_VALUE = mostra todo resultado do array
///declarar o indice, declarar 0 delete, add elemento///

//PUSH      = add no final
/*.     .length = tamanho do array
nomes.splice(nomes.length, 0, 'Mama', 'me', 'olhando');
*/

//POP.     = tirar no final
/*
const removidos = nomes.splice(-1, 1);
*/

//SHIFT.     = tirar no começo
/*
const removidos = nomes.splice(0, 1);
*/

//UNSHIFT.     = add no começo
/*
const removidos = nomes.splice(0, 0, '###');
*/