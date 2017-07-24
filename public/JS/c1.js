'use strict'

let h1 = document.getElementById("heading")

console.log("h1: ", h1);
console.log("h1 id ", h1.id);
console.log("h1 style's color", h1.style.color);
console.log("h1 innerText ", h1.innerText);


h1.style.color = "blue"

let h1 = document.getElementsByTagName("h1")[0]

h1.className = "milestone"
console.log("h1 with class name",h1)

let items = document.getElementsByClassName("item")

console.log("items: ", items);
/*console.log("item 0: ", items[0]);
console.log("item 0's innerHTML: ", items[0].innerHTML.toUpperCase());
console.log("item 1's innerHTML: ", items[1].innerHTML);
console.log("item 2's innerHTML: ", items[2].innerHTML); */

for (let i = 0 ; i < items.length ; i++){
  let item = items[i]
  console.log(item.innerHTML.toUpperCase())

}





