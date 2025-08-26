//! Array Sorting

let arr1 = [756, 676, 876, 476, 976];

for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr1.length; j++) {
    console.log(arr1);
    if (arr1[j] > arr1[j + 1]) {
      let temp = arr1[j];
      arr1[j] = arr1[j + 1];
      arr1[j + 1] = temp;
    }
  }
}
console.log(arr1); // => [ 476, 676, 756, 876, 976 ]
