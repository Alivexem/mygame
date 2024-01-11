/*
* From the Developer of AlivexemTech:
* This is meant to be a personal project so there's no public documentation. You can duplicate and optimize this codes (if you will). 
* You are very well permitted 
*/



const rock = document.querySelector(".game1")
const paper = document.querySelector(".game2")
const scissor = document.querySelector(".game3")
let fireworks = document.querySelectorAll(".fire")
let display = document.getElementById("declare")
display.style.display = "none"
let comgame = document.getElementById("comgame")
let plays = ["rock.png","paper.png","scissor.png"]
let announce = document.getElementById("announce")
let player = document.getElementById("player")
let computer = document.getElementById("computer")
let btn = document.getElementById("btn")
let audio = new Audio("effect.mp3")

rock.addEventListener("click",() => {
    if(display.style.display == "block"){
        return
    }
    let random = Math.floor(Math.random() * plays.length)
    let src = plays[random]
    comgame.setAttribute("src",src)
    if(src == "rock.png"){
        announce.innerText = "IT'S A TIE! you both played rock"
        announce.style.color = "orange"
    }
    if(src == "paper.png"){
        announce.innerText = "YOU LOSE! paper wrapped rock"
        announce.style.color = "red"
        computer.innerText++
    }
    if(src == "scissor.png"){
        announce.innerText = "YOU WIN! rock smashed scissors"
       
        player.innerText++
        announce.style.color = "lime"
        fireworks.forEach((item) => {
            item.classList.add("firework")
        })
        audio.play()
    }
    rock.style.border = "4px solid violet"
    display.style.display = "block"
    
    setTimeout(() => {
        display.style.display = "none"
        rock.style.border = "2px solid orange"
        fireworks.forEach((item) => {
            item.classList.remove("firework")
        })
    },6500)
})


paper.addEventListener("click",() => {
    if(display.style.display == "block"){
        return
    }
    let random = Math.floor(Math.random() * plays.length)
    let src = plays[random]
    comgame.setAttribute("src",src)
    if(src == "paper.png"){
        announce.innerText = "IT'S A TIE! you both played paper"
        announce.style.color = "orange"
    }
    if(src == "scissor.png"){
        announce.innerText = "YOU LOSE! scissors cut paper"
        announce.style.color = "red"
        computer.innerText++
    }
    if(src == "rock.png"){
        announce.innerText = "YOU WIN! paper wrapped rock"
        
        player.innerText++
        announce.style.color = "lime"
        fireworks.forEach((item) => {
            item.classList.add("firework")
        })
        audio.play()
    }
    paper.style.border = "4px solid violet"
    display.style.display = "block"
    
    setTimeout(() => {
        display.style.display = "none"
        paper.style.border = "2px solid orange"
        fireworks.forEach((item) => {
            item.classList.remove("firework")
        })
    },6500)
})

scissor.addEventListener("click",() => {
    if(display.style.display == "block"){
        return
    }
    let random = Math.floor(Math.random() * plays.length)
    let src = plays[random]
    comgame.setAttribute("src",src)
    if(src == "scissor.png"){
        announce.innerText = "IT'S A TIE! you both played scissors"
        announce.style.color = "orange"
    }
    if(src == "rock.png"){
        announce.innerText = "YOU LOSE! rock smashed scissors"
        announce.style.color = "red"
        computer.innerText++
    }
    if(src == "paper.png"){
        announce.innerText = "YOU WIN! scissors cut paper"
        player.innerText++
        announce.style.color = "lime"
        fireworks.forEach((item) => {
            item.classList.add("firework")
        })
        audio.play()
    }
    scissor.style.border = "4px solid violet"
    display.style.display = "block"
    
    setTimeout(() => {
        display.style.display = "none"
        scissor.style.border = "2px solid orange"
        fireworks.forEach((item) => {
            item.classList.remove("firework")
        })
    },6500)
})


btn.addEventListener("click",() => {
    window.location.reload()
})

