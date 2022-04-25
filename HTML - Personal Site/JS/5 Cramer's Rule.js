pagelink1.onclick = function () {
  document.location ='#solving';
}
pagelink2.onclick = function () {
  document.location ='#generalRule';
}


welcome.onclick = function () {
  document.location ='index.html';
}

whatisamatrix.onclick = function () {
  document.location ='1 Introduction to matrices.html';
}

addsubtractmatrices.onclick = function () {
  document.location ='2 Adding and Subtracting Matrices.html';
}

multiplymatrices.onclick = function() {
  document.location = '3 Multiplying Matrices.html';
}

determinant.onclick = function () {
  document.location ='4 The Determinant and Inverse.html';
}

engineering.onclick = function () {
  document.location ='6 Applying Matrices to Engineering.html';
}

calculator2x2.onclick = function () {
  document.location ='7 2x2 Calculator.html';
}

calculator3x3.onclick = function () {
  document.location ='10 3x3 Calculator.html';
}

quiz.onclick = function () {
  document.location ='8 Quiz section.html';
}

circuitCalculator.onclick = function(){
  document.location = '9 Circuit Calculator.html';
}


//Get the button
var mybutton = document.getElementById("topButton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
