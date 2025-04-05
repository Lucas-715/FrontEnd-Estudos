// Variaveis(var e let) e Constantes(const) \\

/* const = Uma vez definidas, não podem ser reatribuídas, o que as 
* torna ideais para valores fixos, como configurações ou referências que não devem mudar.
* var e let = permitem reatribuição de valores ao longo do código. 
*A diferença principal é o escopo: let tem escopo de bloco (limitado por {}), 
enquanto var tem escopo de função ou global, além de sofrer hoisting (elevação). 
Recomenda-se usar let no lugar de var em códigos modernos, pois evita vazamentos de escopo. 
*/

var a = 3;
let b = 4; // Criar com Let é melhor

var a = 30; // Pode ser Redeclarado sem condição
// let b = 40; Não pode redeclarar, a não ser se estiver denttro de outro escopo, ex: dentro de if, laço,..
b = 40;

console.log(a,b);

const c = 5;
// c = 50 Não muda de nenhuma forma...
console.log(c);