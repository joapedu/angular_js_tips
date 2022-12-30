function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}       //retorna um valor aleatório

let opcao = -1;

while (opcao != -1){
    opcao = getInteiroAleatorioEntre(-1, 10);
    console.log('Opção escolhida foi ${opcao}.');
}

console.log('Até a próxima!');