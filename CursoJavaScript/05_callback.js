/*
Atrelamento de uma função a outra. Quando a execução de uma 
chama a outra em seguida.
*/
//funcão para gerar um numero aleatorio em milisegundos
function rand(min = 1000, max = 3000) {
    const num = Math.random()*(max - min) + min;
    return Math.floor(num);
}
//setTimeout = funcao que executa dps de determinado tempo. 
//Estipulado em milisegundos automaticamente
function f1(callback){
    setTimeout(function(){
    console.log('f1');
    if(callback) callback();
    }, rand());
}
function f2(callback){
    setTimeout(function(){
    console.log('f2');
    if(callback) callback();
    }, rand());
}
//caso a função receba um callback ela executa
function f3(callback){
    //essa funçao anonima é um exemplo de callback
    setTimeout(function(){
    console.log('f3');
    if(callback) callback();
    }, rand());
}
/*quando chamado e exercutado o callback entrelaça as funcoes

callback hell = arvore de natal uma dentro da outra

f1(function (){
    f2(function (){
        f3(function(){
            console.log('Olá mundo!!');
        });
    });
});
*/

//uma maneira melhor de escrita de callback:
f1(f1Callback);
//atrelando uma funcao a outra atravez de parmetros(acima)
function f1Callback(){
f2(f2Callback);
}
function f2Callback(){
    f3(f3Callback);
}
function f3Callback(){
    console.log('Olá mundo!!');
}