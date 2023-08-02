
export default function validaSobrenome(sobrenome){

if (sobrenome.value.length <= 4) {
    sobrenome.classList.remove('is-valid');
    sobrenome.classList.add('is-invalid');
    console.log("Sobrenome inválido");

    return false;
  } else {
    sobrenome.classList.remove('is-invalid');
    sobrenome.classList.add('is-valid');
    console.log("Sobrenome válido");


    return true;
  }
}