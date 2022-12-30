//demonstrativo valor + imposto
const imposto = 28;
console.log('Valores:')

let precocaderno = 16.70;
let impostocaderno;
impostocaderno = (precocaderno / 100)*imposto;
precocaderno = precocaderno + impostocaderno;
console.log('Caderno:', precocaderno.toFixed(2),'$');  //caderno

let precolapis = 2.20;
let impostolapis;
impostolapis = (precolapis / 100)*imposto;
precolapis = precolapis + impostolapis;
console.log('Lápis:', precolapis.toFixed(2),'$');    //lapis

let precocaneta = 3.00;
let impostocaneta;
impostocaneta = (precocaneta / 100)*imposto;
precocaneta = precocaneta + impostocaneta;
console.log('Caneta:', precocaneta.toFixed(2),'$');    //caneta

let precoestojo = 8.90;
let impostoestojo;
impostoestojo = (precoestojo / 100)*imposto;
precoestojo = precoestojo + impostoestojo;
console.log('Estojo:', precoestojo.toFixed(2),'$');    //estojo

let precoborracha = 2.90;
let impostoborracha;
impostoborracha = (precoborracha / 100)*imposto;
precoborracha = precoborracha + impostoborracha;
console.log('Borracha:', precoborracha.toFixed(2),'$');    //borracha

let precopasta = 6.25;
let impostopasta;
impostopasta = (precopasta / 100)*imposto;
precopasta = precopasta + impostopasta;
console.log('Pasta:', precopasta.toFixed(2),'$');    //pasta 

let precobolsa = 59.90;
let impostobolsa;
impostobolsa = (precobolsa / 100)*imposto;
precobolsa = precobolsa + impostobolsa;
console.log('Bolsa:',precobolsa.toFixed(2),'$');    //bolsa