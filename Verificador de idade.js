function Verificar() {
    var agora = new Date()
    var ano = agora.getFullYear()
    var ano2 = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (ano2.value.length == 0 || Number(ano2.value) > ano) {
        alert('Verifique so dados e tente novamente!')
    } else {
        var sexf = document.getElementsByName('radsex')
        var idade = ano - Number(ano2.value)
        var gen = ''
        var imagem = document.createElement('img')
        imagem.setAttribute('id', 'foto')
        if (sexf[0].checked) {
            gen = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                imagem.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21) {
                // Jovem
                imagem.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 60) {
                //adulto
                imagem.setAttribute('src', 'foto-adulto-m.png')
            } else {
                //idoso
                imagem.setAttribute('src', 'foto-idoso-m.png')
            } 
        } else if (sexf[1].checked) {
            gen = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                imagem.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 21) {
                // Jovem
                imagem.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 60) {
                //adulto
                imagem.setAttribute('src', 'foto-adulto-f.png')
            } else {
                //idoso
                imagem.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos!\n`
        res.appendChild(imagem)

    }   
}
