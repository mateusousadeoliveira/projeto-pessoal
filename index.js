const total = 500
const saldo = 400
let valor_restante
let percentual_restante
let statusCupom
let resultado

//verifica se seu saldo é suficiente
if (saldo >= total){
    resultado = `Seu saldo atual é de ${saldo}R$
    O valor total é de ${total}R$
    Conclusão: seu saldo já o suficiente, então o que você está fazendo aqui?`
} else {
        //calcula o valor restante e percentual
        valor_restante = total - saldo
        percentual_restante = (valor_restante / total) * 100

        //dá uma respectiva resposta para cada situação possível
        if (percentual_restante <= 10){
        statusCupom = `Relaxa, obter ${percentual_restante}% de desconto não é difícel, hoje qualquer loja concede um cupom de desconto de até 10% ou por simplesmente escolher pagar à vista`
        }
        else if (percentual_restante <= 20){
        statusCupom = `Obter ${percentual_restante}% de desconto já não é tão comum assim, por isso, fique de olho em liquidações mensais em datas especiais, como o 10 do 10`
        }
        else if (percentual_restante <= 30){
        statusCupom = `Complicado, obter ${percentual_restante}% não vai ser fácil. Esse tipo de cupom de desconto só é comum em datas anuais, como Black Friday, ou em alguma queima de estoque`
        }   
            else {
            statusCupom = "Melhor nem tentar, o seu valor percentual restante já é muito alto. Por enquanto, seja paciente e aumente o seu saldo "
        }

        resultado = `
        Seu saldo atual é de ${saldo}R$
        O valor total é de ${total}R$
        Restam ${valor_restante} R$
        Em valor percentual, restam ${percentual_restante}%
        conclusão: ${statusCupom}`
    
}

// exibir resultado final
console.log(resultado)