
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

var number = [1,2,3,4,5,6,7,8,9,10]

for(i = 0 ; i <= number.length ; i++){
  console.log(number[i])
}


number.forEach(function(i) {
   console.log(i) 
}, this);


number.forEach(function(i){
  if(i > 5){
  console.log(i)
  }
},this);

number.push(11)

for(i = 0 ; i <= number.length ; i++){
  console.log(number[i])
}

function invert(arr){
  console.log(arr.slice().reverse());
}

invert(number)

bigNumbers = [100,200,300,400,500]

allNumber = number.concat(bigNumbers);

for(i = 0 ; i <= allNumber.length ; i++){
  console.log(allNumber[i])
}

invert(allNumber);

//------------------------ B1 ------------------------------

var myDog = {
  "name":"vigo",
  "legs":6,
  "tails":7,
  "friends":["all"]
};


var rating = {};

rating["biber"] = 0;
rating["Charlie"] = 7;
rating["Drake"] = 8;
rating["White"] = 10;

console.log(Object.keys(rating));
console.log(Object.values(rating));

//------------------------ B2 -------------------------------












