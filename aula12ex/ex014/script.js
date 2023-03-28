function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 8
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = '../bom-dia-cortada.jpg'
        document.body.style.background = '#B5D0D9'
        
    } else if (hora >= 12 && hora <= 18) {
        img.src = '../boa-tarde-cortada.jpg'
        document.body.style.background = '#2D3945'

    } else {
        img.src = '../boa-noite-cortada.jpg'
        document.body.style.background = '#5C4A77'
    }
}
