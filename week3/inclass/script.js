        let thisPage = document.getElementById("docBody")
         
        let colorBtn = document.getElementById("colorChange")
        let textBtn = document.getElementById("addText")
        let toggleBtn = document.getElementById("toggleBtn")
        let imgTT = document.getElementById("imageToToggle")

        let changingColor = () => {
            let redC = Math.random() * 255
            let greenC = Math.random() * 255
            let blueC = Math.random() * 255

             thisPage.style.backgroundColor = "rgb(" + redC + ", " + greenC + ", " + blueC + ")"
        }

        let addingText = () => {
            console.log("firing")
            let textRecepticle = document.getElementById("textArea")
            
            let newElem = document.createElement("p")
            console.log(newElem)
            newElem.innerHTML = "Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are co nnected, you and I. We're on the same curve, just on opposite ends."

            textRecepticle.appendChild(newElem)
        }
        
        let togglingImage = (event) => {
            console.log(event.target)

            if(event.target == imgTT){
                console.log("Clicked Image")
            }
            
            
            
            if(imgTT.alt == "First Quokka Image"){
                imgTT.alt = "Second Quokka Image"
                imgTT.src = "images/quokka2.webp"
            }
            else {
                imgTT.alt = "First Quokka Image"
                imgTT.src = "images/quokka1.webp"
            }
            
        
            //console.log(imgTT)
        }
        
        console.log(imgTT) 
        
        imgTT.addEventListener("click", togglingImage)
        colorBtn.addEventListener("click", changingColor)
        textBtn.addEventListener("click", addingText)  
        toggleBtn.addEventListener("click", togglingImage)
