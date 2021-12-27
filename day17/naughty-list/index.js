const niceList = document.getElementById("nice-list")
const naughtyList = document.getElementById("naughty-list")
const btn = document.getElementById("btn")
 btn.addEventListener("click", sort)

function sort(){

/* MY SOLUTION
    if(sorteesArr.hasBeenGood === true){
        niceList.textContent += `${sorteesArr.name}`
    } else {
        naughtyList.textContent += `${sorteesArr.name}`
    }
    */
   //CORRECT SOLUTION
   let niceGirls = sorteesArr.filter(function(ella){
       return ella.hasBeenGood == true
   })

   let naughtBoyz = sorteesArr.filter(function(el){
        return el.hasBeenGood = false
   })

   for(let x= 0; x < niceGirls.length; x++){
       let listItems = ''
       listItems += `<li> ${niceGirls[x].name}</li>`
       niceList.innerHTML +=listItems
   }
   for(let x = 0; x< naughtBoyz.length; x++){
       let listItems = ''
       listItems += `<li> ${naughtBoyz[x].name}</li>`
       naughtBoyz.innerHTML += listItems
   }
}

const sorteesArr = [
    {
        name: "David",
        hasBeenGood: false
    },
    {
        name: "Del",
        hasBeenGood: true
    },
    {
        name: "Valerie",
        hasBeenGood: false
    },
    {
        name: "Astrid",
        hasBeenGood: true
    }
]

// Task:
// - Write the JavaScript to sort the people in sorteesArr into the naughty and nice lists, according to whether they have been good or not. Then display the names in the relevant place in the DOM.

// Stretch goals:
// - Add the option to add new names to the sorteesArr.
// - Make it possible to switch people to the other list.