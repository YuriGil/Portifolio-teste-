/*
Revisão rapida objetos

Object.value(mostra os valores dos parametros do obj)
Object.entries(intera no obj como um array)
Object.assign (des, any)(faz uma 'copia' da variavel)

Object.keys (retorna as chaves)
Object.freeze (inaltera o obj)
Object.getOwnPropertyDescriptor (o, 'prop')(mostra oque foi definido)
Object.defineProperties (define configuraçao de varias propriedades)
Object.defineProperty (|||||||||||||||||||||de uma|||||||||||||||||)

... (spread) (retorna o obj em forma de array)
const fodase = {Mama: meOlhando.Mama} = pegar uma unica propriedade do obj
*/

const produto = { nome: 'Produto', preco: 1.8};
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
    value:'Qualquer outra coisa'
});
console,log(Object.getOwnPropertyDescriptor(produto, 'nome'));
console.log(produto);


