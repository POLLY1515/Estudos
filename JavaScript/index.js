//Map percorrer todo um array

let lista = ["Matheus", "Jose", "Maria", "João"];

lista.map((item, index) =>{
    console.log(item, index); // Matheus 0, Jose 1, Maria 2, João 3 
    //  // Mostra o item e a posicao do mesmo no array original.
    //   // A função map não altera o array original, apenas devolve um novo
    //  array com os resultados. 
    //  // Caso queira alterar o array original, você pode usar o map e o
    //  spread operator para concatenar os itens. 
    //  // Exemplo: lista = [...lista.map((item, index) => {...item,...novaPropriedade})] 
    //  // Exemplo: lista = lista.map((item, index) => ({...item, novaPropriedade: novoValor}));  // Exemplo: lista = lista.map((item, index) => item + " - Novo Item");  // Exemplo: lista = lista.map((item, index) => item.toUpperCase());  // Exemplo:
})
// O map devolve o item na primeira e a posicao

//Reduce o reduce busca reduzir o array
console.log("======================================================");
let numeros = [5 ,8, 2];
 let total = numeros.reduce((acumulador, numero) =>{
   return acumulador + numero;

 })

 console.log("Total:" + total );

 console.log("======================================================");

 //Find busca em uma lista, e devolve o primeiro item que encontra
 