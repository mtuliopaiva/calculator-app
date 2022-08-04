const digitos = document.querySelectorAll('.digito');
const display = document.querySelector('.display');


for(let i=0 ; i<digitos.length ;i++){

    const tecla = digitos[i];

    tecla.onclick = function() {
        var operacao;
        var valorAnterior;
        var valorNovo;
        var resultado;

        if((tecla.value != 'C' && (tecla.value != '+/-') && (tecla.value != '%') && (tecla.value != '÷') && (tecla.value != 'x') && (tecla.value != '-') && (tecla.value != '+') && (tecla.value != '='))){
        display.value = display.value + tecla.value;
        valorAnterior=display.value;
        console.log(valorAnterior);
        
        }

        if(tecla.value == '+'){
            display.value ='';

            if((tecla.value != 'C' && (tecla.value != '+/-') && (tecla.value != '%') && (tecla.value != '÷') && (tecla.value != 'x') && (tecla.value != '-') && (tecla.value != '+') && (tecla.value != '='))){
                display.value = display.value + tecla.value;
                valorNovo=display.value;
                console.log(valorAnterior);
                console.log(valorNovo);
            }   
        }
    }
    function adicionar(valorAnterior, valorNovo){
        resultado = parseInt(valorAnterior) + parseInt(valorNovo);
        
        
        
    }
}