// N1
// let surname = prompt("Please enter surname");
// let fname = prompt("Please enter name");
// let email = prompt("Please enter email");
// function result(surname,fname,email ) {
// return surname + fname + email;
// }
// console.log(result(surname,fname,email));


// N2
// const fixPrice = 5;
// const addPrice = 0.25;
// let lengthWhithProsent = 0;
// let km = +prompt("Please enter road length in kilometers for get total price");
// let addPriceAmount = km * addPrice;
// function result(fixPrice,addPrice,lengthWhithProsent,km,addPriceAmount) {
//    return("Total Price" + "=" + " " + (lengthWhithProsent += addPriceAmount + fixPrice));
// }
// console.log(result(fixPrice,addPrice,lengthWhithProsent,km,addPriceAmount));

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
// function result(breadPrice,cheesePrice,milkPrice,totalPrice,breadQuantity,cheeseQuantity,milkQuantity,promotion) {
//     return(" Bread Price: " + breadPrice * breadQuantity + "$" + " Cheese Price: " + cheesePrice * cheeseQuantity + "$" + " Milk Price: " + milkPrice * milkQuantity + "$" + " Total Price: " + totalPrice + "$")
// }
// console.log(result(breadPrice,cheesePrice,milkPrice,totalPrice,breadQuantity,cheeseQuantity,milkQuantity,promotion));

// N4
// let guestsNumber = +prompt("Please enter number of guests");
// function result(guestsNumber) {
//     if (guestsNumber <= 2) { return("We can offer you small table- up to 2 person") };
//     if ((guestsNumber > 2) && (guestsNumber <= 4)) { return("We can offer you medium table - up to 4 person") };
//     if ((guestsNumber >= 4) && (guestsNumber <= 8)) { return("We can offer you large table - up to 8 person") };
//     if (guestsNumber > 8) { return("I'm sorry, but your company is too big") };
// }
// console.log(result(guestsNumber));

// N5
// let a = +prompt("Please enter first number");
// let b = +prompt("Please enter second nuumber");
// let c = +prompt("Please enter third number");
// let numbers = [a, b, c];
// function result(a, b, c) {
//         if ((numbers[0] < numbers[1]) && (numbers[0] < numbers[2]) && (numbers[1] > numbers[2])) { return(numbers = [b, c, a]); }
//         if ((numbers[0] > numbers[1]) && (numbers[0] > numbers[2]) && (numbers[2] > numbers[1])) { return(numbers = [a, c, b]); }
//         if ((numbers[1] > numbers[0]) && (numbers[1] > numbers[2]) && (numbers[0] > numbers[2])) { return(numbers = [b, a, c]); }
//         if ((numbers[2] > numbers[0]) && (numbers[2] > numbers[1]) && (numbers[0] > numbers[1])) { return(numbers =[c, a, b]); }
//         if ((numbers[2] > numbers[0]) && (numbers[2] > numbers[1]) && (numbers[1] > numbers[0])) { return(numbers =[c, b, a]); }
//         if ((numbers[0] > numbers[1]) && (numbers[0] > numbers[2]) && (numbers[1] > numbers[2])) { return(numbers =[a, b, c]); }
// }

// console.log(result(a, b, c));

// N6
// let suraya = {
//     name: "Suraya",
//     age: 21,
//     amountOfOrders: [100, 20, 30, 50],
//   };
//   const mustafa = {
//     name: "Mustafa",
//     age: 30,
//     amountOfOrders: [20, 30, 40, 50, 60],
//   };
//   const aliya = {
//     name: "Aliya",
//     age: 60,
//     amountOfOrders: [100, 100],
//   };
//   let enterName = prompt("Please enter your name:");
//   function result(suraya, mustafa, aliya, enterName) {
//     if (enterName == "Suraya") {
//       for (let i = 0; i <= suraya.amountOfOrders.length; i++) {
//         if (
//           ( suraya.amountOfOrders.length >= 4 &&
//             suraya.amountOfOrders[i] >= 100) ||
//           suraya.age >= 60
//         ) {
//           return "You receive a discount";
//         } else {
          
//           return "You don't receive a discount";
//         }
//       }
//     }
  
//     if (enterName == "Mustafa") {
//       for (let i = 0; i <= mustafa.amountOfOrders.length; i++) {
//         if (
//           (mustafa.amountOfOrders.length >= 4 &&
//           mustafa.amountOfOrders[i] >= 100)||
//           mustafa.age >= 60
  
//         ) {
//           return "You receive a discount";
//         } else {
          
//           return "You don't receive a discount";
//         }
//       }
//     }
  
//     if (enterName == "Aliya") {
//       for (let i = 0; i <= aliya.amountOfOrders.length; i++) {
       
//         if (
//           ( aliya.amountOfOrders.length >= 4 &&
//             aliya.amountOfOrders[i] >= 100) ||
//           aliya.age >= 60
//         ) {
//           return "You receive a discount";
//         } else {
//           console.log("aliya false");
//           return "You don't receive a discount";
//         }
//       }
//     }
//   }
  
//   console.log(result(suraya, mustafa, aliya, enterName));




// N7
// let a = +prompt("Please enter length of an item:");
// let b = +prompt("Please enter width of an item:");
// let c = +prompt("Please enter heigh of an item:");
// let weight = +prompt("Please enter weight of your item:");
// let distance = +prompt("Please enter delivery distance:");
// let sum = a + b + c;

// if (a < 100 && b < 100 && c < 100 && sum <= 150 && weight <= 10 && 3 <= distance <= 10) {
//     function result(a,b,c,weight,distance,sum) { return "We take your order!" }
// }
// else {
//    alert("Your entered parameters don't meet our requirements. Do you want to familiarize with our rules?");

//     if (true) { alert("The sum of the length, width and height of an item does not exceed 150cm. None of the measurements exceed 100cm. The weight of the shipment does not exceed 10 kg. Delivery distance is in the range of 3 to 10km")}
// }
// console.log(result(a,b,c,weight,distance,sum));

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
// function result(a,b,number){
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
// console.log(result(a,b,number));


// N9
// let number = +prompt("Please enter the number");
// let i;
// function result(number,i){
//     for(i=1; i<=1000; i++){
//         if(number%i===0){return(i)}
//     }
// }
// console.log(result(number,i));

// N10
// let initialAmount = +prompt("Please enter initial amount:") 
// let years = prompt("Please enter duration in years")
// let percent = +prompt("Please enter % per year:")
// let percentResult = percent/100;
// function result(initialAmount,years,percent,percentResult){
// for(let i = 0; i<years; i++)
// {initialAmount += initialAmount * percentResult;}
// return initialAmount;
// }
// console.log(result(initialAmount,years,percent,percentResult))

// N11
// let numberOfOrders = +prompt("Please enter the number of orders:")
// let points = [1,1];
// function result(numberOfOrders,points){

// for (let i =2; i<=numberOfOrders; i++){
//     points[i] = points[i-1]+points[i-2];}

// return points.slice(0,numberOfOrders);
// }
// console.log(result(numberOfOrders,points))

// N12
// let numbersOfCode = +prompt("Please enter your code:");
// let sum=0;
// function result(numbersOfCode,sum){
//     while (numbersOfCode!=0)
//     {
//         sum += Math.floor(numbersOfCode%10);
//         numbersOfCode /= 10;
//     }
// return Math.floor(sum);
// }
// console.log(result(numbersOfCode,sum));

