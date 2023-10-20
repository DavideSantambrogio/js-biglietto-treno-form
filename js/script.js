
const send = document.getElementById("send");
send.addEventListener("click", function(event) { 
    event.preventDefault();
// Dati
    const rate = 0.21

    const username = document.getElementById("username").value;
    console.log(username);

    const km = document.getElementById("km").value;
    console.log(km);

    const age = document.getElementById("age").value;
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

})


const clear = document.getElementById("clear");
clear.addEventListener("click", function(event) { 
    event.preventDefault();
    
    username.value = ""
    km.value = ""
    age.value = ""
    
})








