function inserir(num){
    var numero = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = numero + num;
    
}

function limpar() {
    document.getElementById('display').innerHTML = ""
}

function calcular(){
    var resultado = document.getElementById('display').innerHTML;
    if(resultado){
        document.getElementById('display').innerHTML = eval(resultado);
    }
}
console.log(display);








/*for(let i=0 ; i<digitos.length ;i++){

    const tecla = digitos[i];


}

/*Todas as funções*/ 
  /* function clear(){
        display.value = '';
    }
/*resultado = parseFloat(primeiroValor) + parseFloat(segundoValor);     */   