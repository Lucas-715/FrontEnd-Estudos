
let isAtivo = false; // "let" é usado quando se quer mudar o valor da variavel
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

//Valor numerico:
isAtivo = 1; // 0 é falso e restante e true
// a exclamação significa negação, ex:
console.log(isAtivo); // Imprimi o valor da variavel
console.log(!isAtivo); // Imprimi o valor boleano da negação da variavel
console.log(!!isAtivo); // Imprimi o valor booleano da negação da negação da variavel

console.log("Os verdadeiros..."); // Todos os números inteiros são verdadeiros
console.log(!!3);
console.log(!!-1) // Todo número diferente de 0
console.log(!!" ") // Quaquer String
console.log(!!{}) // Objeto Literal
console.log(Infinity)


console.log("Os falsos...")
console.log(!!0)
console.log(""); // String vazia
console.log(!!null);
console.log(!!NaN); // Note a Number
console.log(!!undefined) // Indefinido

console.log("Para Finalizar...");
console.log(!!("" || null || 0 || " "));

