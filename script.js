const pixelsTag = document.querySelector("div.pixels")

document.addEventListener("scroll", function () {
    const pixels = window.pageYOffset

    pixelsTag.innerHTML = pixels
})

document.addEventListener("scroll", function () {
    const pixels = window.pageYOffset
})