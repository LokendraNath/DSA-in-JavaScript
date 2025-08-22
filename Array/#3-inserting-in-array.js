// #3 Inserting Element
const arr = [40, 53, 65, 35, 54, 34, 65];

//? Manual
  const position = 3;
  let newNum = 69;

  console.log(arr); //* [40, 53, 65, 35,54, 34, 65]

  for (let i = arr.length - 1; i >= 0; i--) {
    if (i >= position) {
      arr[i + 1] = arr[i];
      if (i === position) {
        arr[i] = newNum;
      }
    }
  }
  console.log(arr); //* [40, 53, 65, 69,35, 54, 34, 65]

//? With BuiltIn Function => Splice(position,deleteCount,InsertValue)

  const arr2 = [23, 43, 56, 32, 24];
  console.log(arr2); //* [ 23, 43, 56, 32, 24 ]
  arr2.splice(3, 0, 69);
  console.log(arr2); //* [ 23, 43, 56, 69, 32, 24 ]
