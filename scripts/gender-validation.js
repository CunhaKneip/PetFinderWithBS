export default function validaGenero(genero){
const generoArray = Array.from(genero)


let marcado = false;
genero.forEach((genero) =>{
  genero.checked ? marcado=true:marcado=marcado;
})

if(marcado){
    generoArray.find((genero) => genero.id === 'genero_validacao').classList.add('is-valid');
    generoArray.find((genero) => genero.id === 'genero_validacao').classList.remove('is-invalid');
    console.log("Genero válido");

} else{
    generoArray.find((genero) => genero.id === 'genero_validacao').classList.add('is-invalid');
    generoArray.find((genero) => genero.id === 'genero_validacao').classList.remove('is-valid');
    console.log("Genero válido");

}



return marcado;

}
