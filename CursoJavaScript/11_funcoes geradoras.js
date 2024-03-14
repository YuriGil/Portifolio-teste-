/*
permite 'pausar' o codigo para interação do usuario 
e retomada de leitura a partir daquela função/linha

yield = pausa o programa para retornar o valor antes de proseguir,
podendo ou não retornar outros yield

return = simplesmente encerra a funlçao.
*/
//funcao geradora basica
function* geradora1(){
    yield 'valor 1';
    yield 'valor 2';
    yield 'valor 3';
}
const g1 = geradora1();

/*
for (let valor of g1){
    console.log(valor);
}*/
//funcao geradora infinita
function* geradora2(){
    let i = 0;

    while(true) {
        yield i;
        i++;
    }
}
const g2 = geradora2();
/*console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);*/

//funcao geradora que chama a outra
function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4(){
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();

//sintaxe de funcoes geradoras
function* geradora5(){
    yield function() {
        console.log('vim do y1');
    };
    //return function (){pararia o codigo aqui}
    yield function() {
        console.log('vim do y2');
    };
}
const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();
