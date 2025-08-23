//todo =>  Array traversing aur accessing ka matlab hai — array ke har element ko ek-ek karke dekhna aur us element ko uske index ke through use karna. ✅

// #2 Traversing And Accessing
const numbers = [10, 20, 30, 40, 50];

// 1. For loop se traversing
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// 2. For...of loop se traversing
for (const num of numbers) {
  console.log(num);
}

// 3. forEach method se traversing
numbers.forEach((num) => {
  console.log(num);
});
