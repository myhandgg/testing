// burger icon
document.querySelector(".burger-icon").onclick = () =>{
    document.querySelector(".links").classList.toggle("show")
}

// bars event
let bars = document.querySelectorAll(".bar")

bars.forEach(function (ele) {
    ele.onclick = () =>{
        bars.forEach(function (ele) {
            ele.classList.remove("active")
        })
        ele.classList.add("active")
    }
})

// automatic moving bars

// moving image

let imageOne = document.querySelector(".boxes .box-two img")
let imageTwo = document.querySelector(".boxes .box-three img")

let leftArrow = document.querySelector(".our-projects .arrows .left-arrow")
let rightArrow = document.querySelector(".our-projects .arrows .right-arrow")

leftArrow.onclick = () => {
    imageOne.src = "images/we2.png"
    imageTwo.src = "images/we3.png"
}

rightArrow.onclick = () => {
    imageOne.src = "images/we1.png"
    imageTwo.src = "images/we1.png"
}

// contact inputs

let nameInput = document.querySelector(".input-box .name")
let numberInput = document.querySelector(".input-box .number")
let emailInput = document.querySelector(".input-box .email")
let messageBox = document.querySelector(".input-box .last-input")
let messageInput = document.querySelector(".input-box .last-input textarea")
let btn = document.querySelector(".send-now a")

btn.onclick = (e) =>{
    if (nameInput.value === ""){
        nameInput.style.borderBottom = "1px solid red"
    } else {
        nameInput.style.borderBottom = "1px solid #e6e7e8"
    }
    if (numberInput.value.match(/\d{11}/ig)){
        numberInput.style.borderBottom = "1px solid #e6e7e8"
    } else {
        numberInput.style.borderBottom = "1px solid red"
    }
    if (emailInput.value.match(/\w+@\w+.(com|org|net|info)/ig)) {
        emailInput.style.borderBottom = "1px solid #e6e7e8"
    } else {
        emailInput.style.borderBottom = "1px solid red"
    }
    if (messageInput.value === ""){
        messageInput.style.borderBottom = "1px solid red"
    } else {
        messageInput.style.borderBottom = "1px solid #e6e7e8"
    }
    if (!numberInput.value.match(/\d{11}/ig) || !emailInput.value.match(/\D+@\D+.(com|org|net|info)/ig) || nameInput.value === "" || messageInput.value === "") {
        e.preventDefault()
    } 
}

