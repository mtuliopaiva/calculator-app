const tela = document.querySelector("#display");
const tec = document.querySelector('.teclado')

const limpar = document.querySelector(".clear");
const inverte = document.querySelector(".invert");
const porcentagem = document.querySelector(".percentage");
const operacao = document.querySelectorAll(".operator");
const dec = document.querySelector(".decimal");
const igual = document.querySelector(".equal");


tec.addEventListener('click', event => {
    if (event.target.matches('button')) {
        const key = event.target; // Evento.target
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = tela.textContent;

        if(!action) {
            if (displayedNum === '0') {
            tela.textContent = keyContent;
            }
            else{
                tela.textContent = displayedNum + keyContent;
            }
          }
        if(action == 'clear'){
            console.log('clear key!');
          }

        if(action == 'invert'){
            console.log('invert key!');
          }
        if(action == 'percentage'){
            console.log('percentage key!');
          }
        if(action === 'plus' ||action === 'minus' ||action === 'divide' ||action === 'multiply'){
            console.log('operator key!');
        }
        if(action == 'calculate'){
            console.log('equal key!');
        }
        if(action == 'decimal'){
            console.log('decimal key!');
        }

    }
   })
