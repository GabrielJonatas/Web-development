function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.cliqueBotoes();
        this.pressionaEnter();
        this.pressionaBack();
        this.pressionaDelete();
    };

    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value);

            if(!conta && conta !== 0 ) {
                alert('Conta Inválida');
                return;
            } 

            this.display.value = String(conta);
        } catch(e) {
            alert('Conta Inválida');
            return;
        }
    };

    this.pressionaEnter = () => {
        this.display.addEventListener('keypress', e=> {
            if (e.keyCode === 13) this.realizaConta();
        });
    };

    this.pressionaBack = () => {
        this.display.addEventListener('keyup', e=> {
            if (e.keyCode == 8) this.apagaUm();  
        });
    };

    this.pressionaDelete = () => {
        this.display.addEventListener('keyup', e=> {
            if (e.keyCode == 46) this.clearDisplay();
        });
    };

    this.clearDisplay = () => this.display.value = '';

    this.apagaUm = () => this.display.value = this.display.value.slice(0, -1);

    this.cliqueBotoes = () =>{
        document.addEventListener('click', (e) => {
            const el = e.target;
            if(el.classList.contains('btn-num')) this.btnParaDisplay(el.innerText);
            if(el.classList.contains('btn-clear')) this.clearDisplay();
            if(el.classList.contains('btn-del'))this.apagaUm();
            if(el.classList.contains('btn-eq')) this.realizaConta();
        });
    };

    this.btnParaDisplay  = valor => {
        this.display.value += valor;
        this.display.focus();
    }
};

const calculadora = new Calculadora();
calculadora.inicia();
