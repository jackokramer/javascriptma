const elf = document.getElementById("elf")
const btn = document.getElementById("btn")

btn.addEventListener("click", duplicateElf)

function duplicateElf(){
        //elf.push('🧝‍♀️')
        elf.textContent +='🧝‍♀️'
        if(elf === 100){
            clear.textContent
        }
    }
    // Task:
   // - Write a function to duplicate the elf when the button is clicked.
   // - See index.css for optional styling challenges.


// Stretch goals:
// - Write a function to give the elves some tools, or a cup of tea!
// - Limit the total number of elves to 100.
