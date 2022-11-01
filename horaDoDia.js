function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = new Date()
    var min = minuto.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos`
    if (hora < 12) {
        img.src = 'fotomanha.png' // BOM DIA!
        document.body.style.background ='#c1b58e'
    } else if (hora < 18) {
        img.src = 'fototarde.png' // BOA TARDE!
        document.body.style.background = '#f8820c'
    } else {
        img.src = 'fotonoite.png' // BOA NOITE!
        document.body.style.background = '#1e323d'
    }
}
