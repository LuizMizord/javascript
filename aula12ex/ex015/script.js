function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.lengtn == 0 || fano.value > ano) {
        window.alert ('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebe-m-cortada-removepng.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem-m-cortada-removepng.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto-m-cortada-removepng.png')
            } else {
                img.setAttribute('src', 'idoso-m-cortada-removepng.png')
            }
        } else if(fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebe-f-cortada-removepng.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem-f-cortada-removepng.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto-f-cortado-removepng.png')
            } else {
                img.setAttribute('src', 'idosa-f-cortada-removepng.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}