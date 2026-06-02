
function mudartelas(){
    const telas = document.querySelectorAll(".tela");
    telas.forEach(function(tela){
        tela.classList.remove("ativa")
    });
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
