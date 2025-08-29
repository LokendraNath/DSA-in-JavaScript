// Stack Data Strucure

// Push & Pop

let arr = []; // <-- Ye Khali Stack hai
let currentSize = arr.length;
let max = 5;

function Push(newValue) {
  if (currentSize >= max) {
    return console.error(
      "Abe Cart Full Ho gya Bsdk , Gand Mara Ye New Value Ka - " + newValue
    );
  }
  arr[currentSize] = newValue;
  currentSize++;
}
function Pop() {
  if (currentSize > 0) {
    currentSize -= 1;
    arr.length = currentSize;
  } else {
    console.error("Kuch Nhi hai BC");
  }
}

Push(20);
Pop();
console.log(arr);
