/*funções que retornam objetos
this = será equivalente a quem chama ele, referenciado
por dados externos/internos do escopo
*/
function criaPessoa(nome, sobrenome, altura, peso){
    return{
        nome, 
        sobrenome,
        
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },

        //setter = set/add mais um valor literal/atributo
//split transforma os dados em um arry
//cad elemento existe dps do espaço
//define ou atualiza
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            
        },
        fala(assunto = 'falando sobre NADA'){
            return `${this.nome} esta ${assunto}.`;
        },
        altura: altura,
        peso: peso,
        //getter = usa o metodo como função para obter o resultado
        //'finge' ser atributo, ou valor literal
        //retorna seu valor
       get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otavio', 1.8, 80);
const p2 = criaPessoa('joao', 'Otavio', 1.7, 67);
const p3 = criaPessoa('junior', 'Otavio', 1.9, 120);

console.log('p');