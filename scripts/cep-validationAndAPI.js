const validaCEP = async (cep_,estado,rua,bairro,cidade) => {

    //coloca a URL da API em uma constante
    const apiUrl = `https://viacep.com.br/ws/${cep_}/json/`;
   
    try{
      //o codigo espera(await) pela resposta da API e coloca a resposta em uma constante
      const response = await fetch(apiUrl);
    
      //coloca o valor de response como um JSON na variavel "data"
      const data = await response.json();
      
      //Caso o cep inserido for inválido, chamamos  a função da msg, dando o valor referente ao erro
      if (data.erro == true) {
      
      cep.classList.remove('is-valid');
      cep.classList.add('is-invalid');
        cep.value="";
        estado.value="";
        cidade.value="";
        bairro.value="";
        rua.value="";
      
        
        console.log('Cep inválido, limpando dados dos campos');
    
        return false;
      }
      
      if(data.erro != true){
      //  erro_.innerText = "";
      }
    
        cidade.value = data.localidade;
        estado.value = data.uf;
        bairro.value =data.bairro;
        rua.value = data.logradouro;
    
        cep.classList.remove('is-invalid');
        cep.classList.add('is-valid');
    
      
        return data;
    
    }catch(error){
      console.log("Erro da API do CEP:",error);
      return false
    }
  }
   
   export default validaCEP;
