(function(){
    function criaCalculadora(){
        return{
            display: document.querySelector('.display'),


            inicia(){
                this.cliqueBotoes();
            },

            cliqueBotoes(){
                document.addEventListener('click', (event) => {
                    const element = event.target;

                    if(element.classList.contains('btn-num')){
                        this.btnParaDisplay(element.innerText);
                    }

                    if (element.classList.contains('btn-clear')){
                        this.clearDisplay();
                    }

                    if (element.classList.contains('btn-del')){
                        this.apagaUltimo();
                    }

                    if (element.classList.contains('btn-eq')){
                        this.realizaConta();
                    }
                });
            },

            clearDisplay(){
                this.display.value = '';
            },

            apagaUltimo(){
                this.display.value = this.display.value.slice(0, -1);
            },

            btnParaDisplay(valor){
                this.display.value += valor;
            },

            realizaConta(){
                try {
                    result = eval(this.display.value);
                } catch (err){
                    console.log(err)
                    this.display.value = 'Conta inválida';
                    return
                }
                if (typeof result !== "number"){
                    this.display.value = 'Conta inválida';
                    return
                }
                this.display.value = result;
            }
        };
    }
    const calculadora = criaCalculadora();
    calculadora.inicia();
})()