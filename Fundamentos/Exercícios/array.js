// ARRAY \\

const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[1], valores[2], valores[3]); // Imprimi um por um
valores[10] = 90; // Foi colocado valor num espaço na frente
console.log(valores); // Imprimi todos
console.log(valores.length); // Quantidade de Espaços

//Adiciona novos elementos no Array, pode receber multiplos valores diferentes
valores.push({id: 3}, false, null, 'teste'); //  Obejeto, Boolean, valor teste, texto
console.log(valores)

console.log(valores.pop(12, 13)); // Exclui elementos do array
delete valores[15];
console.log(valores);

console.log(typeof valores);

