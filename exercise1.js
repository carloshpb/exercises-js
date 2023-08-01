function formatAMPM(date) {
    if(date != null && date instanceof Date && !isNaN(date)) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let ampm = (hours >= 12 && hours <= 23) ? "PM" : "AM";
        let convertedHour = (hours > 12 && hours <= 23) ? (hours - 12) : (hours == 24) ? 0 : hours;
        let addZeroLeft = (number) => (number >= 0 && number < 10) ? ("0" + number) : number;
        return "" + addZeroLeft(convertedHour) + " " + ampm + " : " + addZeroLeft(minutes) + " : " + addZeroLeft(seconds);
    } else {
        throw Error("date is not a Date type : " + date);
    }
    
}

let today = new Date(Date.now());
let day = today.getDay();
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
console.log("Today is: " + weekday[day]);
console.log("Current time is: " + formatAMPM(today));
