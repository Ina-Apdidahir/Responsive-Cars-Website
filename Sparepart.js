

let buttom = document.querySelector(".toogle");
let body = document.querySelector("body");

buttom.addEventListener("click", ()=>{
    body.classList.toggle("dark");
})

let tog_btn = document.querySelector(".Togle");

tog_btn.addEventListener("click", ()=>{
    body.classList.toggle("dark")
})


let Nav_side = document.querySelector(".Nav-side")
let close = document.querySelector(".ri-close-line")
let Menu = document.querySelector(".ri-menu-line")

close.addEventListener("click", ()=>{
    Nav_side.style.display = "none"
})
Menu.addEventListener("click", ()=>{
    Nav_side.style.display = "block"
})


let serchBox = document.querySelector(".hed-serch-box")
document.querySelector(".ri-search-line").onclick = ()=> {
    serchBox.classList.toggle("active")
};




// let Body = document.querySelector("body");
// let Tog_buttom = document.querySelector(".theme");
