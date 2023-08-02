export default function validaUsuario(usuario){


    if (usuario.value.length <= 4) {
        usuario.classList.remove('is-valid');
        usuario.classList.add('is-invalid');
        console.log("Usuário inválido");

        return false;
    } else {
        usuario.classList.remove('is-invalid');
        usuario.classList.add('is-valid');
        console.log("Usuário válido");

        return true;
    }
}