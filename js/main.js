// Q1
// 1- Write a program that allow to user enter number then printit

// var num = +window.prompt("Enter Number please:");
// console.log(num);
// Q2
// 2- Write a program that take number from user then print yes if that number can divide by 3
// and 4 otherwise print no

// var num = +window.prompt("Enter Number to check if divide by 3&&4");
// if (num % 3 == 0 && num % 4 == 0) {
//   console.log(num + " Output Yes");
// } else {
//   console.log(num + " Output No");
// }
// Q3
// 3- Write a program that allows the user to insert 2 integers then print the max

// var num1 = +window.prompt("Enter the first number please:");
// var num2 = +window.prompt("Enter the second number please:");
// if (num1 > num2) {
//   console.log(num1);
// } else {
//   console.log(num2);
// }
//Q4
// 4- Write a program that allows the user to insert an integer then print negative if it is
// negative number otherwise print positive.

// var num = +window.prompt("Enter number ,please:");
// if (num < 0) {
//   console.log("Negative");
// } else if (num > 0) {
//   console.log("Positive");
// } else if (num == 0) {
//   console.log("Number Equal Zero");
// } else {
//   console.log("Invalid Value");
//   window.alert("All inputs must be valid numbers");
// }
//Q5
// 5- Write a program that take 3 integers from user then print the max element
// and the min element.

// var num1 = +window.prompt("Enter the first number please:");
// var num2 = +window.prompt("Enter the second number please:");
// var num3 = +window.prompt("Enter the third number please:");
// // max
// if (num1 > num2 && num1 > num3) {
//   console.log("Max Element = " + num1);
// } else if (num2 >= num1 && num2 >= num3) {
//   console.log("Max Element = " + num2);
// } else {
//   console.log("Max Element = " + num3);
// }
// // min
// if (num1 <= num2 && num1 <= num3) {
//   console.log("Min Element = " + num1);
// } else if (num2 <= num1 && num2 <= num3) {
//   console.log("Min Element = " + num2);
// } else {
//   console.log("Min Element = " + num3);
// }
//Q6
// 6- Write a program that allows the user to insert integer number then
// check If a number is oven or odd

// var num = +window.prompt("Enter number please:");
// // max
// if (num % 2 == 0) {
//   console.log("Even");
// } else if (num % 2 != 0) {
//   console.log("Odd");
// } else {
//   window.alert("Enter a valid integer");
// }
//Q8
// 8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u)
// then print vowel otherwise print consonant

// var char = window.prompt("Enter a character please:");
// if (
//   char === "a" ||
//   char === "e" ||
//   char === "i" ||
//   char === "o" ||
//   char === "u" ||
//   char === "A" ||
//   char === "E" ||
//   char === "I" ||
//   char === "O" ||
//   char === "U"
// ) {
//   console.log("vowel");
// } else {
//   console.log("consonant");
// }
//Q9
// 9- Writeaprogramthat allowsusertoinsertintegerthenprintallnumbersbetween1to
// that’s number

// var num = +window.prompt("Enter number please:");
// for (var i = 1; i <= num; i++) {
//   console.log(i);
// }
//Q10
// 10- Write a program that allows userto insert integerthen print a multiplication table up to 12.

// var num = +window.prompt("Enter number please:");
// for (var i = 1; i <= 12; i++) {
//   console.log(i * num);
// }
// Q11
// 11- Write aprogram that allows to user toinser tnumber then print all even numbers
// between 1 to this number

// var num = +window.prompt("Ener Number Please:");
// for (var i = 1; i <= num; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }
//Q12
// 12- Write aprogram that take two integers then print the power

// var base = +window.prompt("Enter the base number:");
// var exponent = +window.prompt("Enter the exponent:");
// var result = 1;
// for (var i = 1; i <= exponent; i++) {
//   result *= base;
// }
// console.log(result);
//Q12
// 12- Write a program to enter marks of five subjects and calculate total, average and
// percentage.

// var total = 0;
// for (var i = 1; i <= 5; i++) {
//   var mark = +window.prompt("Enter marks of subject " + i + ":");
//   if (mark > 100 || mark < 0) {
//     window.alert("Marks must be between 0 and 100");
//     i--;
//   } else {
//     total += mark;
//   }
// }
// var average = total / 5;
// var percentage = (total / 500) * 100;
// console.log("Total Marks = " + total);
// console.log("Average Marks = " + average);
// console.log("Percentage = " + percentage + "%");
//Q13
// 13-Write a program to input month number and print number of days in that
// month.

// var month = +window.prompt("Enter month number (1-12):");
// if (
//   month == 1 ||
//   month === 3 ||
//   month == 5 ||
//   month == 7 ||
//   month == 8 ||
//   month == 10 ||
//   month == 12
// ) {
//   console.log("Days in Month: 31");
// } else if (month == 4 || month == 6 || month == 9 || month == 11) {
//   console.log("Days in Month: 30");
// } else if (month == 2) {
//   console.log("Days in Month: 28 or 29 (Leap Year)");
// } else {
//   console.log("Invalid month number! Please enter 1-12.");
//   window.alert("Enter month number 1-12");
// }
//Q14
// 14- Write a program to input marks of five subjects
// Physics, Chemistry, Biology, Mathematics and Computer
// , Find percentage and grade

// var physics = +window.prompt("Enter marks of Physics:");
// var chemistry = +window.prompt("Enter marks of Chemistry:");
// var biology = +window.prompt("Enter marks of Biology:");
// var math = +window.prompt("Enter marks of Mathematics:");
// var computer = +window.prompt("Enter marks of Computer:");
// var total = physics + chemistry + biology + math + computer;
// var percentage = (total / 500) * 100;
// if (percentage >= 90) {
//   console.log("Grade = A");
// } else if (percentage >= 80) {
//   console.log("Grade = B");
// } else if (percentage >= 70) {
//   console.log("Grade = C");
// } else if (percentage >= 60) {
//   console.log("Grade = D");
// } else if (percentage >= 40) {
//   console.log("Grade = E");
// } else if (percentage < 40 && percentage >= 0) {
//   console.log("Grade = F (Fail)");
// } else {
//   window.alert("Enter valid marks between 0 and 100");
// }
//Q15
//15- Write a program to print total number of days in month

// var month = +window.prompt("Enter month number (1-12):");
// switch (month) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12: {
//     console.log("Days in Month: 31");
//     break;
//   }
//   case 4:
//   case 6:
//   case 9:
//   case 11: {
//     console.log("Days in Month: 30");
//     break;
//   }
//   case 2: {
//     console.log("Days in Month: 28 or 29 (Leap Year)");
//     break;
//   }
//   default: {
//     console.log("Invalid month number! Please enter 1-12.");
//     window.alert("Enter month number 1-12");
//   }
// }
//ََQ16
//16- Write a program to check whether an alphabet is vowel or consonant

// var char = window.prompt("Enter a character please:");
// switch (char) {
//   case "a":
//   case "e":
//   case "i":
//   case "o":
//   case "u":
//   case "A":
//   case "E":
//   case "I":
//   case "O":
//   case "U": {
//     console.log("vowel");
//     break;
//   }
//   default: {
//     console.log("consonant");
//   }
// }
//Q17
//17- Write a program to find maximum between two numbers

var num1 = +window.prompt("Enter the first number please:");
var num2 = +window.prompt("Enter the second number please:");
switch (true) {
  case num1 > num2:
    console.log("Max = " + num1);
    break;

  case num2 > num1:
    console.log("Max = " + num2);
    break;
  case num1 == num2: {
    console.log("Both numbers are equal: " + num1);
    break;
  }
  default:
    window.alert("Enter a valid integer");
}
//Q18
//18- Write a program to check whether a number is even or odd

// var num = +window.prompt("Enter number please:");
// switch (true) {
//   case num % 2 == 0: {
//     console.log("Even");
//     break;
//   }
//   case num % 2 != 0: {
//     console.log("Odd");
//     break;
//   }

//   default:
//     console.log("Invalid Value");
//     window.alert("Enter a valid integer");
// }
//Q19
// 19- Write a program to check whether a number is positive or negative or zero

// var num = +window.prompt("Enter number please:");
// switch (true) {
//   case num > 0: {
//     console.log("Positive");
//     break;
//   }
//   case num < 0: {
//     console.log("Negative");
//     break;
//   }
//   case num == 0: {
//     console.log("Zero");
//     break;
//   }
//   default: {
//     console.log("Invalid Value");
//     window.alert("Enter a valid integer");
//   }
// }
//Q20
//20- Write a program to create Simple Calculator

// var num1 = +window.prompt("Enter first number:");
// var num2 = +window.prompt("Enter second number:");
// var operator = window.prompt("Enter operator (+, -, *, /):");
// switch (operator) {
//   case "+": {
//     console.log(num1 + num2);
//     break;
//   }
//   case "-": {
//     console.log(num1 - num2);
//     break;
//   }
//   case "*": {
//     console.log(num1 * num2);
//     break;
//   }
//   case "/": {
//     if (num2 === 0) {
//       console.log("Error: Division by zero!");
//       window.alert("Error: Division by zero!");
//       break;
//     } else {
//       console.log(num1 / num2);
//       break;
//     }
//   }
//   default: {
//     window.alert("invalid input");
//   }
// }
