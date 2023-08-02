export default function validaConfSenha(confirmacao_senha, senha) {

    if ((senha.value != confirmacao_senha.value) || confirmacao_senha.value.length == 0 || !(/\d/.test(confirmacao_senha.value) && /[A-Z]/.test(confirmacao_senha.value) && /[a-z]/.test(confirmacao_senha.value) && /[!@#$%^&*]/.test(confirmacao_senha.value))) {
        confirmacao_senha.classList.remove('is-valid');
        confirmacao_senha.classList.add('is-invalid');
        console.log("Confirmação de senha inválida");


        return false;
    } else {
        confirmacao_senha.classList.remove('is-invalid');
        confirmacao_senha.classList.add('is-valid');
        console.log("Confirmação de senha válida");

        return true;
    }
}