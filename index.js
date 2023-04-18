// N1
// let surname = prompt("Please enter surname");
// let fname = prompt("Please enter name");
// let email = prompt("Please enter email");
// function result() {
//     alert("*" + email + "*" + "-"+ " " + "*" + surname + "*" + " " + "*" + fname + "*" + " "  );
// }
// result();

// N2
// const fixPrice = 5;
// const addPrice = 0.25;
// let lengthWhithProsent = 0;
// let km = +prompt("Please enter road length in kilometers for get total price");
// let addPriceAmount = km * addPrice;
// function result() {
//    alert("Total Price" + "=" + " " + (lengthWhithProsent += addPriceAmount + fixPrice));
// }
// result();

// N3
// let breadPrice = 1;
// let cheesePrice = 3;
// let milkPrice = 2;
// let totalPrice;
// let breadQuantity = +prompt("Please enter bread quantity");
// let cheeseQuantity = +prompt("Please enter cheese quantity");
// let milkQuantity = +prompt("Please enter milk quantity");
// let promotion = prompt("Do you have any promotion? Please choose yes/no");
// if (breadQuantity > 5) { breadPrice = breadPrice - (breadPrice * 0.10) };
// if (cheeseQuantity > 5) { cheesePrice = cheesePrice - (cheesePrice * 0.10) };
// if (milkQuantity > 5) { milkPrice = milkPrice - (milkPrice * 0.10) };
// totalPrice = (breadPrice * breadQuantity) + (cheesePrice * cheeseQuantity) + (milkPrice * milkQuantity);
// if (promotion = 'yes') { totalPrice = totalPrice - (totalPrice * 0.15); };
// function result() {
//     alert(" Bread Price: " + breadPrice * breadQuantity + "$" + " Cheese Price: " + cheesePrice * cheeseQuantity + "$" + " Milk Price: " + milkPrice * milkQuantity + "$" + " Total Price: " + totalPrice + "$")
// }
// result();

// N4
// let guestsNumber = +prompt("Please enter number of guests");
// function result() {
//     if (guestsNumber <= 2) { alert("We can offer you small table- up to 2 person") };
//     if ((guestsNumber > 2) && (guestsNumber <= 4)) { alert("We can offer you medium table - up to 4 person") };
//     if ((guestsNumber >= 4) && (guestsNumber <= 8)) { alert("We can offer you large table - up to 8 person") };
//     if (guestsNumber > 8) { alert("I'm sorry, but your company is too big") };
// }
// result();

// N5
// let a = +prompt("Please enter first number");
// let b = +prompt("Please enter second nuumber");
// let c = +prompt("Please enter third number");
// let numbers = [a, b, c];
// function result() {
//         if ((numbers[0] < numbers[1]) && (numbers[0] < numbers[2]) && (numbers[1] > numbers[2])) { alert(numbers = [b, c, a]); }
//         if ((numbers[0] < numbers[1]) && (numbers[0] < numbers[2]) && (numbers[2] > numbers[1])) { alert(numbers = [b, a, c]); }
//         if ((numbers[1] < numbers[0]) && (numbers[1] < numbers[2]) && (numbers[0] > numbers[2])) { alert(numbers = [a, c, b]); }
//         if ((numbers[2] < numbers[0]) && (numbers[2] < numbers[1]) && (numbers[0] > numbers[1])) { alert(numbers =[a, b, c]); }
//         if ((numbers[2] > numbers[0]) && (numbers[2] > numbers[1]) && (numbers[0] > numbers[1])) { alert(numbers =[c, a, b]); }
//         if ((numbers[2] > numbers[0]) && (numbers[2] > numbers[1]) && (numbers[1] > numbers[0])) { alert(numbers =[c, b, a]); }
// }

// result();

// N6
// let suraya = {
//     name: "Suraya",
//     age: 21,
//     numberOfOrders: 4,
//     amountOfOrders: 100,
// }

// const mustafa = {
//     name: "Mustafa",
//     age: 30,
//     numberOfOrders: 6,
//     amountOfOrders: 200,
// }
// const aliya = {
//     name: "Aliya",
//     age: 60,
//     numberOfOrders: 2,
//     amountOfOrders: 200,
// }

// let enterName = { name: prompt("Please enter your name:") }

// function result() {

//     if (enterName.name == suraya.name || enterName.name == mustafa.name || enterName.name == aliya.name) { alert("You receive a discount") }
//     else if (enterName.name != suraya.name || enterName.name != mustafa.name || enterName.name != aliya.name) { alert("You don't receive a discount") }

// }
// result();

// N7
// let a = +prompt("Please enter length of an item:");
// let b = +prompt("Please enter width of an item:");
// let c = +prompt("Please enter heigh of an item:");
// let weight = +prompt("Please enter weight of your item:");
// let distance = +prompt("Please enter delivery distance:");
// let sum = a + b + c;

// if (a < 100 && b < 100 && c < 100 && sum <= 150 && weight <= 10 && 3 <= distance <= 10) {
//     function result() { alert("We take your order!") }
// }
// else {
//     alert("Your entered parameters don't meet our requirements. Do you want to familiarize with our rules?");

//     if (true) { alert("The sum of the length, width and height of an item does not exceed 150cm; None of the measurements exceed 100cm; The weight of the shipment does not exceed 10 kg; Delivery distance is in the range of 3 to 10km") }
// }
// result();

// N8
// let a = {
//     "2":"twenty",
//     "3": "thirty",
//     "4": "forty",
//     "5": "fifty",
//     "6": "sixty",
//     "7": "seventy",
//     "8": "eighty",
//     "9": "ninety"
// }
// let b = {
//     "1": "one",
//     "2": "two",
//     "3": "three",
//     "4": "four",
//     "5": "five",
//     "6": "six",
//     "7": "seven",
//     "8": "eight",
//     "9": "nine"
// };
// let number = prompt("Please enter the two-digits number");
// function result(){
//     if(number[0]==0){alert("Please enter two-digits number")}
//         if (number == 10 ) {alert("ten")};
//         if (number == 11 ) {alert("eleven")};
//         if (number == 12 ) {alert("twelve")};
//         if (number == 13 ) {alert("thirteen")};
//         if (number == 14 ) {alert("fourteen")};
//         if (number == 15 ) {alert("fifteen ")};
//         if (number == 16 ) {alert("sixteen ")};
//         if (number == 17 ) {alert("seventeen ")};
//         if (number == 18 ) {alert("eighteen ")};
//         if (number == 19 ) {alert("nineteen ")};

//  if(number === 20){alert(a["2"])};
//  if(number === 30){alert(a["3"])};
//  if(number === 40){alert(a["4"])};
//  if(number === 50){alert(a["5"])};
//  if(number === 60){alert(a["6"])};
//  if(number === 70){alert(a["7"])};
//  if(number === 80){alert(a["8"])};
//  if(number === 90){alert(a["3"])};

//  if(number[0]==2){
//  if(number[1]== 1){alert(a["2"] + " " + b["1"])}
//  if(number[1]== 2){alert(a["2"] + " " + b["2"])}
//  if(number[1]== 3){alert(a["2"] + " " + b["3"])}
//  if(number[1]== 4){alert(a["2"] + " " + b["4"])}
//  if(number[1]== 5){alert(a["2"] + " " + b["5"])}
//  if(number[1]== 6){alert(a["2"] + " " + b["6"])}
//  if(number[1]== 7){alert(a["2"] + " " + b["7"])}
//  if(number[1]== 8){alert(a["2"] + " " + b["8"])}
//  if(number[1]== 9){alert(a["2"] + " " + b["9"])}}

//  if(number[0]==3){
//  if(number[1]== 1){alert(a["3"] + " " + b["1"])}
//  if(number[1]== 2){alert(a["3"] + " " + b["2"])}
//  if(number[1]== 3){alert(a["3"] + " " + b["3"])}
//  if(number[1]== 4){alert(a["3"] + " " + b["4"])}
//  if(number[1]== 5){alert(a["3"] + " " + b["5"])}
//  if(number[1]== 6){alert(a["3"] + " " + b["6"])}
//  if(number[1]== 7){alert(a["3"] + " " + b["7"])}
//  if(number[1]== 8){alert(a["3"] + " " + b["8"])}
// if(number[1]== 9){alert(a["3"] + " " + b["9"])}}

//     if(number[0]==4){
//  if(number[1]== 1){alert(a["4"] + " " + b["1"])}
//  if(number[1]== 2){alert(a["4"] + " " + b["2"])}
//  if(number[1]== 3){alert(a["4"] + " " + b["3"])}
//  if(number[1]== 4){alert(a["4"] + " " + b["4"])}
//  if(number[1]== 5){alert(a["4"] + " " + b["5"])}
//  if(number[1]== 6){alert(a["4"] + " " + b["6"])}
//  if(number[1]== 7){alert(a["4"] + " " + b["7"])}
//  if(number[1]== 8){alert(a["4"] + " " + b["8"])}
//  if(number[1]== 9){alert(a["4"] + " " + b["9"])}}

//  if(number[0]==5){
//  if(number[1]== 1){alert(a["5"] + " " + b["1"])}
//  if(number[1]== 2){alert(a["5"] + " " + b["2"])}
//  if(number[1]== 3){alert(a["5"] + " " + b["3"])}
//  if(number[1]== 4){alert(a["5"] + " " + b["4"])}
//  if(number[1]== 5){alert(a["5"] + " " + b["5"])}
//  if(number[1]== 6){alert(a["5"] + " " + b["6"])}
//  if(number[1]== 7){alert(a["5"] + " " + b["7"])}
//  if(number[1]== 8){alert(a["5"] + " " + b["8"])}
//  if(number[1]== 9){alert(a["5"] + " " + b["9"])}}
 
//  if(number[0]==6){
//  if(number[1]== 1){alert(a["6"] + " " + b["1"])}
//  if(number[1]== 2){alert(a["6"] + " " + b["2"])}
//  if(number[1]== 3){alert(a["6"] + " " + b["3"])}
//  if(number[1]== 4){alert(a["6"] + " " + b["4"])}
//  if(number[1]== 5){alert(a["6"] + " " + b["5"])}
//  if(number[1]== 6){alert(a["6"] + " " + b["6"])}
//  if(number[1]== 7){alert(a["6"] + " " + b["7"])}
//  if(number[1]== 8){alert(a["6"] + " " + b["8"])}
//  if(number[1]== 9){alert(a["6"] + " " + b["9"])}}

//  if(number[0]==7){
//  if(number[1]== 1){alert(a["7"] + " " + b["1"])}
//  if(number[1]== 2){alert(a["7"] + " " + b["2"])}
//  if(number[1]== 3){alert(a["7"] + " " + b["3"])}
//  if(number[1]== 4){alert(a["7"] + " " + b["4"])}
//  if(number[1]== 5){alert(a["7"] + " " + b["5"])}
//  if(number[1]== 6){alert(a["7"] + " " + b["6"])}
//  if(number[1]== 7){alert(a["7"] + " " + b["7"])}
//  if(number[1]== 8){alert(a["7"] + " " + b["8"])}
//  if(number[1]== 9){alert(a["7"] + " " + b["9"])}}

//  if(number[0]==8){
//  if(number[1]== 1){alert(a["8"] + " " + b["1"])}
//  if(number[1]== 2){alert(a["8"] + " " + b["2"])}
//  if(number[1]== 3){alert(a["8"] + " " + b["3"])}
//  if(number[1]== 4){alert(a["8"] + " " + b["4"])}
//  if(number[1]== 5){alert(a["8"] + " " + b["5"])}
//  if(number[1]== 6){alert(a["8"] + " " + b["6"])}
//  if(number[1]== 7){alert(a["8"] + " " + b["7"])}
//  if(number[1]== 8){alert(a["8"] + " " + b["8"])}
//  if(number[1]== 9){alert(a["8"] + " " + b["9"])}}

//  if(number[0]==9){
//  if(number[1]== 1){alert(a["9"] + " " + b["1"])}
//  if(number[1]== 2){alert(a["9"] + " " + b["2"])}
//  if(number[1]== 3){alert(a["9"] + " " + b["3"])}
//  if(number[1]== 4){alert(a["9"] + " " + b["4"])}
//  if(number[1]== 5){alert(a["9"] + " " + b["5"])}
//  if(number[1]== 6){alert(a["9"] + " " + b["6"])}
//  if(number[1]== 7){alert(a["9"] + " " + b["7"])}
//  if(number[1]== 8){alert(a["9"] + " " + b["8"])}
//  if(number[1]== 9){alert(a["9"] + " " + b["9"])}}
// }
// result();


// N9
// let number = +prompt("Please enter the number");
// let i;
// function result(){
//     for(i=1; i<=1000; i++){
//         if(number%i===0){console.log(i)}
//     }
// }
// result();


