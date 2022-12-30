// Função Sem Retorno 
function imprimirSoma(a, b){
    console.log(a + b);
}

imprimirSoma(2, 3);     //retorna 5
imprimirSoma(2);        //retorna NaN (Not a Number)
imprimirSoma(2, 3, 4, 5, 6, 8) //retorna 5 (pega os 2 primeiros numeros)

//  Função com Retorno
function soma(a, b = 0){
    return a+ b;
}

console.log(soma(2,3));