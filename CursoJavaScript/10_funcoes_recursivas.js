//uma função que chama a si mesma apos ser executda
function recursiva(max) {
    console.log(max);
    if (max >= 10) return;
    max ++;
    recursiva(max);
}
recursiva(0);
//conta de 0 a 10 se chamando toda vez que se encerra (quando soma +1)