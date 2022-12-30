// Goals:
// 1. Finds all the prime numbers between 1 and 1000. 
// 2. Sums all the prime numbers that you found between 1 and 1000.
// 3. The `main` function should return the sum of all prime numbers.
// Bonus points for a more functional approach in your code. For example, try to use array functions such as map, filter or reduce.
// Um número primo é um número natural maior que 1 que só é divisível por 1 e por ele mesmo

/*
let prime = [50]; //array for all the prime numbers
let num = [999];  // array to store the numbers 1-1000

const main = (prime, num) => {
    let posição = 0;
    let count = 0;
    for(let i = 0; i < 1000; i++){
    nums[i] = i;
    }   //armazenando o 1 ao 1000 em num
    for(let i = 0; i < 1000; i++){
        if((i % num[i]) = 0){
            for(let j = 0; j < 1000; j++){
                while(count < 1){
                    if(num[i] % ){

                    }
                }
            }
        }
        }
}
*/                  // que dificuldade minha nossa

/*      BASE
const main = (params) => {
    // Code here
}
*/


function primeNumbers(num) {
    let numbers = new Array();
    for (var i = 0; i <= num; i++) {
      if (isPrime(i)){
        numbers.push(i);
      }
    }
    return numbers;
  }
  function isPrime(num) {
    for(let i = 2; i <num; i++)
      if(num % i === 0) {
          return false
      };
    return num > 1;
  }

  let soma;
  soma = primeNumbers(1000);

  console.log(primeNumbers(soma));  //nao vai
  