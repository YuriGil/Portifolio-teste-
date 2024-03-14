/*
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    
        ///////////////// defineProperty ///////////////////
        //configuração da classe/parametro
        Object.defineProperty(this, 'estoque', {
         enumerable:true, //mostrar a chave
         value: estoque, //valor da chave pode até ser uma funçao
         writable: false, //pode alterar a chave
         configurable: true  //altera a capacidade da chave de ser editavel 
    });    
        
        
        //////////////// defineProperties //////////////////

        Object.defineProperties(this, {
            nome:{
                     enumerable:true, //mostrar a chave
         value: estoque, //valor da chave pode até ser uma funçao
         writable: false, //pode alterar a chave
         configurable: true  //altera a capacidade da chave de ser editavel 
            },
            preco:{
                     enumerable:true, //mostrar a chave
         value: estoque, //valor da chave pode até ser uma funçao
         writable: false, //pode alterar a chave
         configurable: true  //altera a capacidade da chave de ser editavel 
            },
        });
}

const p1 = new Produto('Camiseta', 20, 3);
//retorna o objeto em forma de array
console.log(Object.keys(p1));

//inteirar sobre esse array
for(let chave in p1){
    console.log(chave);
}
*/
///////////////// GETTERNS e SETTERNS //////////////////////
//simular na função que o metodo é uma propriedade
//'proteger' o obj

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
        Object.defineProperty(this, 'estoque', {
         enumerable:true,  
         configurable: true,
         //pega e armazena aquela propriedade
         get: function(){
            return estoquePrivado;
         },
         //manipula a propriedade
         set: function(valor) {
            if (typeof valor !== 'number') {
                console.log('Bad Value');
            }
            estoquePrivado = valor;
         }
    });  
}
///// get e set nas funcções construtoras //////

function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            valor = valor.replace('coisa.','');
            nome = valor;
        }
    };
}
//const p1 = new Produto(Camiseta, 20, 3);
//p1.estoque = 500;
//console.log(p1.estoque);
