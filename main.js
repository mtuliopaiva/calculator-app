const tela = document.querySelector("#display");
const tec = document.querySelector('.teclado')
const calculator = document.querySelector('.calculadora')



tec.addEventListener('click', event => {
    if (event.target.matches('button')) {
        const key = event.target; // evento.target
        const action = key.dataset.action; // data atributtes
        const keyContent = key.textContent; //conteudo do teclado clicado
        const displayedNum = tela.textContent; //conteudo do display

        if(!action) {
            if (displayedNum === '0') {
            tela.textContent = keyContent;
            }
            else{
                tela.textContent = displayedNum + keyContent;
            }
          }
        if(action == 'clear'){
            tela.textContent = "0";
          }

        if(action == 'invert'){
            let result = tela.textContent*(-1);
            tela.textContent = result;
          }
        if(action == 'percentage'){
            let result = tela.textContent/100;
            tela.textContent = result;
          }
        if(action === 'plus' ||action === 'minus' ||action === 'divide' ||action === 'multiply'){
            calculator.dataset.firstValue = displayedNum; //criado data atributes first value
            calculator.dataset.operator = action;
            tela.textContent = "0";
        }
        if(action == 'calculate'){
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNum;

            if(operator =='plus'){
                let result = parseFloat(firstValue) + parseFloat(secondValue);
                tela.textContent = result;
            }
            if(operator =='minus'){
                let result = parseFloat(firstValue) - parseFloat(secondValue);
                tela.textContent = result;
            }
            if(operator =='multiply'){
                let result = parseFloat(firstValue)*parseFloat(secondValue);
                tela.textContent = result;
            }
            if(operator =='divide'){
                let result = parseFloat(firstValue)/parseFloat(secondValue);
                tela.textContent = result;
            }
            
          }
        if(action == 'decimal'){
            console.log('decimal key!');
            tela.textContent = displayedNum + '.';
        }

    }

   })
