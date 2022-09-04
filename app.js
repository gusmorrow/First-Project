// /**
//  * testing
//  * note
//  * taking
//  * skills
//  */
// //this is kinda the same as above//

// console.log("August "[0] + "Morrow"[0]);
// // // console.log('12345'.length)
// // let str = 'Gus'
// // console.log(str[0])
// // You can also highlight and cntrl / to note out every line you highlighted

// let fullName = "August Morrow";
// let temperature = "78";
// let planet = "Earth";
// temperature = temperature + 2;
// console.log(temperature);

// // dont know why temp didnt add aboce

// //celcius to fahrenheit test below

// let celcius = 10;
// let fahrenheit = celcius * 1.8 + 32;
// console.log(fahrenheit);

// //equality
// let bool = "1" === 1;
// console.log(bool);

// // CONDITIONALS / If , Else If Statements
// // let subscribe = false;
// // let loggedIn = true;
// // if (subscribe === true) {
// //   console.log("show the video");
// // } else if (loggedIn === true) {
// //   console.log("tell the user to upgrade their subscription");
// // } else {
// //   console.log("tell user to log into account");
// // }
// // let cash = 50;
// // let price = 225;
// // let difference = cash - price;
// // if (cash > price) {
// //   console.log(`you paid extra - here's ${difference} dollars change`);
// // } else if (cash === price) {
// //   console.log("you paid the exact amount have a nice day!");
// // } else {
// //   console.log(`not enough money - you still owe ${difference * -1} dollars`);
// // }

// // Logical Operators &&
// // let cash = 50
// // let price = 40
// // let isStoreOpen = true
// // if (cash>=price && isStoreOpen){
// //     console.log('Print the Receipt')
// // }

// // Ternary Operator
// let hot = false;

// hot ? console.log("weather is hot outside") : console.log("weather is cold");

// let subscribe = true;
// let loggedIn = true;

// let str = subscribe && loggedIn ? "Show the video" : "hide the video";
// console.log(str);

// let cash = 50;
// let price = 40;
// let isStoreOpen = true;

// // if (cash >= price && isStoreOpen) {
// //   console.log("Print Recepit");
// // }
// // if (cash <= price) {
// //   console.log("Dont Print. Need More Money");
// // }
// // if ((isStoreOpen = false)) {
// //   console.log("Store Closed");
// // }
// // -- Above is messy. See below for cleaner code -- //
// let strr =
//   cash >= price && isStoreOpen ? "give reciept" : "do not give receipt";
//   console.log(strr)

// LOOPS // DRY - Dont Repeat Yourself //

// WHILE LOOP //

// let count = 1
// while (count <= 100) {
//     console.log(count)
//     count = count + 1;
// }

// FOR LOOP // i=Index //
// for (let i = 0; i<3; i++){
//     console.log(i)
// }
/**Write a for-loop that loops through 1 to 20
 * if # is divis by 3, print Frontend
 * if # is divis by 5, print simplified
 * if # is divis by 3 & 5, print frontend simplified
 * if # is not divis by 3 or 5, print number
 *
 * - - - SUPER IMPORTANT Example - - -
 * 1->1
 * 2->2
 * 3-> Frontend
 * 4->4
 * 5-> Simplified
 * ...
 * 15->Frontend simplified
 * ...
 * 20-> Simplified
 */

// for (let i = 1; i <= 20; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("Front End Simplified");
//   } else if (i % 3 === 0) {
//     console.log("Frontend");
//   } else if (i % 5 === 0) {
//     console.log("Simplified");
//   } else {
//     console.log(i);
//   }
// }

/** Print out every character from the string : Frontend Simplified
 *
 * example:
 * 'F'
 * 'r'
 * 'o'
 * ...
 * 'e'
 * 'd'
 */
// const str = 'Frontend Simplified'
// for (let i = 0; i < str.length; i++) {
//     console.log(str[i])
// }

/** - - - - - Funtions - - - - -  */

// console.log('Welcome to FES, Gus')
// console.log('Welcome to FES, Lauren')
// console.log('Welcome to FES, Cesar')
//DRY - Dont repeat yourself !! Instead use

// Function Definition
// function welcomePersonToFES(name) {
//   console.log(`Welcome to Frontend Simplified, ${name}`);
// }

// // Call the function
// welcomePersonToFES("Gus");
// welcomePersonToFES("Lauren");
// welcomePersonToFES("Cesar");

// function sumOfTwoNumbers(num1, num2) {
//     return num1/num2
// }
// console.log(sumOfTwoNumbers(10, 40));

/** - - - Solve this Problem - - -
 * Create a function that converts Celcius to Fahrenheit
 * **Formula F = C x 1.8 + 32
 *
 * 0 -> 32
 * 10 -> 50
 */
// function cToF (celsius){
//     return celsius * 1.8 + 32
// }
// console.log(cToF(0))

// 2ND WAY OF DEFINING A FUCTION
// const cToF = (celsius) => {
//     return celsius * 1.8 + 32
// }
// console.log(cToF(10))

/** - - - - - ARRAY'S - - - - - */
// let item1 = 20
// let item2 = 30
// let item3 = 40
// let item4 = 50
// let item5 = 100

// let arr = [20, 30, 40, 50, 100];
// //First element of array:
// console.log(arr[0])
// //Last element of array:
// console.log(arr[arr.length -1])
// //Add element onto end of aray:
// arr.push(200)

// LONG METHOD
// let newArr = arr.filter((element) => {
//     console.log(element)
//     if (element < 50){
//         return true
//     }
// })
// console.log(newArr)

// SHORT METHOD
// let newArr = arr.filter((element) => element < 50);
// console.log(newArr);

/** Filter Out The "FAIL" Scores */
// let grades = ["A+", "A", "FAIL"];
// let newGrades = grades.filter(element => element !== "FAIL");
// console.log(newGrades);

// Array MAP //
// let arr = [1,4,9,16]

// let newArr = arr.map ((element) => {
//     console.log (element)
//     return 'balls'
// })
// console.log (newArr)

/** Turn each element in an array of dollars into cents
 * 1 , 5 , 10 , 3
 */

// let dollars = [1,5,10,3]

// let cents = dollars.map(element => element*100)
// console.log (cents)

// let dollars = [1,5,10,3]
// let cents = []
// for (let i = 0; i <= dollars.length ; i++){
//     cents.push(dollars[i]*100)
// }
// console.log(cents)

//// OBJECTS ////

// let users = [
//   {
//     username: "Gus",
//     password: "gusbus",
//     email: "gusmorrow23@gmail.com",
//     subscriptionStatus: "VIP",
//     discordID: "gusmorrow",
//     lessonsCompleted: [0, 1],
//   },
//   {
//     username: "Lauren",
//     password: "loafdawg",
//     email: "lauren@gmail.com",
//     subscriptionStatus: "GAY",
//     discordID: "laurenEd",
//     lessonsCompleted: [0, 1, 2, 3],
//   },
//   {
//     username: "Cesar",
//     password: "bofa",
//     email: "cesar@gmail.com",
//     subscriptionStatus: "SUPER GAY",
//     discordID: "beeeezer",
//     lessonsCompleted: [0, 1, 2],
//   },
// ];

// console.log(user[0])
// console.log(user[1])
// console.log(user[1].subscriptionStatus)
// console.log(user[0].lessonsCompleted)

// function login(email, password) {
//   for (i = 0; i < user.length; i++) {
//     if (user[i].email === email) {
//       console.log(user[i]);
//       if (user[i].password === password) {
//         console.log("log the user in");
//       } else {
//         console.log("password is incorrect");
//       }
//       return;
//     }
//   }
//   console.log("email does not exist");
// }

// login("gusmorrow23@gmail.com", "gusbus");

//** Create a register function that accepts:
/**
 * username
 * email
 * password
 * subscription status
 * discordID
 * lessons completed
 *
 * Inside register fuction:
 * 1. Create a user object
 * Push this user object onto the 'user' array
 */

// Long Way // too many lines and super whack //
// function register(
//   name,
//   email,
//   password,
//   subscriptionStatus,
//   discordID,
//   lessonsCompleted
// ) {
//     let user = {
//         username: name,
//         email: email,
//         password: password,
//         subscriptionStatus: subscriptionStatus,
//         discordID: discordID,
//         lessonsCompleted: lessonsCompleted
//     }
//     users.push(user);
// }
// register({
//   username: "josh",
//   email: "josh@gmail.com",
//   password: "jessie",
//   subscriptionStatus: "MEGA GAY",
//   discordID: "joshua",
//   lessonsCompleted: "69"
// });
// console.log(users)

////// Short clean way /////////
// function register(user){
//       users.push(user);
// }
//   register({
//     username: "josh",
//     email: "josh@gmail.com",
//     password: "jessie",
//     subscriptionStatus: "MEGA GAY",
//     discordID: "joshua",
//     lessonsCompleted: "69"
//   });
//   console.log(users)

// DOM - Document Object Model //

// First way of accessing an element
console.log(document.querySelector("#title"));

// Second way of accessing an element - only works if element has an ID // Better practice if you have an id
console.log(document.getElementById("title"));

// Change HTML
document.querySelector("h1").innerHTML += " Frontend Simplified";

// Change CSS
document.querySelector("#title").style.color = "blue";

function changeTitileToRed(){
    document.querySelector('h1').style.color = 'red'
    console.log('clicked')
}