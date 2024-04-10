//sekecting ythe neccesary elements
let modal = document.querySelector(".modal")
let contact = document.querySelector("#contact")
let closeButton = document.querySelector(".modal > button")

console.log(contact)
contact.addEventListener("click", ()=>{
    modal.style.display="block"
} )

closeButton.addEventListener("click", ()=>{
    modal.style.display="none"
} )
