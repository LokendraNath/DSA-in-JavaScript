//!  ========= #5 Searching Element ===========
/*
  // Manual
    const arr = [23,69, 44, 56, 76, 43, 69, 34, 35];
    let searchValue = 34;
    let index = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === searchValue) {
        index.push(i);
      }
    }
    console.log(index); //* [ 1, 6 ]

  // Built In

  console.log(arr.indexOf(searchValue))


//!  ========= #6 Merge Two Array (For Loop)(Not Sorted) ===========

// Manual
      const arr1 = [24, 54, 64, 77, 95, 97, 99];
      const arr2 = [7, 45, 78, 87, 89];
      const mergeArr2 = [];

      for (let i = 0; i < arr1.length; i++) {
        mergeArr2[i] = arr1[i];
      }

      for (let i = 0; i < arr2.length; i++) {
        mergeArr2[arr1.length + i] = arr2[i];
      }

      console.log(mergeArr2);
*/
//!  ========= #7 Merge Two Array (While Loop)(Sorted) ===========

const data1 = [24, 54, 64, 77, 95, 97, 99];
const data2 = [7, 45, 78, 87, 89];
let mergeArr3 = [];

let i = 0;
let j = 0;
let k = 0;

while (i < data1.length && j < data2.length) {
  if (data1[i] < data2[j]) {
    mergeArr3[k] = data1[i];
    i++;
  } else {
    mergeArr3[k] = data2[j];
    j++;
  }
  k++;
}

while (i < data1.length) {
  mergeArr3[k] = data1[i];
  i++;
  k++;
}
while (j < data2.length) {
  mergeArr3[k] = data2[j];
  j++;
  k++;
}

console.log(mergeArr3);
