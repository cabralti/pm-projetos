//Botão calcular IMC
let botaoImc = document.querySelector('button');

//Botão voltar
let botaoVoltar = document.querySelector('.block__button-voltar');

//Bloco do resultado
let blockresultado = document.querySelector('.block-resultado');
blockresultado.classList.add('block-hidden');

botaoImc.addEventListener('click', function () {
    //Recuperando valores
    let altura = document.querySelector('#altura').value;
    let peso = document.querySelector('#peso').value;

    //Calculo do IMC. Fonte: Wikipedia
    let imc = peso / (altura * altura);
    let clas;

    if (altura == "") { //Se vazio
        document.getElementById('altura').focus();
    } else if (peso == "") {//Se vazio
        document.getElementById('peso').focus();
    } else {
        if (imc < 16) {
            clas = "Magreza grave";
        } else if (imc < 17) {
            clas = "Magreza moderada";
        } else if (imc < 18.5) {
            clas = "Magreza leve";
        } else if (imc < 25) {
            clas = "Saudável";
        } else if (imc < 30) {
            clas = "Sobrepeso";
        } else if (imc < 35) {
            clas = "Obesidade";
        } else if (imc < 40) {
            clas = "Obesidade Severa";
        } else if (imc >= 40) {
            clas = "Obesidade Mórbida";
        }

        blockresultado.classList.remove('block-hidden');
        botaoImc.classList.add('block-hidden');

        //Escrevendo no elemento
        let valorIMC = document.querySelector('#imc');
        valorIMC.innerHTML = imc.toFixed(2);

        //Escrevendo no elemento
        let classificacao = document.querySelector('#classificacao');
        classificacao.innerHTML = clas;

    }

});

botaoVoltar.addEventListener('click', function () {
    blockresultado.classList.add('block-hidden');
    botaoImc.classList.remove('block-hidden');
});

//Somente números e o ponto(.) Fonte: https://pt.wikipedia.org/wiki/ASCII
/*function SomenteNumero(e) {
    let tecla = (window.event) ? event.keyCode : e.which;
    if ((tecla > 47 && tecla < 58)) {
        return true;
    }
    else if (tecla == 8 || tecla == 0 || tecla == 46) {
        return true;
    }
    else {
        return false;
    }
}*/