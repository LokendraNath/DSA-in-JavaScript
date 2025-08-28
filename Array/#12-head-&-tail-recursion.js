function test(x) {
  console.log(x); //=> 10 - 0 (head)
  if (x > 0) {
    test(x - 1);
  }
  //   console.log(x);            //=> 0 - 10 (Tail)
}
test(10);
