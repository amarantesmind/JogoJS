
// GERANDO NÚMERO ALEATÓRIO DE O A 50

const aleatorio = function (min, max) {
    return Math.floor(Math.random() * (max - min)) - min;
  }

  const resposta = aleatorio (0, 50);
  
// PEDIRNDO PARA O USUÁRIO TENTAR ADIVINHAR O NÚMERO

let numero = (Number(prompt(`Tente adivinhar o número entre 0 e 50! Você têm 10 tentativas. ${resposta}`)));

// CRIANDO CONTADO PARA QUEBRAR O WHILE(MOMENTO EM QUE AS VIDAS CHEGAM AO FIM)

let i = 0;

// WHILE: REPETIR O PROCESSO ATÉ QUE AS VIDAS ACABEM
while(i <= 4) {

// SE O NÚMERO ESCOLHIDO PELO USUÁRIO (variável numero) FOR IGUAL AO VALOR DA FUNÇÃO (numero gerado aleatoriamente) NOTIFICAR QUE ELE GANHOU
    if (numero == resposta){
        alert("Parabéns, você acertou!");
}
// SE O NÚMERO ESCOLHIDO FOR MENOS QUE O VALOR DA FUNÇÃO, AVISAR DO ERRO E PEDIR PARA ESCOLHER DE NOVO
    else if (numero < resposta) {
        alert("Você errou! O número escolhido é menor que a resposta certa, tente novamente! Menos 1 vida. ");

        // reatribuir o valor da variavel numero para o prompt
             numero = (Number(prompt(`Tente adivinhar o número!  ${resposta}`)));

}
// SE NENHUMA DAS POSSIBILIDADES ACIMA ACONTECEREM, AVISAR QUE O NÚMERO ESCOLHIDO É MAIOR QUE A RESPOSTA E PEDIR PARA TENTAR NOVAMENTE
    else {
        alert("Você errou! O número escolhido é maior que a resposta certa, tente novamente! Menos 1 vida");

        numero = (Number(prompt("Tente adivinhar o número!")));
}
     
    
    i ++; 

}
    // QUANDO AS VIDAS ACABAM, AVISAR QUE O USUÁRIO PERDEU O JOGO

alert("Suas vidas acabaram D:  Recarregue a página e tente novamente!");

