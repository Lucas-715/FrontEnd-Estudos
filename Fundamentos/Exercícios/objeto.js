// OBJETO \\
/*Objeto é uma coleção de chave e valor, 
*nome do atributo e vc passa o valor para ele.
* Pode ter um Objeto dentro do Objeto
*/
const prod1 = {}; // Objeto Vazio
// Dentro do Objeto tem uma chave nome
prod1.nome = 'Celular Ultra Mega'; // Nome foi criado dinâmicamente dentro do objeto
prod1.preco = 4998.90;

//Par chave e valor:
prod1['Desconto Legal'] = 0.40;

console.log(prod1) // Imprimi o objeto com suas chaves

const prod2 = { 
    nome: 'Camisa Polo', 
    preco: 79.90,
}

console.log(prod2);

