/*
Tudo que funciona para arrays funciona para objetos,
com diferença de simbolos

[] = array
{} = objetos
() = função
*/
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
//const a3 = a1.concat(a2, [7, 8, 9], 'Luiz');
// ... rest operator -> ... spread = une os arrays em um só
const a3 = [...a1, 'Mama', ...a2, ...[7, 8, 9]];
console.log(a3);