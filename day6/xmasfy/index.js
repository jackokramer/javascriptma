const greeting = document.getElementById("greeting")
const christmassifierBtn = document.getElementById("christmassifierBtn")
christmassifierBtn.addEventListener("click", christmassifyName)

function christmassifyName() {
  greeting.classList.toggle('christmassified')
  if(christmassifierBtn.innerText === "Christmassify"){
    christmassifierBtn.innerText = "De-christmassify"
  } else{
    christmassifierBtn.innerText ==="Christmassify"
  }
   // Task:
  // - Add christmassify class to greeting.
  //const xmassClass = document.createClass('christmassified')
  //greeting.innerHTML =  xmassClass //'🎄Merry Christmas 🎅🏾 🎄'
  //greeting.style.fontFamily = "Mountains of Christmas, cursive"
  //- Check whether christmassifierBtn has christmassify on it. If so, change text to "De-christmassify", if not, change text to "Christmassify"
  window.addEventListener("DOMContentLoaded", event =>{
    const audio = document.querySelector('audio');
    audio.volume = 0.2;
    audio.play()
  })
}

// Stretch goals:
// - Play Christmas music when Christmas class is added.
// - Remove the Christmas class after a given time.

