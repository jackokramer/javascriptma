const countDownDisplay = document.getElementById('countdown-display')

function renderCountdown(){
    const christmas = 25
    const todayDate = new Date().getDate()
    let remainingTime = christmas - todayDate
    countDownDisplay.innerHTML =  remainingTime
    // Task get today's date (only need the day)
    // calculate the remaining days.
    // display the remaining days in the countdownDisplay
}

renderCountdown()