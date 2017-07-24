
console.log("Hello");
alert("Hello");

//How many hours are there in a year?

var weekHours = 24 * 7;
var monthHours = weekHours * 4;
var yearHours = monthHours * 12;

console.log("Hour in a Year : " + yearHours);

//How many minutes are there in a decade?

var minutesDay = 60 * 24;
var minutesMonth = minutesDay * 4;
var minutesYear = minutesMonth * 12;
var minutesDecade = minutesYear * 10;

console.log("Minutes in a Decade :"+minutesDecade);


//How many seconds old are you?

var secondsDay = minutesDay * 60;
var secondsMonth = secondsDay * 4;
var secondsYear = secondsMonth * 12;
var secondsOld = secondsYear * 36;

console.log("Im "+ secondsOld + " Seconds old");

//If Bob is 1246 million seconds old, how old is Bob in years?

var ysBob = 124600000;
var bobYears = ysBob / secondsYear;

console.log("Bob is "+bobYears+" years old");

//-------------------- task2 ---------------------------------


var firstName = prompt("Please enter you firts name")

var secondName = prompt("Please enter you last name")

function fullName(firstName,secondName){
    console.log( firstName+" "+ secondName);
}

fullName(firstName,secondName)

//-------------------- task4 ----------------------------------














