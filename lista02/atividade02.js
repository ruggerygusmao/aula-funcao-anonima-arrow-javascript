/*)      Criar uma função de seta (arrow function) para receber como parâmetro uma data de aniversário.
a)       Escrever o signo referente a data de aniversário de acordo com a tabela acima.
b)      Chamar a função e exibir no console o resultado.
 */

var signo = (dia,mes)=>{
    if((dia >= 20) && (mes =="janeiro") || (dia <= 18) && (mes =="fevereiro")){
        console.log("Aquário");
    }else if((dia >= 19) && (mes =="fevereiro") || (dia <= 20) && (mes =="março")){
        console.log("Peixes");
    }else if((dia >= 21) && (mes =="março") || (dia <= 20) && (mes =="abril")){
        console.log("Áries");
    }else if((dia >= 21) && (mes =="abril") || (dia <= 20) && (mes =="maio")){
        console.log("Touro");
    }else if((dia >= 21) && (mes =="maio") || (dia <= 21) && (mes =="junho")){
        console.log("Gêmeos");
    }else if((dia >= 21) && (mes =="junho") || (dia <= 22) && (mes =="julho")){
        console.log("Câncer");
    }else if((dia >= 23) && (mes =="julho") || (dia <= 22) && (mes =="agosto")){
        console.log("Leão");
    }else if((dia >= 23) && (mes =="agosto") || (dia <= 22) && (mes =="setembro")){
        console.log("Virgem");
    }else if((dia >= 23) && (mes =="setembro") || (dia <= 22) && (mes =="outubro")){
        console.log("Libra");
    }else if((dia >= 23) && (mes =="outubro") || (dia <= 21) && (mes =="novembro")){
        console.log("Escorpião");
    }else if((dia >= 22) && (mes =="novembro") || (dia <= 21) && (mes =="dezembro")){
        console.log("Sagitário");
    }else if((dia >= 22) && (mes =="dezembro") || (dia <= 19) && (mes =="janeiro")){
        console.log("Capricórnio");
    }
}

signo(15,"janeiro");