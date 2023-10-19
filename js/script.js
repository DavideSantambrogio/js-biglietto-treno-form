// Dati
const rate = 0.21

const username = document.getElementById("name");
console.log(username);

const km = document.getElementById("km");
console.log(km);

const age = document.getElementById("age");
console.log(age);


// Logica

const originalPrice = km * rate;
console.log(originalPrice)

if (age<=18) {
    discount = (originalPrice * 0.2)
    finishedPrice = (originalPrice - discount)}
    else {
        discount = (0)
        finishedPrice = (originalPrice - discount)};

console.log(discount, finishedPrice)

if (age>=65) {
    discount = (originalPrice * 0.4)
    finishedPrice = (originalPrice - discount)}
  
console.log(discount, finishedPrice)

const price = (finishedPrice).toFixed(2)

console.log(price)

