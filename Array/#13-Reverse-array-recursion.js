let data = [24, 35, 43, 54, 65, 69];
let temp;

function manualReverse(arr, start, end) {
  if (start <= end) {
    temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    manualReverse(data, start + 1, end - 1);
  }
}
manualReverse(data, 0, data.length - 1);
console.log(data); //==> [ 69, 65, 54, 43, 35, 24 ]
