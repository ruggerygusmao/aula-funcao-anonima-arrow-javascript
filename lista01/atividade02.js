/*2)      Criar uma função anônima que retorna os números pares maiores que 100 e menores que 450.
a)       Chamar a função e exibir no console o retorno da função. 
 */

var numerosPares = function(){
    for(var i=101; i < 450;i++){
        if((i%2)==0){
            console.log(i);
        }
    }
}

numerosPares();