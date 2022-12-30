let isAtivo = false;    //declarando uma variavel de valor falso
console.log(isAtivo);   //retorna "false"

isAtivo = true;    //declarando uma variavel de valor verdadeiro
console.log(isAtivo);   //retorna "true"

isAtivo = 1;
/*para converter em 1 true e 0 false é necessário a negação "!"
duas vezes (!!), ou seja: */ 
console.log(!!isAtivo); //retorna true  

isAtivo = 0;
console.log(!!isAtivo); //retorna false