//"Molde"
function Calculadora(){
    this.display = document.querySelector('.display');
    
    //setoriza os clicks
    //'enter' ao apertar 'enter'
    this.inicia = () => {
        this.capturaEnter();
        this.capturaCliques();
    };
    //ao apertar 'enter', finaliza a conta mostrando resultado 
    this.capturaEnter = () => {
        document.addEventListener('keypress', e => {
            if (e.keyCode !== 13) return; 
            this.realizaConta();
        });
    }
    //despacha cada evento para um metodo
    //definição de função de cada botão setorizado
    this.capturaCliques= () => {
        document.addEventListener('click', e =>{
            const el = event.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clear();
            if (el.classList.contains('btn-del')) this.del();
            if (el.classList.contains('btn-eq')) this.realizaConta();
        });
    };
    this.realizaConta = () => {
        //captura de erro
        try{
            const conta = eval(this.display. value);

            if(!conta){
                alert('Conta invalida'):
                return;
            }
            this.display.value = conta;
        } catch(e){
            alert('Conta Invalida');
            return;
        }
    }

    //add o conteudo da div selecionado(numeros/simbolos)
    //ao apertar 'enter' o foco será o display, não o elemento anterior
    this.addNumDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
    };
    
    //limpar a barra de input
    this.clear = () => this.display.value = '';
    //deleta uma unidade de elemnento
    this.del = function (){
        this.display.value = this.display.value.slice(0, -1);
    };
}
//"Recheio do molde"
const calculadora = new Calculadora ();
calculadora.inicia();