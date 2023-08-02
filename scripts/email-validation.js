export default function validaEmail(email) {
    const padraoEmail = /^[^\s@]+@[^\s@]+$/;
    const emailConvertido = email.value.trim();

    if (!padraoEmail.test(emailConvertido)) {
        email.classList.remove('is-valid');
        email.classList.add('is-invalid');
        console.log("Email inválido");


        return false;
    } else {
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
        console.log("Email válido");

        return true;
    }
}