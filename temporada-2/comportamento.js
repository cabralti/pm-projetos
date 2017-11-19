/*const mensagem = "Olá mundo!";
console.log(mensagem);*/

/*
|---------------------------------------
| Declaração de variáveis e constantes
|---------------------------------------
*/
/*
let mensagem = 'Olá mundo!';
console.log(mensagem);
console.log(typeof(mensagem));*/



/*
|---------------------------------------
| Funções
|---------------------------------------
*/
/*
function soma(n1, n2){
    return (n1 + n2);
}

let resultado = soma(5, 3);
console.log(resultado);*/



/*
|---------------------------------------
| Vetores
|---------------------------------------
*/
/*
let finalSemana = ['sábado', 'domingo'];
console.log(finalSemana[0]);

finalSemana.push('sexta-feira');
console.dir(finalSemana);*/



/*
|---------------------------------------
| Objetos
|---------------------------------------
*/
/*
let agenda = {
    nome: 'Gabriel',
    sobrenome: 'Cabral',
    whatsapp: '(91) 98244-6438',
    nomeCompleto: function () {
        return this.nome + ' ' + this.sobrenome;
    }
}
console.dir(agenda);
console.log(agenda.nomeCompleto());*/



/*
|---------------------------------------
| Condicional
|---------------------------------------
*/
/*
let idade = 17;
if (idade >= 18) {
    console.log('Você é maior de idade');

} else {
    console.log('Você é menor de idade');
}*/



/*
|---------------------------------------
| Loops
|---------------------------------------
*/
/*
let finalSemana = ['sábado', 'domingo'];

// forEach
finalSemana.forEach(function(dia){
    console.log(dia);
});

// for
for(let dia of finalSemana){
    console.log(dia);
}*/


/*
|---------------------------------------
| DOM (Document Object Model)
|---------------------------------------
*/
/*
let botao = document.querySelector('button');
botao.innerHTML = 'Mudar Cor';

botao.addEventListener('click', function () {
    let cor = document.querySelector('#cor').value;
    document.querySelector('body').style.background = cor;
});*/

/*
let botao = document.querySelector('button');

botao.addEventListener('click', function () {
    // Valor do CEP
    let cep = document.querySelector("#cep").value;
    
    // Acessando API do viaCEP
    // `` -> Interpolação
    let api = `https://viacep.com.br/ws/${cep}/json/`;
    
    // Objeto de requisição
    let request = new XMLHttpRequest();
    
    request.open('GET', api);
    
    request.onload = function(){
        
        // Resposta da requisição
        let endereco = JSON.parse(request.responseText);
        
        let logradouro = document.querySelector('#logradouro');
        logradouro.innerHTML = endereco.logradouro;
        
        let bairro = document.querySelector('#bairro');
        bairro.innerHTML = endereco.bairro;
        
        let localidade = document.querySelector('#localidade');
        localidade.innerHTML = endereco.localidade;
       
    };

    request.send();
});
*/
