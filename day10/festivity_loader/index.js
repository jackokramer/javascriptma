const meter = document.getElementById("meter")
const today = new Date().getDate()
const Christmas = 25
console.log(today)
// Task:
// Write a function to wire up the festivity loader to reflect how many days are remaining until Christmas!
function loadFestivity(){
    meter.value = today
}

loadFestivity()
// Stretch goals:
// - Animate the loader.
// - Change the colors depending on the meter's value.
