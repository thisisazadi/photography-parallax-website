const pixelsTag = document.querySelector("div.pixels")
const bodyTag = document.querySelector("body")
const progressTag = document.querySelector("div.progress")
const section = document.querySelectorAll("section")
const clientTag = document.querySelector("div.client")
const pageTag = document.querySelector("div.page")
const headerTag = document.querySelector("header")

document.addEventListener("scroll", function () {
    const pixels = window.pageYOffset

    pixelsTag.innerHTML = pixels
})

document.addEventListener("scroll", function () {
    const pixels = window.pageYOffset
    const pageHeight = bodyTag.getBoundingClientRect().height
    const totalScrollableDistance = pageHeight - window.innerHeight

    const percentage = pixels / totalScrollableDistance

    progressTag.computedStyleMap.width = '${100 * percentage}%'
})

document.addEventListener("scroll", function () {
    const pixels = window.pageYOffset

    section.forEach(section => {
        if (section.offsetTop - 60 <= pixels) {
            clientTag.innerHTML = section.getAttribute("data-client")
            pageTag.innerHTML = section.getAttribute("data-page")

            if (section.hasAttribute("data-yellow")) {
                headerTag.classList.add("yellow")
                progressTag.classList.add("yellow")
            }else {
                headerTag.classList.remove("yellow")
                progressTag.classList.remove("yellow")
            }

        }
    })
})

document.addEventListener("scroll", function () {
    const topViewport = window.pageYOffset
    const midViewport = topViewport + (window.innerHeight/2)

    SpeechRecognitionResult.forEach(section => {
        const topSection = section.offsetTop
        const midSection = topSection + (section.offsetHeight/2)

        const distanceToSection = midViewport - midSection

        const parallaxTags = section.querySelectorAll('[data-parallax]')

        parallaxTags.forEach(tag => {
            const speed = parseFloat(tag.getAttribute("data-parallax"))
            tag.style.transform = 'translate(0, ${distanceToSection * 0.1}px)'
        })
    })
})