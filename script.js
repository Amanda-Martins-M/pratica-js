function botao1() {
    let entrada = prompt("Digite um número: ");

    if (entrada === null || entrada.trim() === "") {
        alert("Nenhum valor informado!");
        console.log("Nenhum valor informado!");
        return;
    }

    let numero = Number(entrada);

    if (isNaN(numero)) {
        alert("Valor inválido. Digite um número.");
        console.log("Valor inválido. Digite um número.");
        return;
    }

    if (numero >= 1) {
        alert("Esse número é positivo!");
        console.log("Esse número é positivo!");
    }
    if (numero < 0) {
        alert("Esse número é negativo");
        console.log("Esse número é negativo");
    } else {
        if (numero === 0) {
            alert("Esse número é 0!");
            console.log("Esse número é 0!");
        }
    }
}

function botao2() {
    let numero = prompt("Digite sua idade: ");

    if (numero === null || numero.trim() === "") {
        alert("Nenhum valor informado!");
        console.log("Nenhum valor informado!");
        return;
    }

    let idade = Number(numero);

    if(isNaN(numero)){
        alert("Valor inválido. Digite um número.");
        console.log("Valor inválido. Digite um número.");
        return;
    }

    if (idade >= 18) {
        alert("Voce é maior de idade!");
        console.log("Voce é maior de idade!");
    } else {
        alert("Você é menor de idade!");
        console.log("Voce é menor de idade!");
    }
}

function botao3() {
    let numero = prompt("Digite um número: ");

    if (numero === null || numero.trim() === "") {
        alert("Nenhum valor informado!");
        console.log("Nenhum valor informado!");
        return;
    }

    let parImpar = Number(numero);

    if(isNaN(numero)){
        alert("Valor inválido. Digite um número.");
        console.log("Valor inválido. Digite um número.");
        return;
    }

    if (parImpar % 2 === 0) {
        alert("Esse número é par!");
        console.log("Esse número é par!");
    } else {
        alert("Esse número é ímpar!");
        console.log("Esse número é ímpar!");
    }
}

function botao4() {
    let variavelX = prompt("Digite um número: ");
    
    if (variavelX === null || variavelX.trim() === "" ||isNaN(Number(variavelX))) {
        alert("Nenhum valor válido informado!");
        console.log("Nenhum valor válido informado!");
        return;
    }
let variavelY = prompt("Digite outro número: ");

 if (variavelY === null || variavelY.trim() === "" || isNaN(Number(variavelY))) {
        alert("Nenhum valor válido informado!");
        console.log("Nenhum valor válido informado!");
        return;
    }

    let x = Number(variavelX);
    let y = Number(variavelY);

    if (x > y) {
        alert(`${x} é maior que ${y}.`);
        console.log(`${x} é maior que ${y}.`);
    } else if (x < y) {
        alert(`${y} é maior que ${x}.`);
        console.log(`${y} é maior que ${x}.`);
    } else if (x === y) {
        alert(`Estes números têm o mesmo valor!`);
        console.log(`Estes números têm o mesmo valor!`);
    }
}

function botao5() {
    let nota = Number(prompt("Forneça uma nota a ser avaliada: "));
    if (nota <= 4) {
        alert(`A nota ${nota} é muito baixa!`);
        console.log(`A nota ${nota} é muito baixa!`);
    } else if (nota >= 5) {
        alert(`A nota ${nota} está na média.`);
        console.logt(`A nota ${nota} está na média.`);
    } else if (nota >= 8) {
        alert(`A nota informada ${nota} é alta!`);
        console.log(`A nota informada ${nota} é alta!`);
    }
}

function botao6() {
    let peso = Number(prompt("Informe seu peso em kg: "));
    let altura = Number(prompt("Informe sua altura em metros (Ex: 1.75): "));

    if (!peso || !altura || altura <= 0) {
        alert("Valores inválidos, tente novamente.");
    }

    let imc = peso / (altura * altura);
    let classificacao = "";

    if (imc < 18.5) classificacao = "Abaixo do peso";
    else if (imc < 24.5) classificacao = "Peso normal";
    else if (imc < 29.9) classificacao = "Sobrepeso";
    else if (imc < 34.9) classificacao = "Obesidade grau 1";
    else if (imc < 39.9) classificacao = "Obesidade grau 2";
    else classificacao = "Obesidade grau 3";

    alert(`Seu IMC é ${imc.toFixed(2)} (${classificacao}).`);
    console.log(`Seu IMC é ${imc.toFixed(2)} (${classificacao}).`);
}

function botao7() {
    
    let opcao = Number(
        prompt(`Selecione uma operação matemática a ser realizada: 
            1 - Adição
            2 - Subtracão
            3 - Divisão
            4 - Multiplicação
            5 - Exponenciação
        `)
    );

    if (isNaN(opcao) || opcao < 1 || opcao > 5) {
        alert("Opção inválida! Tente novamente.");
        return;
    }

    let numeroA = Number(prompt("Informe um número: "));
    let numeroB = Number(prompt("Informe outro número: "));

    if (isNaN(numeroA) || isNaN(numeroB) || opcao < 1 || opcao > 5) {
        alert("Valores inválidos, tente novamente.");
        return;
    }


    let adicao = numeroA + numeroB;
    let subtracao = numeroA - numeroB;
    let divisao = numeroA / numeroB;
    let multiplicacao = numeroA * numeroB;
    let exponenciacao = numeroA ** numeroB;

    switch (opcao) {
        case 1:
            alert(`A adição entre os números ${numeroA} e ${numeroB} é: ${adicao}`);
            console.log(`A adição entre os números ${numeroA} e ${numeroB} é: ${adicao}`);
            break;

        case 2:
            alert(`A subtração entre os números ${numeroA} e ${numeroB} é: ${subtracao}`);
            console.log(`A subtração entre os números ${numeroA} e ${numeroB} é: ${subtracao}`);
            break;

        case 3:
            alert(`A divisão entre os números ${numeroA} e ${numeroB} é: ${divisao.toFixed(2)}`);
            console.log(`A divisão entre os números ${numeroA} e ${numeroB} é: ${divisao.toFixed(2)}`);
            break;

        case 4:
            alert(`A multiplicação entre os números ${numeroA} e ${numeroB} é: ${multiplicacao}`);
            console.log(`A multiplicação entre os números ${numeroA} e ${numeroB} é: ${multiplicacao}`);
            break;

        case 5:
            alert(`A exponenciação entre os números ${numeroA} e ${numeroB} é: ${exponenciacao}`);
            console.log(`A exponenciação entre os números ${numeroA} e ${numeroB} é: ${exponenciacao}`);
            break;
    }
}

function botao8(){
    let diaDaSemana = Number(prompt("Informe um número de 1 a 7: "));

    if (isNaN(diaDaSemana) || diaDaSemana > 7 || diaDaSemana === 0) {
        alert("Valores inválidos, tente novamente.");
        return;
    }

    switch(diaDaSemana) {
        case 1:
            alert(`O valor ${diaDaSemana} corresponde a domingo!`);
            console.log(`O valor ${diaDaSemana} corresponde a domingo!`);
            break;

        case 2:
            alert(`O valor ${diaDaSemana} corresponde a segunda-feira!`);
            console.log(`O valor ${diaDaSemana} corresponde a segunda-feira!`);
            break;

        case 3:
            alert(`O valor ${diaDaSemana} corresponde a terça-feira!`);
            console.log(`O valor ${diaDaSemana} corresponde a terça-feira!`);
            break;

        case 4:
            alert(`O valor ${diaDaSemana} corresponde a quarta-feira!`);
            console.log(`O valor ${diaDaSemana} corresponde a quarta-feira!`);
            break;

        case 5:
            alert(`O valor ${diaDaSemana} corresponde a quinta-feira!`);
            console.log(`O valor ${diaDaSemana} corresponde a quinta-feira!`);
            break;

        case 6:
            alert(`O valor ${diaDaSemana} corresponde a sexta-feira!`);
            aconsole.log(`O valor ${diaDaSemana} corresponde a sexta-feira!`);
            break;

        case 7:
            alert(`O valor ${diaDaSemana} corresponde a sábado!`);
            console.log(`O valor ${diaDaSemana} corresponde a sábado!`);
            break;
    }
}


function botao9() {
    let x = Number(prompt("Digite um valor numérico: "));
    let y = Number(prompt("Digite um valor numérico diferente: "));

    if (isNaN(x) || isNaN(y)) {
    alert("Esses valores não são válidos, tente novamente!");
} else if (x === 0 || y === 0) {
    alert("Não é possível verificar múltiplos de 0!");
} else if (x < 0 || y < 0) {
    alert("Não é possível verificar múltiplos de números menores que 0!")
} else if (x % y === 0) {
    alert(`${x} é múltiplo de ${y}`);
} else if (y % x === 0) {
    alert(`${y} é múltiplo de ${x}`);
} else {
    alert(`${x} e ${y} não são múltiplos um do outro`);
}
}

function botao10() {
const nome = prompt("Digite o seu usuário: ");
const nomeEsperado = "Fulano da Silva";

const senha = prompt("Agora, informe sua senha: ");
const senhaEsperada = "123456";

if (nome === nomeEsperado && senha === senhaEsperada) {
    alert("Login bem sucedido!");
    console.log("Login bem sucedido!");
} else {
    alert("Usuário ou senha incorretos!");
    console.log("Usuário ou senha incorretos!");
}
}

const ativador = document.getElementById("ativar-dm");

const header = document.getElementById("header");
const body = document.getElementById("body");
const titulo = document.getElementById("titulo");
const texto = document.getElementById("texto");
const botoes = document.getElementsByClassName("botoes");

ativador.addEventListener('click', () => {
    header.classList.toggle("header-dm");
    body.classList.toggle("bg-dm");
    titulo.classList.toggle("titulo-dm");
    texto.classList.toggle("texto-dm");

    for (let btn of botoes) {
        btn.classList.toggle("botoes-dm");
    }

})
