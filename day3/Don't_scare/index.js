const greeting = document.getElementById("greeting")
const btn = document.getElementById("btn")
const span1 = document.getElementById('span1')
const span2 = document.getElementById('span2')
btn.addEventListener('click', fix)

function fix() {
  // Task:
  // - Write a function to fix the UI problems with this Christmas message (make it Christmassy!)
  // - Run the function when the Fix button is clicked.
  greeting.innerHTML = '☃️ Merry Xmas 🎅🏾'
  greeting.style.fontFamily = "Mountains of Christmas, cursive"
  span1.textContent = "🎅🏾"
  span2.textContent = "☃️"

}


//Stretch goals:
// - Add an extra theme, and the option to switch between them.
// - Change the message and theme to a New Year’s one automatically on December 31st.







