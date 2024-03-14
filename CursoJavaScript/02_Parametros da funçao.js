/*caso seja atribuido um parametro posterior a funçao,
 não declarado, ele é armazenado automaticamente na tag 
 'arguments' e pode ser manipulado*/
 //funciona apenas com 'function'
function funcao () {
    let total = 0;
    for (let argumento of arguments)    {
        total += argumento;
    }
    console.log(total);
};
funcao(1,2,3,4,5,6,7,8,9,10);
/*Os parametros recebem argumentos
Parametros podem receber valor padrao caso n declarado*/

function funcao (a, b = 2, c) {
    c = c || 2;
    let total = 0;
    for (let argumento of arguments)    {
        total += argumento;
    }
    console.log(a + b);
};
funcao();
//Atribuição via desustruração 
//Atribui ao parametro de uma função, um objeto
function funcao([valor1, valor2, valor3]){
    console.log(valor1, valor2, valor3);
};
funcao(['Luiz Otavio', 'miranda', 30])

//... = 3 pontinhos = rest operator 
//sempre o ultimo parametro!!
function conta(operador, acumulador, ...numeros){
    for (let numero of numeros){
    console.log(operador, acumulador, numeros);
        
    }
};
conta('+', 0, 1, 2, 3, 4, 5, 6, 7, 8...);
//define oquea funçao faz e só quando chama especifica oque ela fará
function conta(operador, acumulador, ...numeros){
    for (let numero of numeros){
    if (operador === '+') acumulador += numero;
    if (operador === '-') acumulador -= numero;
    if (operador === '/') acumulador /= numero;
    if (operador === '*') acumulador *= numero;    
    }
    console.log(acumulador);
};
conta('+', 0, 1, 2, 3, 4, 5, 6, 7, 8...);

const conta = function(operador, acumulador,...numeros) => {
    console.log(operador, acumulador,...numero);

};
conta('+', 1, 20, 30, 40, 50)