console.log('this is a clock');

function updateClock(){
    //Get the current date
    let time = new Date();

    //Extract hour , minutes and second
    let currentHours = time.getHours();
    let currentMinutes = time.getMinutes();
    let currentSeconds = time.getSeconds();

    //pad 0 if minure or second is less then 10(single digit)
    currentMinutes=(currentMinutes<10)?"0":""+ currentMinutes;
    currentSeconds=(currentSeconds<10)?"0":""+currentSeconds;

//chose Am/PM as per time of the day
let timeOfDay = (currentHours < 12) ? 'Am' : 'Pm';

    //convert railway to AM/PM
    currentHours=(currentHours==0)? 12 : currentHours;
    let curretTimeStr = currentHours + ":" + currentMinutes + ":" + currentSeconds + ":" + timeOfDay;
    

    //prepare time string from hours, minutes and seconds
    currentHours=(currentHours>12)? currentHours-12 : currentHours;
    
    //Insert time string inside the dom
    document.getElementById('clock').innerHTML = curretTimeStr;
}
