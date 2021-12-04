// const productItemElement= document.querySelectorAll(".products_item")

// const productButtonElements=document.querySelectorAll(".products_item button")

// productButtonElements.forEach(element =>{
//     element.addEventListener("click", event =>{
//         productItemElement.forEach(e =>e.classList.remove(".active"))
//        if (event.target.className= "boots_button"){
//            event.path[1].classList.add("active")
//        }
//        else{
//         event.path[2].classList.add("active")
//        }
//     })
// })


























































const productItemElements = document.querySelectorAll(".products_item")

const productButtonElements = document.querySelectorAll(".products_item button")

const firstButtonElement=document.querySelector("#first")
const secondButtonElement=document.querySelector("#second")
const threeButtonElement=document.querySelector("#third")
const fourthButtonElement=document.querySelector("#fourth")


productButtonElements.forEach(element => {
    element.addEventListener('click', event => {
        const activeElements = document.querySelectorAll('.active')
        activeElements.forEach(e => {
            e.classList.remove('active')
            e.classList.add('sekin')
            setTimeout(() => {
                e.classList.remove('sekin')
            }, 1000)
        })
        if(event.target.className == "boots_button"){
            event.path[1].classList.add('active')
        } else {
            event.path[2].classList.add('active')
        }
    })
})

firstButtonElement.addEventListener("click",event =>{
    const backImageELement=document.querySelector("#back")

    const backPictureElement=document.querySelector(".back-image")
    
    backImageELement.style.backgroundImage='url("./assets/img/tttt.png")'
    backImageELement.style.width="320px"
    backImageELement.style.height="400px"
    backImageELement.style.backgroundSize="contain"
    backImageELement.style.backgroundRepeat="no-repeat"
    
    backPictureElement.style.width='0'
})

secondButtonElement.addEventListener("click",event =>{
    const backImageELement=document.querySelector("#back")

    const backPictureElement=document.querySelector(".back-image")
    
    backImageELement.style.backgroundImage='url("./assets/img/www.png")'
    
    backImageELement.style.backgroundSize="contain"
    backImageELement.style.backgroundRepeat="no-repeat"
    backImageELement.style.width="320px"
    backImageELement.style.height="400px"
    backPictureElement.style.width='0'
})

threeButtonElement.addEventListener("click",event =>{
    const backImageELement=document.querySelector("#back")

    const backPictureElement=document.querySelector(".back-image")
    
    backImageELement.style.backgroundImage='url("./assets/img/eee.png")'
    
    backImageELement.style.backgroundSize="contain"
    backImageELement.style.backgroundRepeat="no-repeat"
    backImageELement.style.width="320px"
    backImageELement.style.height="400px"
    backPictureElement.style.width='0'
})


fourthButtonElement.addEventListener("click",event =>{
    const backImageELement=document.querySelector("#back")

    const backPictureElement=document.querySelector(".back-image")
    
    backImageELement.style.backgroundImage='url("./assets/img/rrr.png")'
    
    backImageELement.style.backgroundSize="contain"
    backImageELement.style.backgroundRepeat="no-repeat"
    backImageELement.style.width="320px"
    backImageELement.style.height="400px"
    backPictureElement.style.width='0'
})