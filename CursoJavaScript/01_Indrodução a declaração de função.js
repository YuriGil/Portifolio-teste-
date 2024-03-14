//declaração de função
//function hoisting - todas as chamadas de funcoes são levadas para o topo pelo motor do js
//apenas quando a função é decladara com 'function'
falaOi();
function falaOi(){
    console.log('Olá');
}
//firt class objects - variaveis que recebem variaveis
//toda funcão é tratada como objeto/dado
//function expression
souUmDado();
const souUmDado = function () {
    console.log('sou um dado');
};

//a função recebe um parametro que é o resultado dela mesma, sendo manipulado como dado
function executaFuncao (funcao){
    console.log('vou executar sua função a baixo:');
    funcao();
}
executaFuncao(souUmDado);
//Arrow function
const funcaoArrow = () => {
    console.log("Sou uma Arrou Function");
}
funcaoArrow();
//Chamar função dentro do objeto:
const obj = {
    falar(){
        console.log('estou falando....');
    }
};
obj.falar();
//const (constante) mantem seu valor e pode ser chamado varias vezes sem alteração

 const nome = "luiz otavio";
 const sobrenome = "Miranda";
 const idade = 30;
 const peso = 84;
 const alturaEmM = 1.80;
//let são variaveis que perdem seu valor inicial quando são chamadas
let imc;
let anoNasciento;

imc = peso /(alturaEmM * alturaEmM);
anoNasciento = 2023 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg');
console.log('tem' + alturaEmM + 'de altura e seu imc é de:' + imc);
//templatescream
console.log(`${nome} nasceu em ${anoNasciento}.`);  

function mostrarHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR',{
        hour12: false
    });
}

setTimeout(function(){
    clearInterval(timer);
}, 10);

setTimeout(function(){
    console.log('Olá mundo');
},5);––>



