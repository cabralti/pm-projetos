let botaoIMC = document.querySelector('.btn-imc');

let botaoVoltar = document.querySelector('.btn-voltar');
botaoVoltar.style.display = 'none';

let resultado = document.querySelector(".resultado");
resultado.style.display = 'none';

botaoIMC.addEventListener('click', function () {

    // Recebendo valores
    let altura = document.querySelector('#altura').value;
    let peso = document.querySelector('#peso').value;

    //if (altura == "" || peso == "")

    if (altura == "") {
        document.getElementById('altura').focus();
    } else if (peso == "") {
        document.getElementById('peso').focus();
    } else {
        let imc = peso / (altura * altura);
        let clas;

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
        } else {
            clas = "Obesidade Mórbida";
        }

        botaoIMC.style.display = 'none';
        botaoVoltar.style.display = 'inline';
        resultado.style.display = 'block';

        let valorIMC = document.querySelector(".valorIMC");
        valorIMC.innerHTML = imc.toFixed(2);

        let classificacao = document.querySelector(".classificacao");
        classificacao.innerHTML = clas;
    }
});

botaoVoltar.addEventListener('click', function () {
    botaoIMC.style.display = 'inline';
    botaoVoltar.style.display = 'none';

    resultado.style.display = 'none';
    
    document.getElementById('altura').focus();
});
