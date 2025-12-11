/* 1. If / Else – Verificador de número positivo, negativo ou zero*/
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

/* 2. If / Else – Verificar maioridade*/
function botao2() {
    let numero = prompt("Digite sua idade: ");

    if (numero === null || numero.trim() === "") {
        alert("Nenhum valor informado!");
        console.log("Nenhum valor informado!");
        return;
    }

    let idade = Number(numero);

    if (isNaN(numero)) {
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

/*3. If / Else – Verificar número par ou ímpar */
function botao3() {
    let numero = prompt("Digite um número: ");

    if (numero === null || numero.trim() === "") {
        alert("Nenhum valor informado!");
        console.log("Nenhum valor informado!");
        return;
    }

    let parImpar = Number(numero);

    if (isNaN(numero)) {
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

/*4. If / Else If – Comparar dois números*/
function botao4() {
    let variavelX = prompt("Digite um número: ");

    if (variavelX === null || variavelX.trim() === "" || isNaN(Number(variavelX))) {
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

/*5. If Encadeado – Classificação de nota*/
function botao5() {
    let numero = prompt("Forneça uma nota a ser avaliada: ");

    if (numero < 0 || numero === null || numero.trim() === "" || isNaN(Number(numero))) {
        alert("Nenhum valor válido informado!");
        console.log("Nenhum valor válido informado!");
        return;
    }

    let nota = Number(numero);

    if (nota <= 4) {
        alert(`A nota ${nota} é muito baixa!`);
        console.log(`A nota ${nota} é muito baixa!`);
    } else if (nota <= 7) {
        alert(`A nota ${nota} está na média.`);
        console.log(`A nota ${nota} está na média.`);
    } else {
        alert(`A nota informada ${nota} é alta!`);
        console.log(`A nota informada ${nota} é alta!`);
    }
}

/*6. If Encadeado – Calculadora de IMC*/
function botao6() {
    let kg = prompt("Informe seu peso em kg (Exemplo: 60.0): ");

    if (kg < 0 || kg === null || kg.trim() === "" || isNaN(Number(kg))) {
        alert("Nenhum valor válido informado!");
        console.log("Nenhum valor válido informado!");
        return;
    }

    let m = prompt("Informe sua altura em metros (Exemplo: 1.75): ");
    if (m < 0 || m === null || m.trim() === "" || isNaN(Number(m))) {
        alert("Nenhum valor válido informado!");
        console.log("Nenhum valor válido informado!");
        return;
    }

    let peso = Number(kg);
    let altura = Number(m);


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

/*7. Switch – Calculadora simples*/
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
        alert("Nenhum valor válido informado!");
        console.log("Nenhum valor válido informado!");
        return;
    }

    let a = prompt("Informe um número: ");

    if (a === null || a.trim() === "" || isNaN(Number(a))) {
        alert("Nenhum valor válido informado!");
        console.log("Nenhum valor válido informado!");
        return;
    }

    let b = prompt("Informe outro número: ");

    if (b === null || b.trim() === "" || isNaN(Number(b))) {
        alert("Nenhum valor válido informado!");
        console.log("Nenhum valor válido informado!");
        return;
    }

    let numeroA = Number(a);
    let numeroB = Number(b);


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

/*8. Switch – Dia da semana*/
function botao8() {
    let diaDaSemana = Number(prompt("Informe um número de 1 a 7: "));

    if (isNaN(diaDaSemana) || diaDaSemana > 7 || diaDaSemana < 0) {
        alert("Valores inválidos, tente novamente.");
        return;
    }

    switch (diaDaSemana) {
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

/*9. If – Verificar múltiplos*/
function botao9() {
    let varX = prompt("Digite um valor numérico: ");

    if (varX < 0 || varX === null || varX.trim() === "" || isNaN(Number(varX))) {
        alert("Nenhum valor válido informado!");
        console.log("Nenhum valor válido informado!");
        return;
    }

    let varY = prompt("Digite um valor numérico diferente: ");
    if (varY < 0 || varY === null || varY.trim() === "" || isNaN(Number(varY))) {
        alert("Nenhum valor válido informado!");
        console.log("Nenhum valor válido informado!");
        return;
    }

    let x = Number(varX);
    let y = Number(varY);

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

/*10. If / Else – Sistema de login simples*/
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

/*11. For – Contar de 1 a 10*/
function botao11() {
    for (let n = 1; n <= 10; n++) {
        console.log("Contando: ", n);
    }
}

/*12. While – Soma de 1 a 50*/
function botao12() {
    let numero = 1;
    let soma = 0;
    while (numero <= 50) {
        console.log("O número atual é: ", numero);

        soma += numero;
        numero++;
    }
    console.log("A soma total dos números de 1 a 50 é: ", soma);
}

/*13. For – Contagem regressiva*/
function botao13() {
    let varB = prompt("Digite um número válido para iniciar a contagem regressiva até o número 0: ");

    if(varB <= 0 || varB ===null || varB.trim()==="" ||isNaN(Number(varB))){
        alert("Nenhum valor válido informado!");
        console.log("Nenhum valor válido informado!");
    }

    b = Number(varB);

    for (let i = b; i >= 0; i--) {
        console.log("Contagem regressiva:", i);
    }
}

/*14. Do While – Repetir até 'ok' ser digitado*/
function botao14() {
    let palavra;
    do {
        palavra = prompt("Informe a palavra 'ok' para encerrar a repetição: ");

        if(palavra === null || palavra.trim()===""){
            alert("Nenhum valor válido informado!");
            console.log("Nenhum valor válido informado!");
        }

    } while (palavra !== "ok");
}

/*15. Função + For – Tabuada de um número*/
function botao15() {
    let varT = prompt("Digite um número de 1 a 10 para executar a tabuada: ");

     if(varT <= 0 || varT ===null || varT.trim()==="" ||isNaN(Number(varT))){
        alert("Nenhum valor válido informado!");
        console.log("Nenhum valor válido informado!");
    }

    t = Number(varT);

    for (let i = 1; i < 11; i++) {
        let multiplicacao = t * i;
        console.log(`O reultadao de ${t} x ${i} é: `, multiplicacao);
    }
}

/*16. While – Contar números pares até 100*/
function botao16() {
    let par = 0;
    contador = 0;
    while (par <= 100) {
        console.log("Contando números pares até 100: ", par);

        contador++;
        par += 2;
    }
    console.log("Total de itens da contagem: ", contador);
}

/*17. For – Mostrar cada caractere de uma palavra*/
function botao17() {
    let palavraRepeat = prompt("Escreva uma palavra: ");

    if(palavraRepeat === null || palavraRepeat.trim()===""){
        alert("Nenhum valor válido informado!");
        console.log("Nenhum valor válido informado!");
        return;
    }

    for (let letra = 0; letra < palavraRepeat.length; letra++){
        console.log("O caractere atual é: ", palavraRepeat[letra]);
    }
}

/*18. Função – Elevar um número ao quadrado*/
function botao18(){
    let quadrado = prompt("Informe um número para elevar ao quadrado: ");

    if(quadrado < 0 || quadrado === null || quadrado.trim()==="" || isNaN(Number(quadrado))){
        alert("Nenhum valor válido informado!");
        console.log("Nenhum valor válido informado!");
        return;
    }  
    resultadoExponenciacao = quadrado ** 2;
    console.log(`O resultado de ${quadrado} elevado ao quadrado é: `,resultadoExponenciacao);
}

/*19. For – Repetir frase N vezes*/
function botao19() {
    let frase = prompt("Escreve uma frase: ");

    if(frase === null || frase.trim()===""){
        alert("Nenhum valor válido informado!");
        console.log("Nenhum valor válido informado!");
        return;
    }

    let quantidade = prompt("Agora informe um número que ditará quantas vezes essa frase irá se repetir: ");

    if(quantidade < 0 || quantidade === null || quantidade.trim()==="" ||isNaN(Number(quantidade))){
        alert("Nenhum valor válido informado!");
        console.log("Nenhum valor válido informado!");
        return;
    }

    quant = Number(quantidade);
    
    for(let n = 1; n <= quant; n++){
        console.log(n, frase);
    }
 }

/*20. While – Verificador de senha com 3 tentativas*/
    function botao20() {
        let tentativaSenha = prompt("Digite uma senha válida: ");

        if(tentativaSenha === null || tentativaSenha.trim() === ""){
            alert("Nenhum valor válido informado!");
            console.log("Nenhum valor válido informado!");
            return;
        }

        let senhaCorreta = "professordenisbananão";
        let tentativas = 3;

        while (tentativaSenha !== senhaCorreta) {
            console.log("Senha incorreta, tente novamente.");
            tentativas--;
            tentativaSenha = prompt(`Você ainda tem ${tentativas} tentativas. Digite a senha correta: `);

            if (tentativas === 1){
                alert("Número de tentativas excedidas. Acesso bloqueado!");
                console.log("Número de tentativas excedidas. Acesso bloqueado!"); 
                break;
        }
        }   
            if(tentativaSenha === senhaCorreta){
            alert("Senha correta! Acesso liberado.");
            console.log("Senha correta! Acesso liberado.");
            }
    }

const ativador = document.getElementById("ativar-dm");

const header = document.getElementById("header");
const body = document.getElementById("body");
const titulo = document.getElementById("titulo");
const titulo2 = document.getElementById("titulo2");
const texto = document.getElementById("texto");
const texto2 = document.getElementById("texto2");
const texto3 = document.getElementById("texto3");
const lista = document.getElementById("lista");
const lista2 = document.getElementById("lista2");
const botoes = document.getElementsByClassName("botoes");

ativador.addEventListener('click', () => {
    header.classList.toggle("header-dm");
    body.classList.toggle("bg-dm");
    titulo.classList.toggle("titulo-dm");
    titulo2.classList.toggle("titulo2-dm");
    texto.classList.toggle("texto-dm");
    texto2.classList.toggle("texto-dm");
    texto3.classList.toggle("texto-dm");
    lista.classList.toggle("texto-dm");
    lista2.classList.toggle("texto-dm");

    for (let btn of botoes) {
        btn.classList.toggle("botoes-dm");
      }
})
