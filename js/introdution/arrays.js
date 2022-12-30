const valores = [7.7, 8.9, 6.3, 9.2]; //array de 4 possições

console.log(valores[0], " e ", valores[3]); //7.7 e 9.2
console.log(valores[4]) //undefined

valores[4] = 10;
console.log(valores[4]);  //posso adcionar o 10

console.log(valores.length);    //dizer quantos elementos tem no array

valores.push(20, 60, 11, 55.4, 70.3897437); //adcioona todos esses elementos ao array

console.log(valores.pop()); //vai tirar o ultimo elemento do array
delete valores[0];  //deleta o elemento [0]

console.log(typeof valores); //tipo do array = object