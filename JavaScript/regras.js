function pergunta(pergunta, resposta, proxima) {

    var lerResposta = prompt(pergunta)

    var respostaCorreta = resposta.toLocaleUpperCase()
    var verificarResposta = lerResposta.toLocaleUpperCase()

    if (verificarResposta === respostaCorreta) {

        alert("Parabens marujo! você é genial... ")
        window.location.href = proxima

    } else {
        alert("A resposta incorreta você foi jogado ao mar!\n A reposta Correta é: " + respostaCorreta)
        window.location.href = "../pirata/gameOver.html"

    }

}