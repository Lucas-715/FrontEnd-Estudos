// Funções Associadas a String \\

const escola = "Cod3r";

console.log(escola.charAt(4));
console.log(escola.charAt(5)); // Fora da string - retorna valor vazio
console.log(escola.charCodeAt(3)); // iNDICE(3) dentro da tabela ASC

console.log(escola.substring(1)); // Imprimi do 1 até o final
console.log(escola.substring(0,3)); // Imprimi apartir do 0 até o anterior do 3

console.log('Escola '.concat(escola).concat("!")); // Concatena
console.log(escola.replace(/\w/g, 'e')); // Substitua tudo pela letra e
console.log(escola.replace(3, 'e')); // Substitua espicificadamente

console.log('Ana, Maria,Pedro'.split(',')) // Gera Array