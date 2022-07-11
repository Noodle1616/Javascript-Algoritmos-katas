function salario(salario, vendas){
    let porcentagem = 0.03
    let extra = 0
    let comissao = vendas * porcentagem
    if(vendas > 1200){
        extra += ((vendas - 1200) * 0.05)
    }
console.log(`Seu salario é de R$${salario} Reais
Sua comissão é de R$${comissao + extra} Reais
O total é de R$ ${salario + comissao + extra}`)
return salario + comissao + extra
}
console.log(salario(1200, 3500))
console.log(" ")


//////////////////////////////////////////////


function caixa(valor, salarioFixo, vendas){
    saldo = salario(salarioFixo, vendas)
    let mensagem = "Notas sacadas:"
    let x = 0
    let cedulas = {
        dozentos: 0,
        cem: 0,
        cinquenta: 0,
        vinte: 0,
        dez: 0,
        cinco: 0,
        retorno: 0
    }

    let valorSacado = 0
    for(let i = 0; i < 30; i++){
        if(valorSacado + 200 <= valor){
            valorSacado += 200
            cedulas["dozentos"] += 1
            saldo -= 200
        }else if(valorSacado + 100 <= valor){
            valorSacado += 100
            cedulas["cem"] += 1
            saldo -= 100
        }else if(valorSacado + 50 <= valor){
            valorSacado += 50
            cedulas["cinquenta"] += 1
            saldo -= 50
        }else if(valorSacado + 20 <= valor){
            valorSacado += 20
            cedulas["vinte"] += 1
            saldo -= 20
        }else if(valorSacado + 10 <= valor){
            valorSacado += 10
            cedulas["dez"] += 1
            saldo -= 10
        }else  if(valorSacado + 5 <= valor){
            valorSacado += 5
            cedulas["cinco"] += 1
            saldo -= 5
        }else if(cedulas["retorno"] < valor - valorSacado){
            cedulas["retorno"] += 1    
        }     
    }

    if(cedulas["dozentos"] >= 1){
        mensagem += ` ${cedulas["dozentos"]} notas de R$200,`
    }if(cedulas["cem"] >= 1){
        mensagem += ` ${cedulas["cem"]} nota de R$100,`
    }if(cedulas["cinquenta"] >= 1){
        mensagem += ` ${cedulas["cinquenta"]} nota de R$50,`
    }if(cedulas["vinte"] === 1){
        mensagem += ` ${cedulas["vinte"]} nota de R$20,`
    }if(cedulas["vinte"] > 1){
        mensagem += ` ${cedulas["vinte"]} notas de R$20,`
    } if(cedulas["dez"] >= 1){
        mensagem += ` ${cedulas["dez"]} nota de R$10,`
    }if(cedulas["cinco"] >= 1){
        mensagem += ` ${cedulas["cinco"]} nota de R$5,`
    }if(valorSacado > 5){
        mensagem += ` Saldo atual: R$${saldo}`
    }if(cedulas["retorno"] >= 1){
        console.log(`Foi retornado a sua conta o valor de: R${cedulas["retorno"]}`)
    }

    console.log(`Valor sacado foi R$${valorSacado} Reais.`)
    return mensagem
}
console.log(caixa(560, 1200, 3500))
console.log(" ")


/////////////////////////////////////////////


function myStock(atual, maximo, minimo){
    valorMedio = (maximo + minimo) / 2

    if(atual >= valorMedio){
        return 'Não efetuar compra'
    }else{
        return 'Efetuar compra'
    }
}
console.log(myStock( 70, 100, 20))
console.log(" ")


///////////////////////////////////////////////////


function nascimento(nascimento, anoAtual){
let anos = anoAtual - nascimento
let meses = anos * 12
let dias = anos * 365
let semanas = meses * 4

// console.log (`${anos} Anos`)
// console.log (`${meses} Meses`)
// console.log (`${semanas} Semanas`)
// console.log (`${dias} Dias`)
return `Idade é: ${anos}
Meses são: ${meses}
Semanas são ${semanas}
Dias são ${dias}`
}
console.log(nascimento(2012, 2022))
console.log(" ")


///////////////////////////////////////////


function getDiagonal(x){
    let cont = 1
    let teste = []
    let resultado = ""
    for(let i = 0; i < x; i++){
        teste.push([])
         for(let a = 1; a <= x; a++){
            teste[i].push([cont] + "")
            cont += 1
         }
    }
   for(let i = 0; i < teste.length; i++){
    
    if(teste[i][i]){
        resultado += teste[i][i] + ", "
    }
   }
   console.log(resultado)
    return teste
}
console.log(getDiagonal(3))
