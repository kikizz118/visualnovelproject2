// Project 2
// Create a simple calculator that can add, subtract, multiply, and divide two numbers

// 1. Get two values from the user and store them as two numbers
// 2. Display what the numbers are on the HTML test-area
// 3. Perform addition, subtraction, multiplication, and division on the numbers
// 3. Display the sum, difference, product, and quotient of the two numbers
//     -  For example, your HTML test-area should say something like:
//          "3 + 7 = 10"
//          "the sum of 3 and 7 is..."




var num1 = prompt('give me a number');
document.write("first number is " + num1);
document.write('<br>');

var num2 = prompt('give me another number');
document.write("second number is " + num2);
document.write('<br>');



document.write(num1 + "+" + num2 + "=");
document.write(+num1 + +num2);

document.write('<br>');


document.write(num1 + "-" + num2 + "=");
document.write(+num1 - +num2);

document.write('<br>');


document.write(num1 + "*" + num2 + "=");
document.write(+num1 * +num2);



document.write('<br>');

document.write(num1 + "/" + num2 + "=");
document.write(+num1 / +num2);






if (num1 > num2){
  //do stuff here
  document.write( num1 + " is greater than " + num2);
}else if (num1 < num2){
  //do stuff here
  document.write( num1 + " is less than " + num2);
}else {
  //do stuff here
  document.write( num1 + " and " + num2 + " are the same");
}
