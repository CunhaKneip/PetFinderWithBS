export default function validaSenha(senha) {
    if (!(/\d/.test(senha.value) && /[A-Z]/.test(senha.value) && /[a-z]/.test(senha.value) && /[!@#$%^&*]/.test(senha.value)) || (senha.value.length < 8)) {
        senha.classList.remove('is-valid');
        senha.classList.add('is-invalid');
        console.log("Senha inválida");

        return true;
    } else {
        senha.classList.remove('is-invalid');
        senha.classList.add('is-valid');
        console.log("Senha válida");

        return false;
    }
}