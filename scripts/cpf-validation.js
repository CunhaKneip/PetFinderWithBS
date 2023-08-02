export default function validaCPF(strCPF) {
    var Soma; //Variavel responsável por somar os dígitos do CPF
    var Resto; // Variavel responsável por guardar o valor do resta das divisões
    strCPF = strCPF.value.replace(/\D/g, ''); 
    Soma = 0; // inicialização da variavel soma 
    if (strCPF == "00000000000" 
    ||strCPF == "11111111111" 
    ||strCPF == "22222222222"
    ||strCPF == "33333333333"
    ||strCPF == "44444444444"
    ||strCPF == "55555555555"
    ||strCPF == "66666666666"
    ||strCPF == "77777777777"
    ||strCPF == "88888888888"
    ||strCPF == "99999999999") {
        cpf.classList.remove('is-valid');
        cpf.classList.add('is-invalid');
        return false; // retorna falsoautomaticamente caso o CPF seja tudo 0
    }
  
    for (let i=0; i<9; i++) {
       
      Soma = Soma + parseInt(strCPF.charAt(i)) * (10 - i); // Soma o resultado da multiplicação de cada digito do CPF com o valor 11(esse valor decai 1 a cada multiplicação,seu mínimo sendo 2)
    }
  
    Resto = 11-(Soma % 11); //faz o resto da soma acima

    if ((Resto === 10) || (Resto === 11)) {
      Resto = 0; // Caso o resultado for maior que 9 (pois oprimeiro digito verificador deve ser de 0 à 9) é atribuido o valor 0 para a variavel resto
    }
  
    if (Resto !== parseInt(strCPF.charAt(9)) ){
      cpf.classList.remove('is-valid');
      cpf.classList.add('is-invalid');
      return false;// compara o resto com o 9 dígito do CPF, caso eles sejam diferentes,a função retorna false,caso contrário, o codigo continua( a função substring precisa de dois parametros, um define onde começara a substring e outro onde acabará,.Neste exemplo,a asubstring pegara o somente o 9)
    }
  
    //repete a msm coisa para o segundo dígito verificador do CPF
    Soma = 0;
  
    for (let i = 1; i < 10; i++) { 
      Soma = Soma + parseInt(strCPF.charAt(i)) * (11 - i);
    }
  
    Resto= 11-(Soma % 11);

  
    
  
    if ((Resto === 10) || (Resto === 11)){
      Resto = 0;
    }
    
    if (Resto !== parseInt(strCPF.charAt(10)) ){

      cpf.classList.remove('is-valid');
      cpf.classList.add('is-invalid');
      console.log("CPF inválido");

      return false;
    }
  
      //caso os dois dígitos verificadores forem corretos, a função retorna true
      cpf.classList.remove('is-invalid');
      cpf.classList.add('is-valid');
      console.log("CPF válido");


      return true;
  }