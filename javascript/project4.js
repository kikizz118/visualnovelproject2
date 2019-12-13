//Dom manipulation
//document object model


//document.querySelector(".test-area").innerHTML = "<h1>Hello</h1>";
//document.querySelector(".test-area").innerHTML = "<p>Project4</p>";



document.querySelector(".test-area").addEventListener('click', function() {
  document.querySelector(".test-area").innerHTML = "<h1>Hello</h1>";
})


document.querySelector(".title").addEventListener('click', function() {
  document.querySelector(".test-area").innerHTML = "<p>Project4</p>";
})
