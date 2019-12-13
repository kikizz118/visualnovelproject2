// DOM MANIPULATION Visual Novel Game

// Create a new event
// Select the button you want to edit
// Run a function when it is clicked


var soundStart = new Audio('sounds/collect-point-01.wav');
var soundAdvance = new Audio('sounds/heartbeatloop.wav');
var soundHappy = new Audio('sounds/strongheartbeat.wav');
var soundLose = new Audio('sounds/jingle-lose-00.wav');
var soundWin = new Audio('sounds/jingle-win-00.wav');
var soundWin2 = new Audio('sounds/hooray.wav');
var soundLaugh = new Audio('sounds/laugh.wav');
var soundRomantic = new Audio('sounds/romantic.wav');
var soundRomantic2 = new Audio('sounds/romantic2.wav');
var soundRomantic3 = new Audio('sounds/kiss.wav');









// Character1

document.querySelector('.story-window').innerHTML='<img src="images/doublehearts.gif">'


document.querySelector(".button1").addEventListener("click", function() {
  soundStart.play();
document.querySelector('.story-window').innerHTML='<img src="images/doublehearts.gif">'
document.querySelector(".story-window").innerHTML = '<p> <img src="images/effy.jpg"><img src="images/serena.gif"> <br>Which girl do you want to begin the game with?';


  // 2. Erase old button     add dot                     no dot
    document.querySelector(".button1").classList.add("invisible");
    // 3. Show next button
    document.querySelector(".choice1-btn").classList.remove("invisible");
    document.querySelector(".choice2-btn").classList.remove("invisible");

    document.querySelector(".container").classList.add("story1-bg")
});

//crush phase
document.querySelector(".choice1-btn").addEventListener("click", function() {
    soundStart.play();
  document.querySelector(".story-window").innerHTML = '<p> <img src="images/hallway2.png"><img src="images/mathbook.webp"> <br>Your classmate in math class, Annie-Chan, walks slowly on the hallways of your school, engrasses with a red covered book. You do not notice her at first because of her short height. Just as you are about to pass her, your friend pushes you towards Annie, making you fall on top of her. Your eyes meet her soft green emerald eyes, your red face giving away your emotions. What do you do?';

  document.querySelector(".choice1-btn").classList.add("invisible");
  document.querySelector(".choice2-btn").classList.add("invisible");
  // 3. Show next button
  document.querySelector(".choice3-btn").classList.remove("invisible");
  document.querySelector(".choice4-btn").classList.remove("invisible");
  document.querySelector(".container").classList.add("story2-bg")
});


document.querySelector(".choice3-btn").addEventListener("click", function() {
    soundStart.play();
    document.querySelector(".story-window").innerHTML = '<p>  <img src="images/effy2.jpg"> <br>Despite your flusteredness, you quickly grab the blue book that had skittered across the floor and hand it back to Annie. The girl’s eyes sparkled as she took the book, “T-thanks.” She said shyly. “Most people just call me “nerd” and walk away laughing when they knock me over.” She stood up and patted the dust off her skirt. She put the book in her bag. “My...my friends are waiting for me... and she wants to run away';
    document.querySelector(".choice3-btn").classList.add("invisible");
    document.querySelector(".choice4-btn").classList.add("invisible");
    // 3. Show next button
    document.querySelector(".choice5-btn").classList.remove("invisible");
  });


  document.querySelector(".choice4-btn").addEventListener("click", function() {
      soundRomantic3.play();
      document.querySelector(".story-window").innerHTML = '<p><img src="images/effyangry.txt"> <br>Annie Chang is aghast when you suddenly kiss her, her face is blushed and asks " Why did you kiss me!?" You do not know how to respond and decide to kiss her for the second time. Annie is pissed off this time, she hits you with her books which leaves two red marks on your face. You stand on the hallway embarrassingly.....';

      document.querySelector(".choice3-btn").classList.add("invisible");
      document.querySelector(".choice4-btn").classList.add("invisible");
      // 3. Show next button
      document.querySelector(".choice6-btn").classList.remove("invisible");
    });

     document.querySelector(".choice6-btn").addEventListener("click", function(){
      soundLose.play();
     document.querySelector(".story-window").innerHTML ='<p></p>';

     document.querySelector(".choice6-btn").classList.add("invisible");

     document.querySelector(".button1").classList.remove("invisible");
   });



   document.querySelector(".choice21-btn").addEventListener("click", function(){
     soundWin.play();
   document.querySelector(".story-window").innerHTML ='<p></p>';

   document.querySelector(".choice21-btn").classList.add("invisible");

   document.querySelector(".button1").classList.remove("invisible");
 });




    document.querySelector(".choice5-btn").addEventListener("click", function() {
        soundStart.play();
        document.querySelector(".story-window").innerHTML = '<p> <img src="images/library2.jpg"> <br>She is blushed and looks hesitant, she stares at you with her big round eyes... "No... I cant help but be distracted by you"';

        document.querySelector(".choice5-btn").classList.add("invisible");
        document.querySelector(".choice13-btn").classList.add("invisible");
        // 3. Show next button
        document.querySelector(".choice13-btn").classList.remove("invisible");
      });

      document.querySelector(".choice13-btn").addEventListener("click", function() {
          soundRomantic2.play();
          document.querySelector(".story-window").innerHTML = '<p> <img src="images/effylaugh.gif"> <br>Your little scene seems to have drawn attention, so you squatted down in hiding. You crouched together next to that locker, waiting until the teacher get away. When you look at her, her smiling eyes told you she is not angry at all about your impulsiveness. You look at each other and burst out laughing......' ;

          document.querySelector(".choice13-btn").classList.add("invisible");
          document.querySelector(".choice20-btn").classList.add("invisible");
          // 3. Show next button
          document.querySelector(".choice20-btn").classList.remove("invisible");
        });

        document.querySelector(".choice20-btn").addEventListener("click", function() {
            soundWin.play();
            document.querySelector(".story-window").innerHTML = '<p> <img src="images/effy3.gif"><br>Annie then nervously looks at you "I really have to go now but we are now friends, right?" She smiles shyly at you with those dimples. You shorten the distance to get close enough to her face, squat down a little and whisper gently to her ear"Sure"... ' ;

            document.querySelector(".choice20-btn").classList.add("invisible");
            document.querySelector(".choice21-btn").classList.add("invisible");
            // 3. Show next button
            document.querySelector(".choice21-btn").classList.remove("invisible");
          });










// Charater2


document.querySelector(".choice2-btn").addEventListener("click", function() {
    soundStart.play();
  document.querySelector(".story-window").innerHTML = '<p> <img src="images/guccistore.jpg"> <br>You walk into a Gucci store and you see your crush is picking clothes, she wore her hair in a fancy half-up half-down, and her whole body smelled of a rich, toxic scent that allures your senses like a bee to a flower. You immediately knew that the girl was Stephanie, the neighbors daughter that lived across the street.  ';

  document.querySelector(".choice1-btn").classList.add("invisible");
  document.querySelector(".choice2-btn").classList.add("invisible");
  // 3. Show next button
  document.querySelector(".choice7-btn").classList.remove("invisible");
  document.querySelector(".choice8-btn").classList.remove("invisible");
  document.querySelector(".container").classList.add("story3-bg")
});


document.querySelector(".choice7-btn").addEventListener("click", function() {
    soundStart.play();
  document.querySelector(".story-window").innerHTML = '<p> <img src="images/cashier.jpg"><img src="images/broke.jpg"><br>Despite the fact that you are almost broke, you boldly walk up to her, grabbed all the clothes in her hand, and strutted towards the cash register. You then......  ';

  document.querySelector(".choice7-btn").classList.add("invisible");
  document.querySelector(".choice8-btn").classList.add("invisible");
  // 3. Show next button
  document.querySelector(".choice9-btn").classList.remove("invisible");
  document.querySelector(".choice10-btn").classList.remove("invisible");
});


document.querySelector(".choice9-btn").addEventListener("click", function() {
    soundLose.play();
  document.querySelector(".story-window").innerHTML = '<p><img src="images/starve.gif"> <br>You starve to death for the next several months because you dont have any money to pay for the meal';

  document.querySelector(".choice9-btn").classList.add("invisible");
  document.querySelector(".choice10-btn").classList.add("invisible");
  // 3. Show next button
  document.querySelector(".choice11-btn").classList.remove("invisible");
});


document.querySelector(".choice11-btn").addEventListener("click", function(){
    soundLose.play();
document.querySelector(".story-window").innerHTML ='<p></p>';

document.querySelector(".choice11-btn").classList.add("invisible");

document.querySelector(".button1").classList.remove("invisible");
});

document.querySelector(".choice8-btn").addEventListener("click", function() {
  soundLose.play();
  document.querySelector(".story-window").innerHTML = '<p><img src="images/serenaangry.gif"> <br>She thinks you are a pervert and call the police, you are arrested......';

  document.querySelector(".choice8-btn").classList.add("invisible");
  document.querySelector(".choice7-btn").classList.add("invisible");

  // 3. Show next button
  document.querySelector(".choice14-btn").classList.remove("invisible");
});


document.querySelector(".choice14-btn").addEventListener("click", function(){
  soundLose.play();
document.querySelector(".story-window").innerHTML ='<p></p>';

document.querySelector(".choice14-btn").classList.add("invisible");

document.querySelector(".button1").classList.remove("invisible");
});




document.querySelector(".choice10-btn").addEventListener("click", function() {
    soundStart.play();
  document.querySelector(".story-window").innerHTML = '<p><img src="images/serenawalk.gif"> <br>Tossing away your conscience you take out ur mothers credit card and give it to the cashier,"this is for the pretty lady over there"you said cooly. The girl is slightly taken aback by ur action.You......';

  document.querySelector(".choice10-btn").classList.add("invisible");
  document.querySelector(".choice9-btn ").classList.add("invisible");

  // 3. Show next button
  document.querySelector(".choice12-btn").classList.remove("invisible");
});



document.querySelector(".choice12-btn").addEventListener("click", function() {
    soundHappy.play();
  document.querySelector(".story-window").innerHTML = '<p><img src="images/serenasmile.txt"> <br> She follows your steps and walk out of the store, asks:" What is your name and what should I give you in return? "';

  document.querySelector(".choice10-btn").classList.add("invisible");
  document.querySelector(".choice9-btn ").classList.add("invisible");
  document.querySelector(".choice12-btn ").classList.add("invisible");

  // 3. Show next button
  document.querySelector(".promptName-btn").classList.remove("invisible");
});



document.querySelector(".promptName-btn").addEventListener("click", function() {
    soundHappy.play(); // ADVANCE INPUT
    name = prompt("Enter your name");
     document.querySelector(".story-window").innerHTML =  "So nice to meet you " + name + " :) Do I have a chance to invite you to dinner tonight ? I think this is the best way to show my gratitude...";

    // Erase buttons
    document.querySelector(".promptName-btn").classList.add("invisible");
    // Show next buttons
    document.querySelector(".choice30-btn").classList.remove("invisible");
});



document.querySelector(".choice30-btn").addEventListener("click", function() {
    soundHappy.play();
  document.querySelector(".story-window").innerHTML = '<p><img src="images/serenatalk.gif"> <img src="images/restaurant.jpg"><br> You two come to a decent restaurant and have a long talk about each others interests. You can feel her affection for you and you sure are sending some mixed signals, the atmosphere gets flirty......';

  document.querySelector(".choice30-btn").classList.add("invisible");


  // 3. Show next button
  document.querySelector(".choice31-btn").classList.remove("invisible");
});




document.querySelector(".choice31-btn").addEventListener("click", function() {
    soundRomantic.play();
  document.querySelector(".story-window").innerHTML = '<p><img src="images/kiss.gif"><br> You successfully capture Stephanie s heart and you are not single anymore!! Congratulations, great master of love:)♥';

  document.querySelector(".choice31-btn").classList.add("invisible");


  // 3. Show next button
  document.querySelector(".choice32-btn").classList.remove("invisible");
});


document.querySelector(".choice32-btn").addEventListener("click", function(){
 soundWin2.play();
document.querySelector(".story-window").innerHTML ='<p></p>';

document.querySelector(".choice32-btn").classList.add("invisible");

document.querySelector(".button1").classList.remove("invisible");
});
