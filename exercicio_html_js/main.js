const form = document.getElementById('form-numeros');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
const containerMensagemSucesso = document.querySelector('.success-message');
let formEValido = false;

function validaCampo(campoA, campoB) {
    formEValido = campoA?.value < campoB?.value;

    return formEValido;

}

form.addEventListener('submit', function (e) {


    e.preventDefault();



    const mensagemSucesso = `Formulario validado com sucesso`;

    if (formEValido) {

    
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';



        campoA.value = '';
        campoB.value = '';
    } else {
        campoA.style.border('1px solid red');
        document.querySelector('.error-message').style.display = 'block';
    }


});

campoB.addEventListener('keyup', function (e) {

    formEValido = validaCampo(campoA, campoB);
    if (!formEValido) {
        campoA.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    }
    else {
        campoA.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }

}


)
campoA.addEventListener('keyup', function (e) {
  
    containerMensagemSucesso.style.display = 'none';
  
}


)