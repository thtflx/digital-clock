/* // elements
const elHour = document.querySelector('#hour')
const elMinute = document.querySelector('#minutes')
const elSecond = document.querySelector('#seconds')
const elAmPm = document.querySelector('#ampm')

const elButton = document.querySelector('.btn')


// function
function updClock() {
    // convert to time
    let hour = new Date().getHours()
    let minutes = new Date().getMinutes()
    let seconds = new Date().getSeconds()
    let ampm = 'AM'

    // am/pm changing
    if (hour > 12) {
        hour = hour - 12
        ampm = 'PM'
    }


    // elements to convert to time
    elHour.innerHTML = hour
    elMinute.innerHTML = minutes
    elSecond.innerHTML = seconds
    elAmPm.innerHTML = ampm

    // page refreshing
    setTimeout(() => {
        updClock()
    }, 100)

}

// calling function
updClock()


// elButton.addEventListener('click', function() {
//     updClock()
// })

 */


// 1. find - elements :checked
// 2. create - a function :checked
// 3. in func :: convert to time :checked
// 4. in func :: am/pm changing :cancelled
// 5. in func :: elements to convert to time :checked
// 6. in func :: page refreshing
// 7. out func - calling function



const hourEL = document.querySelector('#hour')
const secondsEl = document.querySelector('#seconds')
const minutesEl = document.querySelector('#minutes')
const ampmEl = document.querySelector('#ampm')


function updatedTime() {
    let hour, seconds, minutes, ampm

    hour = new Date().getHours()
    seconds = new Date().getSeconds()
    minutes = new Date().getMinutes()
    ampm = 'AM'

    if (hour > 12) {
        hour = hour - 12
        ampm = 'PM'
    }

    hourEL.innerHTML = hour
    secondsEl.innerHTML = seconds
    minutesEl.innerHTML = minutes
    ampmEl.innerHTML = ampm

    setTimeout(() => {
        updatedTime()
    }, 1000)
}

updatedTime()