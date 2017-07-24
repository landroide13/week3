
console.log("Hello");
alert("Hello");

//How many hours are there in a year?

var weekHours = 24 * 7;
var monthHours = weekHours * 4;
var yearHours = monthHours * 12;

console.log("Hour in a Year : " + yearHours);

//How many minutes are there in a decade?

var minutesDay = 60 * 24;
var MinutesMonth = minutesDay * 4;
var MinutesYear = MinutesMonth * 12;
var MinutesDecade = MinutesYear * 10;

console.log("Minutes in a Decade :"+MinutesDecade);


//How many seconds old are you?

var SecondsDay = minutesDay * 60;
var SecondsMonth = SecondsDay * 4;
var SecondsYear = SecondsMonth * 12;
var SecondsOld = SecondsYear * 36;

console.log("Im "+ SecondsOld + " Seconds old");

//If Bob is 1246 million seconds old, how old is Bob in years?

var secondsOldBob = 124600000;
var BobYears = SecondsOldBob / SecondsYear;

console.log("Bob is "+BobYears+" years old");

//-------------------- task2 ---------------------------------


var firstName = prompt("Please enter you firts name")

var secondName = prompt("Please enter you last name")

function fullName(firstName,secondName){
    console.log( firstName+" "+ secondName);
}

fullName(firstName,secondName)

//-------------------- task4 ----------------------------------














