updateTime = () =>{
    var currentTime = new Date()
    var hourDay = fixNumber(currentTime.getHours()) + ':' + fixNumber(currentTime.getMinutes())
    const time = document.querySelector(".hour")
    time.innerHTML = hourDay
}

function fixNumber(number){
    if (number < 10){
        number = "0" + number
    }
    return number;
}
updateTime()
setInterval(updateTime, 10000)