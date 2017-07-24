'use strict'

console.log("Hello");
alert("Hello");

//How many hours are there in a year?

let weekHours = 24 * 7;
let monthHours = weekHours * 4;
let yearHours = monthHours * 12;

console.log("Hour in a Year : " + yearHours);

//How many minutes are there in a decade?

let minutesDay = 60 * 24;
let minutesMonth = minutesDay * 4;
let minutesYear = minutesMonth * 12;
let minutesDecade = minutesYear * 10;

console.log("Minutes in a Decade :"+minutesDecade);


//How many seconds old are you?

let secondsDay = minutesDay * 60;
let secondsMonth = secondsDay * 4;
let secondsYear = secondsMonth * 12;
let secondsOld = secondsYear * 36;

console.log("Im "+ secondsOld + " Seconds old");

//If Bob is 1246 million seconds old, how old is Bob in years?

let ysBob = 124600000;
let bobYears = ysBob / secondsYear;

console.log("Bob is "+bobYears+" years old");

//-------------------- task2 ---------------------------------


let firstName = prompt("Please enter you firts name")

let secondName = prompt("Please enter you last name")

function fullName(firstName,secondName){
    console.log( firstName+" "+ secondName);
}

fullName(firstName,secondName)

//-------------------- task4 ----------------------------------

let number = [1,2,3,4,5,6,7,8,9,10]

for(let i = 0 ; i <= number.length ; i++){
  console.log(number[i])
}


number.forEach((i)=> {
   console.log(i) 
}, this);


number.forEach((i)=>{
  if(i > 5){
  console.log(i)
  }
},this);

number.push(11)

for(let i = 0 ; i <= number.length ; i++){
  console.log(number[i])
}

function invert(arr){
  console.log(arr.slice().reverse());
}

invert(number)

let bigNumbers = [100,200,300,400,500]

let allNumber = number.concat(bigNumbers);

for(let i = 0 ; i <= allNumber.length ; i++){
  console.log(allNumber[i])
}

invert(allNumber);

//------------------------ B1 ------------------------------

let myDog = {
  "name":"vigo",
  "legs":6,
  "tails":7,
  "friends":["all"]
};


let rating = {};

rating["biber"] = 0;
rating["Charlie"] = 7;
rating["Drake"] = 8;
rating["White"] = 10;

console.log(Object.keys(rating));
console.log(Object.values(rating));

//------------------------ B2 -------------------------------


let justin = {"name":"Justin","age":23}
let selena = {"name":"Selena","age":24}
let victor = {"name":"Victor","age":27}
let james = {"name":"James","age":47}

function toSentence(obj){
 return `${obj.name} is ${obj.age} years old.`
}

console.log(toSentence(justin))
console.log(toSentence(selena))
console.log(toSentence(victor))
console.log(toSentence(james))


