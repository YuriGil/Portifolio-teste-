const nomes = ['Eduardo', 'Maria', 'Joana'];    
//.               0.         1.        2.    
//const nomes = new Array('Eduardo', 'Maria', 'Joana');
//atribui a nova variavel sem alteração do array original

/*
const novo = [...nomes];
nomes[2] = 'João';
delete nomes[2];
nomes.push('joão'); -> add no final do array
nomes.pop('joana'); -> apaga o ultimo elemento
nomes.unshift('Pedro'); -> add no começo do array
nomes.shift('Lucas'); -> add no final do array
nomes.slice(1, -3); -> exibe os elementos dos indices
*/            
//transformar string em array
const nome = 'Luiz Otavio Miranda';
const nomes = nome.split(' '); //corresponde ao espaço da frase

//transformar array em string
const nomes = ['Luiz', 'Otavio', 'Miranda'];
const nome = nomes.join(' '); //add espaço na união dos elementos 

console.log(nomes);