const escola = "Cod3r";

console.log(escola.charAt(4)); //vai me da a 5 letra da string (começa em 0)
console.log(escola.charAt(5));  //nao retorna nada

console.log(escola.charCodeAt(3)); //é 3, ele vai atras da tabela ascii

console.log(escola.indexOf('3')); //procura a posição do 3 na frase e retorna

console.log(escola.substring(1)); //a partir do indice 1 ate o final
console.log(escola.substring(0, 3)); //vai do zero ate o 3 sem incluir o 3

console.log('Escola'.concat(escola).concat("!")); //concatena stings e palavras
console.log(escola.replace(/\d/, 'e'));
//substitui os digitos da string por 'e'
//se fosse w iria subistituir tudo
//ou também podia colocar algo em especifico

//concatenacao
const nome = 'Rebeca';
const concatenacao = '0lá ' + nome + '!';
console.log(concatenacao)       //retorna "Olá Rebeca!

//template
const template = `
    Olá
    ${nome}!`//simbolo da crase
console.log(template);          //retorna "Olá\n Rebeca!"

//expressões
console.log(`1+1 = ${1+1}`);     //retorna 1+1=2 (dento do "${}" é aplicado o code)

const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}!`); //retorna "Ei... CUIDADO!"