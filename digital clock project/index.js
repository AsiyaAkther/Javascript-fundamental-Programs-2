let hourSpan = document.querySelector(".hour");

function myClock(){
    let date = new Date();
    let hour,min = (date.getMinutes() < 10) ? "0" + date.getMinutes() : date.getMinutes(),
        sec = (date.getSeconds() < 10) ? "0" + date.getSeconds() : date.getSeconds(),
        m = (date.getHours() >= 12) ? "PM" : "AM";

    if(date.getHours() == 0){
        hour = 12;
    }else if(date.getHours() > 12){
        hour = date.getHours() - 12;
    }else{
        hour = date.getHours();
    }

    let currentTime = hour + ":" + min + ":" + sec;
    document.getElementsByClassName("hour")[0].innerHTML = currentTime;
    document.getElementsByClassName("m")[0].innerHTML = m;

    let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        todaysDate = date.getDate();
    let currentDate = day[date.getDay()] + " , " + month[date.getMonth()] + " " + todaysDate;

    document.getElementsByClassName("date")[0].innerHTML = currentDate;

    let year = date.getFullYear();
    document.getElementsByClassName("year")[0].innerHTML = year;
}

setInterval(() => {
    myClock();
}, 1000);