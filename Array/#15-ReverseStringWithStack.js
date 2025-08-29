//! Reverse String With Stack

//? With Manual Way
let array = [];
let currentSize = array.length;

function push(newVal) {
  array[currentSize] = newVal;
  currentSize++;
}

function pop() {
  if (currentSize > 0) {
    let lastRemovedItem = array[currentSize - 1];
    currentSize--;
    array.length = currentSize;
    return lastRemovedItem;
  }
}

function reverseString(item) {
  for (let i = 0; i < item.length; i++) {
    push(item[i]);
  }
  for (let i = 0; i < item.length; i++) {
    item[i] = pop();
  }
}

let str = "Lokendra Verma";
str = str.split("");
reverseString(str);
console.log("Manual Way In 👇");
console.log(str.join("")); // amreV ardnekoL

//? With Built In Method
console.log("Built In 👇");
console.log("Lokendra Verma".split("").reverse().join("")); // amreV ardnekoL
