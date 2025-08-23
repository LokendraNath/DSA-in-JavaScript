//!  ========= #4 Searching Element ===========

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


//!  ========= #5 Merge Element ===========