const digitos = document.querySelectorAll('.digito');
const display = document.querySelector('.display');


for(let i=0 ; i<digitos.length ;i++){

    const tecla = digitos[i];

    tecla.onclick = function() {
        console.log(digitos[i]);
    }

}