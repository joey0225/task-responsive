let btn1= document.getElementsByClassName("close")[0]
let btn2= document.getElementsByClassName("open")[0]
let container= document.getElementsByClassName("container")[0]

btn2.addEventListener("click", function(){
    btn1.classList.remove("hide")
    container.classList.remove("hide")
    btn2.classList.add("hide")
})
btn1.addEventListener("click", function(){
    btn2.classList.remove("hide")
    container.classList.add("hide")
    btn1.classList.add("hide")
})