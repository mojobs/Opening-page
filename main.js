const currentDayElement = document.getElementById('dayoftheweek');
const currentTimeElement = document.getElementById('current-time');
const date = new Date();
let day = date.getDay();
let hours = date.getUTCHours();
let minutes = date.getUTCMinutes();
let ms = date.getUTCMilliseconds();
currentTimeElement.textContent = ms;

function toGetDaysOfWeek() {
    if(day==0){
        currentDayElement.textContent = 'Sunday';
    }
    if(day==1){
        currentDayElement.textContent = 'Monday';
        
    }
    if(day==2){
        currentDayElement.textContent = 'Tuesday';
    } 
    if(day==3){
        currentDayElement.textContent = 'Wednesday';
    }    
    if(day==4){
        currentDayElement.textContent = 'Thursday';
    }
    if(day==5){
        currentDayElement.textContent = 'Friday';
    }    
    if(day==6){
        currentDayElement.textContent = 'Saturday';
    } 
    return;          
}

toGetDaysOfWeek();