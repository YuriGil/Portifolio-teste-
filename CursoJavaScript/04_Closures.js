/*
Closures = em suma é o resultado/retorno da função.
Quando a funçao for chamada e execudada retornará um resultado
Esse resultado encerra o escopo da função, encerrando a mesma com o
resultado declarado.
A habilidade da função acessar seu escopo lexico, ou seja
os dados contido no seu escopo/contexto interno e externo
*/
function retornaFuncao(nome){
    return function(){
        return nome;
    };
}
//cada chamda para essa funçao retornará um resultado diferente, os clousures

const funcao = retornaFuncao('Luiz');
const funcao2 = retornaFuncao('João');


//dir mostra informacoes no console de saida sobre os dados
console.dir(funcao);
console.dir(funcao);

console.log(funcao, funcao2);