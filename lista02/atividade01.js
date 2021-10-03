/*1)      Criar uma função de seta (arrow function) que recebe um valor numéricos inteiros e positivos como parâmetro:
a)       Se o número for múltiplo de 5, retornar "Bora".
b)      Se o número for múltiplo de 3, retornar "Dale".
c)       Se o número for múltiplo de 5 e 3, retornar "JAVASCRIPT".
d)      Chamar a função e exibir no console o resultado. */

var multiplos = (valor)=>{
    if((valor%3)==0 && (valor%5)==0){
        console.log("JAVASCRIPT");
    }else if((valor%5)==0){
        console.log("Dale");
    }else if((valor%3)==0){
        console.log("Bora");
    }
}

multiplos(30);