const open = document.querySelector(".open")
const close = document.querySelector(".close")
const leftbar = document.querySelector(".left_bar")

open.addEventListener("click", () => {
    leftbar.classList.toggle("width")
    open.classList.toggle("animateOpen")
    close.classList.toggle("animateClose")
})

close.addEventListener("click", () => {
    leftbar.classList.toggle("width")
    open.classList.toggle("animateOpen")
    close.classList.toggle("animateClose")
}) 