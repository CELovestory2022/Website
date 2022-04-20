 // Welcome Message
    //  var name = prompt("Please enter your name");
    //  var firstLetter = name.slice(0,1);
    //  firstLetter01 = firstLetter.toUpperCase();
    //  var restOfName = name.slice(1, name.length);
    //  restOfName02 =  restOfName.toLowerCase();
    //  var nameUpdate = firstLetter01 + restOfName02;
    //  alert("Hello " + nameUpdate + "! Welcome to CELovestory 2022.");


// Count down timer

const countdown = () => {
 const countDate = new Date("April 30, 2022 00:00:00");
 const now = new Date();
 const gap = countDate - now;
 console.log(now);

// Break down time from milisecs 
const seconds = 1000;
const minutes = seconds * 60;
const hours = minutes * 60; 
const day = hours * 24;

// calculate

const textDay = Math.floor(gap/day);
const textHour = Math.floor((gap % day)/hours);
const textMinute = Math.floor((gap % hours)/minutes);
const textSecond = Math.floor((gap % minutes)/seconds);
console.log(textMinute);

// link js to HTML
if(gap<=0){
document.querySelector(".clock").innerText = "Happy Married Life!"
}


document.querySelector(".days").innerText= textDay;
document.querySelector(".hours").innerText= textHour;
document.querySelector(".minutes").innerText= textMinute;
document.querySelector(".seconds").innerText=textSecond;

}

setInterval(countdown,1000);