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