const main = document.querySelector("main")
const finalJogo = document.querySelector(".finalJogo")
const reiniciar = document.querySelector("#reiniciar")
const jogarNovamente = document.querySelector("#jogarNovamente")
const [...buttons] = document.querySelectorAll(".buttons")
const jogador1Selecionado = document.querySelector(".jogador1")
const jogador2Selecionado = document.querySelector(".jogador2")
const jogador1 = document.querySelector("#pontos1")
const jogador2 = document.querySelector("#pontos2")
let pontosJogador1 = 0
let pontosJogador2 = 0
let jogador = 0
let contador = 0

function sorteiaJogador() {
    const sorteio = Math.floor(Math.random() * 2)
    if(sorteio === 0) {
        jogador++
    }
    colore(sorteio)
}

function colore(numero) {
    if(numero % 2 == 0) {
        jogador2Selecionado.classList.toggle("selecionado")
        jogador1Selecionado.classList.remove("selecionado")
    } else {
        jogador1Selecionado.classList.toggle("selecionado")
        jogador2Selecionado.classList.remove("selecionado")
    }
}

function evento(ev) {
    if(jogador % 2 === 0) {
        colore(jogador)
        Jogador(ev.currentTarget, "X")
        jogador++
    } else {
        colore(jogador)
        Jogador(ev.currentTarget, "O")
        jogador++
    }
}

function Jogador(elemento, simbolo) {
    elemento.innerText = simbolo
    elemento.classList.remove("pointer")
    elemento.removeEventListener("click", evento)
    if((buttons[0].innerText === buttons[1].innerText) && (buttons[1].innerText === buttons[2].innerText) && (buttons[0].innerText != "")) {
        fimJogo([buttons[0], buttons[1], buttons[2]], elemento)

    } else if((buttons[3].innerText === buttons[4].innerText) && (buttons[4].innerText === buttons[5].innerText) && (buttons[3].innerText != "")) {
        fimJogo([buttons[3], buttons[4], buttons[5]], elemento)

    } else if((buttons[6].innerText === buttons[7].innerText) && (buttons[7].innerText === buttons[8].innerText) && (buttons[6].innerText != "")) {
        fimJogo([buttons[6], buttons[7], buttons[8]], elemento)

    } else if((buttons[0].innerText === buttons[3].innerText) && (buttons[3].innerText === buttons[6].innerText) && (buttons[0].innerText != "")) {
        fimJogo([buttons[0], buttons[3], buttons[6]], elemento)

    } else if((buttons[1].innerText === buttons[4].innerText) && (buttons[4].innerText === buttons[7].innerText) && (buttons[1].innerText != "")) {
        fimJogo([buttons[1], buttons[4], buttons[7]], elemento)

    } else if((buttons[2].innerText === buttons[5].innerText) && (buttons[5].innerText === buttons[8].innerText) && (buttons[2].innerText != "")) {
        fimJogo([buttons[2], buttons[5], buttons[8]], elemento)

    } else if((buttons[0].innerText === buttons[4].innerText) && (buttons[4].innerText === buttons[8].innerText) && (buttons[0].innerText != "")) {
        fimJogo([buttons[0], buttons[4], buttons[8]], elemento)

    } else if((buttons[2].innerText === buttons[4].innerText) && (buttons[4].innerText === buttons[6].innerText) && (buttons[2].innerText != "")) {
        fimJogo([buttons[2], buttons[4], buttons[6]], elemento)

    } else {
        if(contador == 8) {
            empate()
            menuFinal()
        } else {
            contador++
        }
    }
}

function fimJogo(array, simbolo) {
    array.forEach(function(elemento) {
        elemento.classList.add("win")
    })
    if(simbolo.innerText === "X") {
        pontosJogador1++
        jogador1.innerText = pontosJogador1
    } else if(simbolo.innerText === "O") {
        pontosJogador2++
        jogador2.innerText = pontosJogador2
    }
    buttons.forEach(function(elemento) {
        elemento.removeEventListener("click", evento)
    })
    menuFinal()
}

function menuFinal() {
    main.classList.add("blur")
    finalJogo.classList.remove("none")
    contador = 0
}

function empate() {
    buttons.forEach(function(elemento) {
        elemento.classList.add("empate")
    })
    
}

function telaFinal() {
    main.classList.remove("blur")
    finalJogo.classList.add("none")
    buttons.forEach(function(elemento) {
        elemento.innerText = ""
        elemento.classList.remove("win")
        elemento.classList.remove("empate")
        elemento.classList.add("pointer")
        elemento.addEventListener("click", evento)
    })
}

buttons.forEach(function(elemento) {
    elemento.addEventListener("click", evento)
})

jogarNovamente.addEventListener("click", function(ev) {
    telaFinal()
})

reiniciar.addEventListener("click", function() {
    jogador1.innerText = 0
    jogador2.innerText = 0
    pontosJogador1 = 0
    pontosJogador2 = 0
    telaFinal()
})

document.onload = sorteiaJogador();