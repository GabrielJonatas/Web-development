function criaCalculadora() {

    return {
        display: document.querySelector('.display'),
        
        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
            this.pressionaBack();
            this.pressionaDelete();
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if(!conta && conta !== 0 ) {
                    alert('Conta Inválida');
                    return;
                } 

                this.display.value = String(conta);
            } catch(e) {
                alert('Conta Inválida');
                return;
            }
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', e=> {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        pressionaBack () {
            this.display.addEventListener('keyup', e=> {
                if (e.keyCode == 8) {
                    this.apagaUm();
                }
            });
        },

        pressionaDelete () {
            this.display.addEventListener('keyup', e=> {
                if (e.keyCode == 46) {
                    this.clearDisplay();
                }
            });
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        cliqueBotoes() {
            // this -> calculador
            // arrow function não muda o escopo do this, ele permanece linkado a quem criou ele
            document.addEventListener('click', (e) => {
                const el = e.target;

                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')){
                    this.apagaUm();
                }

                if(el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            });


        },

        btnParaDisplay (valor) {
            this.display.value += valor;
        },



    };
}

const calculadora = criaCalculadora();
calculadora.inicia();