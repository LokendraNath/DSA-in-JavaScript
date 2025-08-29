// Push & Pop Method

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
Push(56);
Push(35);
Push(76);
Push(87);
Push(34); // <== Cart Is Full
Pop();
Pop();
Pop();
Pop();
Pop();
Pop(); // <== Cart Is Empty
console.log(arr);
