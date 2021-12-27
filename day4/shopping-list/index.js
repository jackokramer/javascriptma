const items = ["Candles", "Decorations", "Chocolate"]
const checklist = document.getElementById("checklist")

// Task:
// - For each item in the items array, create a div with a class of "checklist-item", which contains a checkbox input and corresponding label.
// - Make sure that the shopping list can render a checkbox for all the items, even if new items are added to the items array.
function itemList(){
    for(let x = 0; x< items.length; x++){
    checklist.innerHTML +=
    `<div class="checklist-item">
    <input type="checkbox" id="${items[x]}" value="${items[x]}"/>
        <label for="${items[x]}" class="strikethrough">${items[x]}</label>
        </div>`
        }
}

itemList()
// Stretch goals:
// - Add an input which allows the user to add more items.
// - Add a delete button for the items.

