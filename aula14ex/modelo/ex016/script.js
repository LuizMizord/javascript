function contar () {
    let inicio = document.getElementById('initxt')
    let fim = document.getElementById('fimtxt')
    let passo = document.getElementById('pastxt')
    let res = document.getElementById('res')

    if (inicio.value.length ==0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        window.alert('Preencha os campos abaixo')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0) {
            window.alert('Passo inválido! Considerando passo 1')
            p = 1
        }
        if (i < f) {
            // Contagem crescente
            for(let c = i;  c <= f; c+= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        } else {
            // Contagem regressiva
            for( let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        }
        
    }
}