const btn = document.getElementById("btn")
let food = document.getElementById("food")
let result = document.getElementById('result')
let guests = 0

btn.addEventListener('click', function(){
    const isVeggie = document.getElementById('vegetarian-input').checked
    const isGluetenfree = document.getElementById('glueten-free-input').checked
    const numOfGuests = document.getElementById('num-input').value

    if(isVeggie === true){
        food.textContent = 'nut roast 🌰'
    } else if(isGluetenfree === true){
        food.textContent = '🥕 carrots and salad for you 🥗'
    } else if(numOfGuests < 5){
        food.textContent = 'turkey 🦃'
    }
     else {
        food.textContent = ' goose 🦢'
    }
})

// Tasks:
// - Write the JS to decide the perfect Christmas dinner and render it in the result element. Don't forget to check whether the meal should be vegetarian!

// Dinner suggestions (or choose your own!):
// Vegetarian: nut roast
// 4 people or less: turkey
// 5+ people: goose

// Stretch goals:
// - Add more dietary options.
// - Show recipes when the meal has been selected.

