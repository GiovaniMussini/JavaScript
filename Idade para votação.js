var idade = 15
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade > 65) {
    console.log('O voto é opcional')
//} else if (idade < 65) {
//    console.log('O voto é obrigatorio')
} else {
    console.log('O voto é obrigatório')
}