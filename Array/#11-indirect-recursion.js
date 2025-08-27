let money = 1000;
let totalBanana = 0;

function buyBanana(x) {
  if (x > 0) {
    console.log(`I have ${x}Rs. And ${totalBanana} Banana`);
    buyMore(x);
  } else {
    console.log("I don't have Money", totalBanana);
  }
}

function buyMore(x) {
  totalBanana++;
  buyBanana(x - 100);
}
buyBanana(money);
