const greetingDisplay = document.getElementById("greeting-display")
const btn = document.getElementById("btn")
btn.addEventListener("click", writeGreeting)

const bauble = document.getElementById("bauble")
const addGreeting = document.getElementById("add-greeting")

const greetings = [
    "Santa Claus is coming to town!",
    "We wish you a Merry Christmas!",
    "Happy holidays!",
    "Ho, ho, ho! Merry Christmas!",
    "Jingle all the way!",
]

// Task:
// Write a function to display a random greeting in the card.

function writeGreeting(){
   let randomNum = Math.ceil(Math.random()* greetings.length)-1
   greetingDisplay.innerText = greetings[randomNum]
}
    //btn.greeting.display.style = 'none'

writeGreeting()
console.log(greetings)
// Stretch goals:
// - Allow the user to input to and from names.
// - Add an input for custom messages.

const btnSecond = document.getElementById('btn-second')
btnSecond.addEventListener("click", function(){
    const greetingInput = document.getElementById('add-greeting')
    console.log(greetingInput.value)
    if(greetingInput.value){
    greetings.push(greetingInput.value)
    greetingInput.value = ''
    greetingDisplay.innerHTML = ""
    console.log(greetings)
    }
})