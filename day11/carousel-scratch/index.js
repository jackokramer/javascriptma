const slides = document.getElementsByClassName('carousel-item')
let slidePos = 0
const totalSlides = slides.length

document.getElementById('carousel-button-prev').addEventListener('click', movetoPrev)
document.getElementById('carousel-button-next').addEventListener('click', movetoNext)

function hideAllSlides(){
    for(let slide of slides){
        slide.classList.remove('carousel-item-visible')
        slide.classList.add('carousel-item-hidden')
        /*if(slide === "carousel-item-visble"){
            slide = 'carousel-item-hidden'
        }*/
    }
}

function movetoNext(){
    hideAllSlides()
    if(slidePos === totalSlides-1){
        slidePos = 0;
    } else {
    slidePos++
}

    slides[slidePos].classList.add('carousel-item-visible')
}

function movetoPrev(){
    console.log('move to the previous slide')
    hideAllSlides()
    if(slidePos ===  0){
        slidePos = totalSlides -1
    } else {
        slidePos--
    }
    slides[slidePos].classList.add('carousel-item-visible')
}

