const digitos = document.querySelectorAll('.digito');
const display = document.querySelector('.display');


for(let i=0 ; i<digitos.length ;i++){

    const tecla = digitos[i];
    

    tecla.onclick = function() {
        
        var operacao;
        var primeiroValor;
        var segundoValor;
        var resultado;

        display.value = display.value + tecla.value;
        primeiroValor = display.value;

        if(tecla.value == '+'){
            primeiroValor = primeiroValor.splice(1, 2, 'banana');
            console.log(primeiroValor);
        }

        if(tecla.value == 'C'){
            clear();
    }

        if(tecla.value == '+'){
                
                segundoValor = display.value;
        }
                
    }




    function clear(){
        display.value = '';
    }
}


/*resultado = parseFloat(primeiroValor) + parseFloat(segundoValor);     */   