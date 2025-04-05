// Funções Associadas ao Number \\ Number é uma função e number é o tipo de dado
const peso1 = 1.0  // Declara uma constante peso1 inicializada com o valor numérico 1.0.
const peso2 = Number('2.1'); // Declara uma constante peso2 convertendo a string '2.1' em número usando o construtor Number().


console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.7871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2)); //Controla quantidade de casas decimais
console.log(media.toString()); //Retorna como string
console.log(media.toString(2)); //Retorna como string binario
console.log(typeof media);