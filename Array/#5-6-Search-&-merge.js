//!  ========= #4 Searching Element ===========
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

*/
//!  ========= #5 Merge Two Array ===========

  // Manual
      const arr1 = [24, 54, 64, 23, 43];
      const arr2 = [23, 24, 32, 43, 54];
      const mergeArr = [];

      for (let i = 0; i < arr1.length; i++) {
        mergeArr[i] = arr1[i];
      }

      for (let i = 0; i < arr2.length; i++) {
        mergeArr[arr1.length + i] = arr2[i];
      }

      console.log(mergeArr);
