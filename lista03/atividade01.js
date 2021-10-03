/**1)      Criar uma função anônima para exibir todos os elementos do array abaixo que possuam idade entre 28 a 30:
a)       Chamar a função e exibir o resultado no console. */

var repeticaoIdade = function(){
    let aprovados = [
        {candidato: "Renato Soares",nota: 7.8, idade: 29},
        {candidato: "Marcos Teixeira",nota: 7.8, idade: 26},
        {candidato: "Priscila Gomes",nota: 7.8, idade: 30},
        {candidato: "João Oliveira",nota: 7.8, idade: 27},
        {candidato: "Adriana Telles",nota: 7.8, idade: 28}
    ];

    for(let i = 0; i < aprovados.length; i++){
        if((aprovados[i].idade >=28) && (aprovados[i].idade <=30)){
            console.log(aprovados[i].candidato);
        }
    }   
}

repeticaoIdade();