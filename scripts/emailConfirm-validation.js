export default function validaConfEmail(confirmacao_email,email) {
    
    const padraoEmail = /^[^\s@]+@[^\s@]+$/;
    const teste2 = confirmacao_email.value.trim();
    if (!padraoEmail.test(teste2) || (email.value != confirmacao_email.value)) {
        confirmacao_email.classList.remove('is-valid');
        confirmacao_email.classList.add('is-invalid');
        console.log("Confirmação de email inválida");


        return false;
    } else {
        confirmacao_email.classList.remove('is-invalid');
        confirmacao_email.classList.add('is-valid');
        console.log("Confirmação de email válida");

        return true;
    }
}