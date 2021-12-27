const body = document.getElementById("body")
const greeting = document.getElementById("greeting")
const christmasBtn = document.getElementById("christmas")
christmasBtn.addEventListener("click", christmasFy)

const snowBtn = document.getElementById("snow")
snowBtn.addEventListener('click', snowify)

// Task:
//- Add the functionality to switch the theme between 'Christmas' and 'snow'.
function christmasFy(){
    body.classList.remove('snow')
    body.classList.add('christmas')
    greeting.innerHTML = "It's christmas!!!"
}

function snowify(){
    body.classList.remove('christmas')
    body.classList.add('snow')
    greeting.innerHTML = "☃️ let it snow leet it snow!!! ❅"
}

// Stretch goals:
// - Add more themes!
// - Allow the user to customise the themes.
// - Turn the radio buttons into a toggle switch.