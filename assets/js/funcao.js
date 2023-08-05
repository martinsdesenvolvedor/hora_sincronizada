window.onload = function() {
    setInterval(atualiza, 50)
}

function atualiza() {
    var calendarioAtual = document.querySelector('.calendario-atual')
    var conteudoTitulo = document.querySelector('.conteudo__titulo')
    var conteudoParagrafo = document.querySelector('.conteudo__paragrafo')
    var imagem = document.querySelector('.imagem')

    var madrugada = 'https://images.pexels.com/photos/5470670/pexels-photo-5470670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    var dia = 'https://images.pexels.com/photos/462023/pexels-photo-462023.jpeg?auto=compress&cs=tinysrgb&w=600'
    var tarde = 'https://media.istockphoto.com/id/1157189649/pt/foto/blue-sky-with-bright-sun.jpg?s=612x612&w=0&k=20&c=OjPqMDOZ0HpZ3EST93tqk8Wr66NoOxmjnMmNeTULTIo='
    var tardezinha = 'https://images.pexels.com/photos/48207/sunset-sky-sun-cloud-48207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    var noite = 'https://images.pexels.com/photos/3799176/pexels-photo-3799176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

    var data = new Date()
    var dia = data.getDate().toString().padStart(2, '0')
    var mes = data.getMonth().toString().padStart(2, '0')
    var ano = data.getFullYear()
    var horas = data.getHours().toString().padStart(2, '0')
    var minutos = data.getMinutes().toString().padStart(2, '0')
    calendarioAtual.innerHTML = `Data Atual: ${dia}/${mes}/${ano}`
    conteudoParagrafo.innerHTML = `Agora são ${horas}:${minutos} hs`
    imagem.style.backgroundPosition = 'center'
    imagem.style.backgroundSize = '100% 100%'
    imagem.style.backgroundRepeat = 'no-repeat'

    if (horas >= 0 && horas <= 5) {
        conteudoTitulo.innerHTML = `Tenha uma Boa Madrugada`
        imagem.style.backgroundImage = `url(${madrugada})`
        document.body.style.background = '#83A1A0'
    } else if (horas > 5 && horas < 12) {
        conteudoTitulo.innerHTML = `Tenha uma Bom Dia`
        imagem.style.backgroundImage = `url(${dia})`
        document.body.style.background = '#331C10'
    } else if (horas >= 12 && horas < 17) {
        conteudoTitulo.innerHTML = `Tenha uma Boa Tarde`
        imagem.style.backgroundImage = `url(${tarde})`
        document.body.style.background = '#03609B'
    } else if (horas >= 17 && horas < 18) {
        conteudoTitulo.innerHTML = `Tenha um Bom Fim de Tarde`
        imagem.style.backgroundImage = `url(${tardezinha})`
        document.body.style.background = '#EB4101'
    } else {
        conteudoTitulo.innerHTML = `Tenha uma Boa Noite`
        imagem.style.backgroundImage = `url(${noite})`
        document.body.style.background = '#0F1219'
    }
      
} 


    