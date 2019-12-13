/* HEALTHY BMI is between 18.5 to 24.9!
You are trying to compare your BMI (Body Mass Index) with your friend's BMI.
BMI is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meters).
1. Store you and your friend's mass and height in variables
2. Calculate both BMIs
3. Create an if else statement containing information about whether you have a higher BMI than your friend.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").
BONUS: tell if you and your friend have a healthy BMI
GOOD LUCK ‍💪
*/


document.write("Underweight Iris ");
var weight= 43;
var height= 1.63;

answer= weight/ (height*height);
document.write(answer);

document.write('<br>');


document.write("Healthier BMI Kiki ");

var weight2= 49;
var height2= 1.58;

answer= weight2/ (height2*height2);
document.write(answer);





document.write('<br>');



var num1= 16.184274906846326;
var num2= 19.62826470116968;


if (num1 > num2){
  document.write( num1 + " is greater than " + num2);
}else if (num1 < num2){
  document.write( num1 + " is less than " + num2);
}else {
  document.write( num1 + " and " + num2 + " are the same");
}
