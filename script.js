
function mudartelas(){
    const telas = document.querySelectorAll(".tela")
    telas.forEach(function(tela){
        tela.classList.remove("ativa")
    })
}

function telaInicio(){
    mudartelas()
    document.getElementById("inicio").classList.add("ativa")
}

function telaDicas(){
    mudartelas()
    document.getElementById("dicas").classList.add("ativa")
}

function telaPresentes(){
    mudartelas()
    document.getElementById("presentes").classList.add("ativa")
}

const onf = document.querySelectorAll(".teste")
let paginaAtual = 0

function proximaTela(index){
    onf.forEach(function(onfire){
        onfire.classList.remove("onfire")
    })
    onf[index].classList.add("onfire")
}

function nextTela(){
    paginaAtual++;
    if(paginaAtual >= onf.length){
        paginaAtual = 0
    }
    proximaTela(paginaAtual)
}

function telaAnterior(){
    paginaAtual--
    if(paginaAtual < 0){
        paginaAtual = onf.length - 1
    }
    proximaTela(paginaAtual)
}
proximaTela(0)
const scren = document.querySelectorAll(".screen")
let nextPag = 0

function trocarTela(index){
    scren.forEach(function(on){
        on.classList.remove("on")
    })
    scren[index].classList.add("on")
}

function proxTela(){
    nextPag++
    if(nextPag >= scren.length){
        nextPag = 0
    }
    trocarTela(nextPag)
}

function telaAnt(){
    nextPag--
    if(nextPag < 0){
        nextPag = scren.length - 1
    }
    trocarTela(nextPag)
}
trocarTela(0)