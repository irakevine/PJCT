// let js = "kevi";

// console.log(49 + 28 - 10);

let k = true;
console.log(typeof k);

const money = 100;
if (money) {
  console.log("he is a money");
} else {
  console.log("you have a job");
}
// CHALLENGE #3
/* There are two gymnastics teams: Dolphins and Koalas. They complete against each other 3 times. The winner with the highest average score wins a trophy! */

// Your tasks:

// 1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

// 2. Compare the team's average scores to determine the winner of the competition, and print to the console:

// "Dolphins win the trophy" if Dolphins win, or

// "Koalas win the trophy" if Koalas win, or

// "Both win the trophy" if their average scores are equal.

// TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.
// Davg = 96+ 108 + 89/3
// Kavg = 88+ 91+ 110/3

// const Davg = 97.6;

// const Kavg = 96.3;
// if (Davg > Kavg) {
//   console.log("Dolphins win the trophy");
// } else {
//   console.log("Koalas win the trophy");
// }
// if (Davg === Kavg) {
//   console.log("Both win the trophy");
// }
// const age = 4;
// const drink = age >= 18 ? "win" : "woter";
// console.log(drink);

//////////////////////////////////////////////////////////////////
// CHALLENGE #4
// Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

// Your tasks:

// Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).

// Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

// Example: The bill was 275, the tip was 41.25, and the total value 316.25.

// Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂

// TEST DATA: Test with different bill values: 275, 40, and 430
// 41.2 && 55
const bill = 40;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
const totalValue = bill + tip;

console.log("all are:", bill, tip, totalValue);
