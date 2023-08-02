export default function validaNome(nome) {

    if (nome.value.length <= 4) {
        nome.classList.remove('is-valid');
        nome.classList.add('is-invalid');
        console.log("Nome inválido");

        return false;
    } else {
        nome.classList.remove('is-invalid');
        nome.classList.add('is-valid');
        console.log("Nome válido");
        
        return true;
    }
}