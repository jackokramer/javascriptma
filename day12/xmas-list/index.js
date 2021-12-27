const input = document.getElementById("input")
const btn = document.getElementById("btn")
const btnRemove = document.getElementById("btn-remove")
let guestList = document.getElementById("guest-list")
let guests = ["Partner", "Nice Relative 1", "Nice Relative 2", "Evil Relative", "Lonely Neighbour"]
btn.addEventListener("click", function() {
    guests.push(input.value)
    renderList()
})
btnRemove.addEventListener('click', function(guest){
    if(guest.target.classList.contains("guest-list")){
        guestList.removeChild(guest.target.parentElement)
        guestList.removeChild(guests)
    }
})



function renderList (){
    let listItems = '<li> Me</li> <li>Mom</li> <li>Mbappe</li>'
    for(let x = 0; x<guests.length; x++) {
        listItems += `<li>
            ${guests[x]}
        </li>`
        guestList.innerHTML = listItems
    }
}

renderList()

// Tasks:
// - Write the JS to render the Christmas day guest list in the guest-list element.
// - Add the functionality to add new guests.

// Stretch goals:
// - Add a button to remove the most recently added guests.
// - What about if you want to remove the evil relative?


