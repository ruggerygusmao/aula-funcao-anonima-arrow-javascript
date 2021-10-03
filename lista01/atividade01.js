/*1) Criar uma função anônima para exibir no console um array com os nomes de 5 capitais da região Nordeste do Brasil:
a) Transformar todos os elementos em letras maiúsculas.
 */

var capitais = function(){
    let array = ["Alagoas","Paraíba","Piauí","Sergipe","Pernambuco"];
    console.log(array.join().toLocaleUpperCase());
}

capitais();