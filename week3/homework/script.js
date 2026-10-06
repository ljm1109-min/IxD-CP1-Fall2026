
let bigImage = document.getElementById("bigImage")

let thumb1 = document.getElementById("thumb1")
let thumb2 = document.getElementById("thumb2")
let thumb3 = document.getElementById("thumb3")
let thumb4 = document.getElementById("thumb4")

let playBtn = document.getElementById("playBtn")
let pauseBtn = document.getElementById("pauseBtn")

let currentNumber = 1
let intervalId = null

let showImage = (event) => {
    console.log(event.target)

    bigImage.src = event.target.src
    bigImage.alt = event.target.alt

    if (event.target == thumb1) {
        currentNumber = 1
    }
    if (event.target == thumb2) {
        currentNumber = 2
    }
    if (event.target == thumb3) {
        currentNumber = 3
    }
    if (event.target == thumb4) {
        currentNumber = 4
    }
}

    let nextImage = () => {
    currentNumber = currentNumber + 1

    if (currentNumber > 4) {
        currentNumber = 1
    }
    bigImage.src = "images/flower" + currentNumber + ".webp"
    bigImage.alt = "flower " + currentNumber
    console.log("Now showing flower " + currentNumber)
}

let stopSlideshow = () => {
    clearInterval(intervalId)
    intervalId = null

    
}
 
let startSlideshow = () => {
    // MDN ??=)
    if (intervalId == null) {
        intervalId = setInterval(nextImage, 2000)
    }
}


thumb1.addEventListener("click", showImage)
thumb2.addEventListener("click", showImage)
thumb3.addEventListener("click", showImage)
thumb4.addEventListener("click", showImage)

playBtn.addEventListener("click", startSlideshow)
pauseBtn.addEventListener("click", stopSlideshow)

startSlideshow()