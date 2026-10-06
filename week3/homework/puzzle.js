
let btnSprout = document.getElementById("btnSprout")   // 🌱
let btnLeaf = document.getElementById("btnLeaf")       // 🌿
let btnTulip = document.getElementById("btnTulip")     // 🌷
let btnBloom = document.getElementById("btnBloom")     // 🌸

let message = document.getElementById("message")
let prize = document.getElementById("prize")


let step = 1


let resetPuzzle = () => {
    step = 1
    btnSprout.style.backgroundColor = ""
    btnLeaf.style.backgroundColor = ""
    btnTulip.style.backgroundColor = ""
    btnBloom.style.backgroundColor = ""
    prize.style.display = "none"
}


let checkOrder = (event) => {
    console.log("Step " + step + ", clicked:", event.target)


    let correctButton = null

    if (step == 1) {
        correctButton = btnSprout
    }
    if (step == 2) {
        correctButton = btnLeaf
    }
    if (step == 3) {
        correctButton = btnTulip
    }
    if (step == 4) {
        correctButton = btnBloom
    }

    
    if (event.target == correctButton) {
        event.target.style.backgroundColor = "#c8e6a0"
        step = step + 1
        message.innerHTML = "Good! What grows next?"

        if (step > 4) {
            message.innerHTML = "You did it! The flower bloomed 🌸"
            prize.style.display = "block"
        }
    }
    else {
        resetPuzzle()
        message.innerHTML = "Oops! Start again from the beginning."
    }
}



btnSprout.addEventListener("click", checkOrder)
btnLeaf.addEventListener("click", checkOrder)
btnTulip.addEventListener("click", checkOrder)
btnBloom.addEventListener("click", checkOrder)
