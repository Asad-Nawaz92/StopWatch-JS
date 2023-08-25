var minutes = 0
var seconds = 0
var miliSeconds = 0

var getMins = document.getElementById('min')
var getSecs = document.getElementById('sec')
var getMilisecs = document.getElementById('ms')

var interval;

function start() {
    interval = setInterval(function () {
        miliSeconds++
        getMilisecs.innerHTML = miliSeconds
        if (miliSeconds >= 100) {
            seconds++
            getSecs.innerHTML = seconds
            miliSeconds = 0
        }
        else if (seconds >= 60) {
            minutes++
            getMins.innerHTML = minutes
            seconds = 0
        }
    }, 10)
    document.getElementById('disabled').disabled = true 
}

function pause() {
    clearInterval(interval)
    document.getElementById('disabled').disabled = false
}

function reset() {
    minutes = 0
    seconds = 0
    miliSeconds = 0
    
    clearInterval(interval)

    getMins.innerHTML = minutes
    getSecs.innerHTML = seconds
    getMilisecs.innerHTML = miliSeconds
    document.getElementById('disabled').disabled = false

}