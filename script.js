function aleatorio (min, max){
    return Math.floor(Math.random() * (max-min +1)) +min;
}

aleatorio Number(prompt("Tente adivinhar o número!"));

console.log(aleatorio)

aleatorio(0,50);

if (prompt = aleatorio){
    prompt("Parabéns, você acertou!")
}

else if (prompt < aleatorio){
    prompt("")
}