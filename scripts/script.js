import validaGenero from "./gender-validation.js"
import validaNome from "./name-validation.js"
import validaSobrenome from "./lastName-validation.js"
import validaUsuario from "./userName-validation.js"
import validaData from "./date-validation.js"
import validaCPF from "./cpf-validation.js"
import validaEmail from "./email-validation.js"
import validaConfEmail from "./emailConfirm-validation.js"
import validaSenha from "./password-validation.js"
import validaConfSenha from "./passwordConfirm-validation.js"
import validaCEP from "./cep-validationAndAPI.js"


const form = document.querySelector("#formulario")
const nome = document.getElementById('nome')
const sobrenome = document.getElementById('sobrenome')
const usuario =  document.getElementById('nomeUsuario')
const data = document.getElementById('data')
const senha = document.getElementById('senha')
const confirmacao_senha = document.getElementById('confirmacao_senha')
const email = document.getElementById('email')
const confirmacao_email = document.getElementById('confirmacao_email')
const cidade = document.getElementById('cidade')
const cpf= document.getElementById('cpf')
const cep = document.getElementById('cep')
const estado = document.getElementById('estado')
const rua = document.getElementById('rua');
const bairro = document.getElementById('bairro');
const generos = document.querySelectorAll('[name="genero"]')
let cepValido = false;

let cep_valido =false;


form.addEventListener("submit", (e) =>{
  console.clear();

  if((!TestaCampos(nome,sobrenome,usuario,generos,data,cpf,senha,confirmacao_senha,email,confirmacao_email,cepValido))){
    e.preventDefault();
  };

},false)
















function TestaCampos(nome,sobrenome,usuario,generos,data,cpf,senha,confirmacao_senha,email,confirmacao_email,cepValido){
  let errado = false;

  if (!validaNome(nome)) errado = true;
  if (!validaSobrenome(sobrenome)) errado = true;
  if(!validaUsuario(usuario)) errado = true;
  if(!validaGenero(generos)) errado = true;
  if(!validaData(data)) errado = true;
  if (!validaCPF(cpf)) errado = true;
  console.log('Cep valido:',cepValido);
  if(!validaEmail(email)) errado = true;
  if(!validaConfEmail(confirmacao_email,email)) errado = true;
  if(!validaSenha(senha)) errado = true;
  if(!validaConfSenha(confirmacao_senha,senha)) errado = true;
  if(cep.value.length < 9) { 
    errado = true;
    cep.classList.remove('is-valid');
    cep.classList.add('is-invalid');

  } else{
    cep.classList.remove('is-invalid');
    cep.classList.add('is-valid');  }
  
console.log("Houve erro no envio do form: ",errado);

 return errado ? false : true;

}



cep.addEventListener("keyup", (e) => {
  const valorCep = e.target.value;

  if (valorCep.length === 9) {
    // getAddress(valorCep);
    cepValido = validaCEP(valorCep,estado,rua,bairro,cidade);
  } else{
    cepValido = false;
  }
});

// const getAddress = async (cep_) => {

//  //coloca a URL da API em uma constante
//  const apiUrl = `https://viacep.com.br/ws/${cep_}/json/`;

//  //o codigo espera(await) pela resposta da API e coloca a resposta em uma constante
//  const response = await fetch(apiUrl);

//  //coloca o valor de response como um JSON na variavel "data"
//  const data = await response.json();
 
//  //Caso o cep inserido for inválido, chamamos  a função da msg, dando o valor referente ao erro
//  if (data.erro == true) {
 
//   cep.classList.remove('is-valid');
//   cep.classList.add('is-invalid');
//    cep_.value="";
//    estado.value="";
//    cidade.value="";
//    bairro.value="";
//    rua.value="";
  
//    cep_valido =false;
//    console.log('cep errado');

//    return;
//  }
 
//  if(data.erro != true){
//   //  erro_.innerText = "";
//  }

//    cidade.value = data.localidade;
//    estado.value = data.uf;
//    bairro.value =data.bairro;
//    rua.value = data.logradouro;

//    cep.classList.remove('is-invalid');
//    cep.classList.add('is-valid');

  
//    cep_valido =true;

// }






// function validaForm(form){
//   var validateGroup = document.getElementsByClassName('validate-me');

//     // Loop over them and prevent submission
//     var validation = Array.prototype.filter.call(forms, function (form) {
//         form.addEventListener('submit', function (event) {
//             if (form.checkValidity() === false) {
//                 event.preventDefault();
//                 event.stopPropagation();
//             }
  
//             //Added validation class to all form-groups in need of validation
//             for (var i = 0; i < validateGroup.length; i++) {
//                 validateGroup[i].classList.add('was-validated');
//             }
//         }, false);
//     });
// }

// window.addEventListener('load', function () {
//   // Fetch all the forms we want to apply custom Bootstrap validation styles to
//   var forms = document.getElementsByClassName('needs-validation');
//   // Get all form-groups in need of validation
//   var validateGroup = document.getElementsByClassName('validate-me');

//   // Loop over them and prevent submission
//   var validation = Array.prototype.filter.call(forms, function (form) {
//       form.addEventListener('submit', function (event) {
//           if (form.checkValidity() === false) {
//               event.preventDefault();
//               event.stopPropagation();
//           }

//           //Added validation class to all form-groups in need of validation
//           for (var i = 0; i < validateGroup.length; i++) {
//               validateGroup[i].classList.add('was-validated');
//           }
//       }, false);
//   });
// }, false);







  








nome.addEventListener("input", (e) => e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, ''));


  
sobrenome.addEventListener("input", (e) => e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, ''));  
  
  
  
cpf.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, '');
  
    if (value.length == 0) {
      e.target.value = ''; // Reset the input value if it's empty
    } else if (value.length <= 3) {
      e.target.value = value;
    } else if (value.length <= 6) {
      e.target.value = `${value.substring(0, 3)}.${value.substring(3)}`;
    } else if (value.length <= 9) {
      e.target.value = `${value.substring(0, 3)}.${value.substring(3, 6)}.${value.substring(6)}`;
    } else {
      e.target.value = `${value.substring(0, 3)}.${value.substring(3, 6)}.${value.substring(6, 9)}-${value.substring(9)}`;
    }
  });

  cep.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, '');
  
    if (value.length == 0) {
      e.target.value = ''; // Reset the input value if it's empty
    } else if (value.length <= 5) {
      e.target.value = value;
    } else {
      e.target.value = `${value.substring(0, 5)}-${value.substring(5, 8)}`;
    }
  });
  

  // cep.addEventListener("input", (e) => e.target.value = e.target.value.replace(/\D/g, ''));

    
  cidade.addEventListener("input", (e) => e.target.value = e.target.value.replace(/[^a-zA-Z]/g,''));








