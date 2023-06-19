// burger icon
document.querySelector(".burger-icon").onclick = () =>{
    document.querySelector(".links").classList.toggle("show")
}

// bars event
let bars = document.querySelectorAll(".bar")

let activeBar = document.querySelector(".active")
let barOne = document.querySelector(".one")
let barTwo = document.querySelector(".two")
let barThree = document.querySelector(".three")

bars.forEach(function (ele) {
    ele.onclick = () =>{
        bars.forEach(function (ele) {
            ele.classList.remove("active")
        })
        ele.classList.add("active")
    }
})

// automatic moving bars