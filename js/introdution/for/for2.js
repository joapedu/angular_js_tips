//  fazendo o (for in)

const notas = [6.7, 7.4, 9.8, 8.1, 7.7];

for (let i in notas) {          // declarar sempre a variável do for
    console.log(i, notas[i]);
}   //imprime a posição e o valor



const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for(let atributo in pessoa){    // declarar sempre a variável do for
    console.log(atributo, '=', pessoa[atributo]);
}// mesma coisa aplicado a i = atributo