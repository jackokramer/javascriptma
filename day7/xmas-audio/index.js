document.getElementById("play-btn")
document.getElementById("pause-btn").addEventListener('click', pause)
document.getElementById("stop-btn").addEventListener('click', stop)
const playPauseIcon = document.getElementById('play-pause-icon')
const audio = new Audio('bells.mp3')
const isPaused = false

function play(){
    audio.play()
}

function pause(){
    if(isPaused === false){
    audio.pause()
    isPaused = true
    playPauseIcon.textContent = 'play_arrow'
    } else{
        play()
        isPaused = false
        playPauseIcon.textContent = 'pause'
    }
}

function stop(){
    audio.pause()
    audio.currentTime = 0
}

// Task:
// - Add the functionality to play, pause and stop the jingling bells (bells.mp3).

// Stretch goals:
// - Add volume controls.
// - Allow the user to select different sounds.
