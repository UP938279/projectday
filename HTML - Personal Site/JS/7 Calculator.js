clearFunc = function() {
  //Clear all steps and determinant. Allows fresh start at the beginning of each function.
  //Answers matrix need not be re-written at this point as it will rewrite itself later in each function.
  document.getElementById("stepsOne").innerHTML = "";
  document.getElementById("stepsFour").innerHTML = "";
  document.getElementById("stepsThree").innerHTML = "";
  document.getElementById("stepsFour").innerHTML = "";
  document.getElementById("stepsFive").innerHTML = "";
  document.getElementById("determinantAns").innerHTML = "";
  document.getElementById("ansMathJaxMatrix").innerHTML = "";
}

hideSteps = function() {
  //Hides all steps so not visible
  stepsOne.style.display = "none";
  stepsTwo.style.display = "none";
  stepsThree.style.display = "none";
  stepsFour.style.display = "none";
  stepsFive.style.display = "none";
  workedSolution.style.display = "none";

  //Hides buttons. By doing this, can individually tailor which step buttons are shown, so can alter for calculations with more/fewer steps
  stepsOneButton.style.display = "none";
  stepsTwoButton.style.display = "none";
  stepsThreeButton.style.display = "none";
  stepsFourButton.style.display = "none";
  stepsFiveButton.style.display = "none";
  stepsSixButton.style.display = "none";
  workedSolutionButton.style.display = "none";
}

//Show Steps Buttons
stepsOneButton.onclick = function() {

  var x = document.getElementById("stepsOne");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("stepsOneButton").style.display = "none";
  }
}
stepsTwoButton.onclick = function() {

  var x = document.getElementById("stepsTwo");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("stepsTwoButton").style.display = "none";
  }
}
stepsThreeButton.onclick = function() {

  var x = document.getElementById("stepsThree");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("stepsThreeButton").style.display = "none";
  }
}
stepsFourButton.onclick = function() {

  var x = document.getElementById("stepsFour");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("stepsFourButton").style.display = "none";
  }
}
stepsFiveButton.onclick = function() {

  var x = document.getElementById("stepsFive");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("stepsFiveButton").style.display = "none";
  }
}
workedSolutionButton.onclick = function() {

  var x = document.getElementById("workedSolution");
  if (x.style.display === "none") {
    x.style.display = "block";
      document.location ='#workedSolution';
  } else {
    x.style.display = "none";
  }
}
//End of Show Steps Buttons

//navbar links - provides navbar with functionality, rather than using hyperlinks
welcome.onclick = function() {
  document.location = 'index.html';
}
whatisamatrix.onclick = function() {
  document.location = '1 Introduction to matrices.html';
}
addsubtractmatrices.onclick = function() {
  document.location = '2 Adding and Subtracting Matrices.html';
}
multiplymatrices.onclick = function() {
  document.location = '3 Multiplying Matrices.html';
}
determinant.onclick = function() {
  document.location = '4 The Determinant and Inverse.html';
}
cramersrule.onclick = function() {
  document.location = '5 Cramers Rule.html';
}
engineering.onclick = function() {
  document.location = '6 Applying Matrices to Engineering.html';
}
calculator3x3.onclick = function() {
  document.location = '10 3x3 Calculator.html';
}
quiz.onclick = function() {
  document.location = '8 Quiz section.html';
}

circuitCalculator.onclick = function(){
  document.location = '9 Circuit Calculator.html';
}
//end of navbar hyperlink replacements


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


//function to create random matrix A. When button is clicked, uses random number generator to create numbers from -15 to 15.
//   Math.round(Math.random()) produces a number that is either 0 or 1. Multiplying by 2 gives either 0 or 2. Subtract 1 gives either -1 or 1.
//math.round used
// Other possibilities exist, such as

// cos(0) = 1
// cos(PI) = -1
// random_sign = cos( PI x ( 0 or 1 ) );
//random_sign = Math.cos( Math.PI * Math.round( Math.random() ) );
//Found at https://stackoverflow.com/questions/8611830/javascript-random-positive-or-negative-number
//I have edited this to use math floor and incremented the number by one (i.e. 15 to 16). This enables each number to have a full range that creates it - 0-0.999, instead of 0-0.499 at
//the extremes of +/15. This should give a more even distribution of numbers.

//$ is from jQuery library, searches for ids or titles etc
//

copyAnstoA.onclick = function() {
  clearFunc();
  hideSteps();

  a1_1.value = ans1_1.value;
  a1_2.value = ans1_2.value;
  a2_1.value = ans2_1.value;
  a2_2.value = ans2_2.value;
}

copyAnstoB.onclick = function() {
  clearFunc();
  hideSteps();

  b1_1.value = ans1_1.value;
  b1_2.value = ans1_2.value;
  b2_1.value = ans2_1.value;
  b2_2.value = ans2_2.value;
}

randomA.onclick = function() {
  clearFunc();
  hideSteps();

  rndmNum1 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  a1_1.value = rndmNum1;

  rndmNum2 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  a1_2.value = rndmNum2;

  rndmNum3 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  a2_1.value = rndmNum3;

  rndmNum4 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  a2_2.value = rndmNum4;

}

randomB.onclick = function() { //function to create random matrix B.
  clearFunc();
  hideSteps();


  rndmNum1 = Math.round(((Math.random()) * 2 - 1) * 15.1); //creates random integer up to +/-15
  b1_1.value = rndmNum1;

  rndmNum2 = Math.round(((Math.random()) * 2 - 1) * 15.1); //creates random integer up to +/-15
  b1_2.value = rndmNum2;

  rndmNum3 = Math.round(((Math.random()) * 2 - 1) * 15.1); //creates random integer up to +/-15
  b2_1.value = rndmNum3;

  rndmNum4 = Math.round(((Math.random()) * 2 - 1) * 15.1); //creates random integer up to +/-15
  b2_2.value = rndmNum4;

}

inverseA.onclick = function() {
  clearFunc();
  hideSteps();

  var manA1_1 = a1_1.value;
  var manA1_2 = a1_2.value;
  var manA2_1 = a2_1.value;
  var manA2_2 = a2_2.value;

  determinantA2x2 = (Number(manA1_1) * Number(manA2_2)) - (Number(manA1_2) * Number(manA2_1));

  inverseA2x2multiplier = 1 / determinantA2x2;

  rndAns1_1 = manA2_2 * inverseA2x2multiplier;
  rndAns1_2 = -(manA1_2 * inverseA2x2multiplier);
  rndAns2_1 = -(manA2_1 * inverseA2x2multiplier);
  rndAns2_2 = manA1_1 * inverseA2x2multiplier;

  ans1_1.value = Math.round((rndAns1_1 + Number.EPSILON) * 100) / 100;
  ans1_2.value = -Math.round((rndAns1_2 + Number.EPSILON) * 100) / 100;
  ans2_1.value = -Math.round((rndAns2_1 + Number.EPSILON) * 100) / 100;
  ans2_2.value = Math.round((rndAns2_2 + Number.EPSILON) * 100) / 100;

  minusb = (manA1_2 * -1);
  minusc = (manA2_1 * -1);

  document.getElementById("ansMathJaxMatrix").innerHTML = "\\begin{bmatrix} " + ans1_1.value + " & " + ans1_2.value + "\\\\ " + ans2_1.value +
    " & " + ans2_2.value + "\\" + "end{bmatrix}" + " <br> If the matrix above is blank, this is because the determinant is 0. A matrix with a determinant of 0 " +
    "does not have an inverse.";

  document.getElementById("ansMathJaxMatrix").style.display = "block";
  document.getElementById("determinantAns").style.display = "none";
  document.getElementById("stepsOneButton").style.display = "block";
  document.getElementById("stepsTwoButton").style.display = "block";
  document.getElementById("stepsThreeButton").style.display = "block";
  document.getElementById("stepsFourButton").style.display = "block";
  document.getElementById("stepsFiveButton").style.display = "block";
  document.getElementById("workedSolutionButton").style.display = "block";

  stepsOne.innerHTML = "Transpose the matrix - write the rows as columns:" +
    "<br><br>$\\begin{bmatrix}a&b\\\\c&d\\end{bmatrix} = \\begin{bmatrix}a&c\\\\b&d\\end{bmatrix}$";
  stepsTwo.innerHTML = "Replace each element of the transposed matrix by its cofactor, to get the adjoint matrix: $\\begin{bmatrix}d&-b\\\\-c&a\\" +
    "end{bmatrix}$";
  stepsThree.innerHTML = "Calculate the determinant : <br>$\\begin{bmatrix}a&b\\\\c&d\\end{bmatrix} =\\begin{vmatrix}a & b" +
    "\\\\c & d\\end{vmatrix} = ad-bc$";
  stepsFour.innerHTML = "Divide the adjoint matrix by the determinant to give the result: $A^{-1} =\\frac{adj(A)}{|A|}$";
  stepsFive.innerHTML = "<br><br> To write another way: $A^{-1} = \\frac{1}{ad-cb}$&ensp; x&ensp; $\\begin{bmatrix}d&-b\\\\-c&a\\end{bmatrix}$";
  workedSolution.innerHTML = "<br>$A^{-1} = \\frac{1}{" + determinantA2x2 + "}$&ensp; x&ensp; $\\begin{bmatrix}" + a2_2.value + "& " + minusb + "\\\\" +
    minusc + "&" + a1_1.value + "\\end{bmatrix}$" + "<br><br><br> $A^{-1} = \\begin{bmatrix} " + ans1_1.value + " & " + ans1_2.value + "\\\\ " + ans2_1.value +
    " & " + ans2_2.value + "\\" + "end{bmatrix}$" +
    " <br> If the matrix above is blank, this is because the determinant is 0. A matrix with a determinant of 0 does not have an inverse.";

  if (determinantA2x2 === 0) {
    clearFunc();
    hideSteps();
    document.getElementById("ansMathJaxMatrix").style.display = "block";
    document.getElementById("ansMathJaxMatrix").innerHTML = "The determinant of matrix A is 0. A matrix with a determinant of 0 does not have an inverse.";
  } else {
    document.getElementById("ansMathJaxMatrix").innerHTML = "\\begin{bmatrix} " + ans1_1.value + " & " + ans1_2.value + "\\\\ " + ans2_1.value +
      " & " + ans2_2.value + "\\" + "end{bmatrix}";
    workedSolution.innerHTML = "<br>$A^{-1} = \\frac{1}{" + determinantA2x2 + "}$&ensp; x&ensp; $\\begin{bmatrix}" + a2_2.value + "& " + minusb + "\\\\" +
      minusc + "&" + a1_1.value + "\\end{bmatrix}$" + "<br><br><br> $A^{-1} = \\begin{bmatrix} " + ans1_1.value + " & " + ans1_2.value + "\\\\ " + ans2_1.value +
      " & " + ans2_2.value + "\\" + "end{bmatrix}$";
  }

  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}

inverseB.onclick = function() {
  clearFunc();
  hideSteps();

  var manB1_1 = b1_1.value;
  var manB1_2 = b1_2.value;
  var manB2_1 = b2_1.value;
  var manB2_2 = b2_2.value;

  determinantB2x2 = (Number(manB1_1) * Number(manB2_2)) - (Number(manB1_2) * Number(manB2_1));

  inverseB2x2multiplier = 1 / determinantB2x2;

  rndBAns1_1 = manB2_2 * inverseB2x2multiplier;
  rndBAns1_2 = -(manB1_2 * inverseB2x2multiplier);
  rndBAns2_1 = -(manB2_1 * inverseB2x2multiplier);
  rndBAns2_2 = manB1_1 * inverseB2x2multiplier;

  ans1_1.value = Math.round((rndBAns1_1 + Number.EPSILON) * 100) / 100;
  ans1_2.value = -Math.round((rndBAns1_2 + Number.EPSILON) * 100) / 100;
  ans2_1.value = -Math.round((rndBAns2_1 + Number.EPSILON) * 100) / 100;
  ans2_2.value = Math.round((rndBAns2_2 + Number.EPSILON) * 100) / 100;

  minusb = (manB1_2 * -1);
  minusc = (manB2_1 * -1);

  document.getElementById("ansMathJaxMatrix").innerHTML = "\\begin{bmatrix} " + ans1_1.value + " & " + ans1_2.value + "\\\\ " + ans2_1.value +
    " & " + ans2_2.value + "\\" + "end{bmatrix}";

  document.getElementById("ansMathJaxMatrix").style.display = "block";
  document.getElementById("determinantAns").style.display = "none";
  document.getElementById("stepsOneButton").style.display = "block";
  document.getElementById("stepsTwoButton").style.display = "block";
  document.getElementById("stepsThreeButton").style.display = "block";
  document.getElementById("stepsFourButton").style.display = "block";
  document.getElementById("stepsFiveButton").style.display = "block";
  document.getElementById("workedSolutionButton").style.display = "block";

  stepsOne.innerHTML = "Transpose the matrix - write the rows as columns:" +
    "<br><br>$\\begin{bmatrix}a&b\\\\c&d\\end{bmatrix} = \\begin{bmatrix}a&c\\\\b&d\\end{bmatrix}$";
  stepsTwo.innerHTML = "Replace each element of the transposed matrix by its cofactor, to get the adjoint matrix: $\\begin{bmatrix}d&-b\\\\-c&a\\" +
    "end{bmatrix}$";
  stepsThree.innerHTML = "Calculate the determinant : <br>$\\begin{bmatrix}a&b\\\\c&d\\end{bmatrix} =\\begin{vmatrix}a & b" +
    "\\\\c & d\\end{vmatrix} = ad-bc$";
  stepsFour.innerHTML = "Divide the adjoint matrix by the determinant to give the result: $A^{-1} =\\frac{adj(A)}{|A|}$";
  stepsFive.innerHTML = "<br><br> To write another way: $A^{-1} = \\frac{1}{ad-cb}$&ensp; x&ensp; $\\begin{bmatrix}d&-b\\\\-c&a\\end{bmatrix}$";
  workedSolution.innerHTML = "<br>$B^{-1} = \\frac{1}{" + determinantB2x2 + "}$&ensp; x&ensp; $\\begin{bmatrix}" + b2_2.value + "& " + minusb +
    "\\\\" + minusc + "&" + b1_1.value + "\\end{bmatrix}$" + "<br><br><br> $B^{-1} = \\begin{bmatrix} " + ans1_1.value + " & " +
    ans1_2.value + "\\\\ " + ans2_1.value + " & " + ans2_2.value + "\\" + "end{bmatrix}$" +
    " <br> If the matrix above is blank, this is because the determinant is 0. A matrix with a determinant of 0 does not have an inverse.";

  if (determinantB2x2 === 0) {
    clearFunc();
    hideSteps();
    document.getElementById("ansMathJaxMatrix").style.display = "block";
    document.getElementById("ansMathJaxMatrix").innerHTML = "The determinant of matrix B is 0. A matrix with a determinant of 0 does not have an inverse.";
  } else {
    document.getElementById("ansMathJaxMatrix").innerHTML = "\\begin{bmatrix} " + ans1_1.value + " & " + ans1_2.value + "\\\\ " + ans2_1.value +
      " & " + ans2_2.value + "\\" + "end{bmatrix}";
    workedSolution.innerHTML = "<br>$B^{-1} = \\frac{1}{" + determinantB2x2 + "}$&ensp; x&ensp; $\\begin{bmatrix}" + b2_2.value + "& " + minusb + "\\\\" +
      minusc + "&" + b1_1.value + "\\end{bmatrix}$" + "<br><br><br> $B^{-1} = \\begin{bmatrix} " + ans1_1.value + " & " + ans1_2.value + "\\\\ " + ans2_1.value +
      " & " + ans2_2.value + "\\" + "end{bmatrix}$";
  }



  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}

transposeA2x2.onclick = function() {
  //could make each constant but shouldn't need to, works ok as is - not broke don't fix
  clearFunc();
  hideSteps();

  var manA1_1 = a1_1.value;
  var manA1_2 = a1_2.value;
  var manA2_1 = a2_1.value;
  var manA2_2 = a2_2.value;

  ans1_1.value = manA1_1;
  ans1_2.value = manA2_1;
  ans2_1.value = manA1_2;
  ans2_2.value = manA2_2;

  document.getElementById("ansMathJaxMatrix").innerHTML = "\\(A ^T\\) = $\\begin{bmatrix}" +
    ans1_1.value + "&" + ans1_2.value + "\\\\" + ans2_1.value + "& " + ans2_2.value + "\\end{bmatrix}$";

  document.getElementById("ansMathJaxMatrix").style.display = "block";
  document.getElementById("stepsOneButton").style.display = "block";
  document.getElementById("workedSolutionButton").style.display = "block";

  stepsOne.innerHTML = "Write the rows as columns:" +
    "\\begin{bmatrix}a&b\\\\c&d\\end{bmatrix} = \\begin{bmatrix}a&c\\\\b&d\\end{bmatrix}";

  workedSolution.innerHTML = "\\(A ^T\\) = $\\begin{bmatrix}" +
    ans1_1.value + "&" + ans1_2.value + "\\\\" + ans2_1.value + "& " + ans2_2.value + "\\end{bmatrix}$";

  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}

transposeB2x2.onclick = function() {
  //could make each constant but shouldn't need to, works ok as is - not broke don't fix
  clearFunc();
  hideSteps();

  var manB1_1 = b1_1.value;
  var manB1_2 = b1_2.value;
  var manB2_1 = b2_1.value;
  var manB2_2 = b2_2.value;

  ans1_1.value = manB1_1;
  ans1_2.value = manB2_1;
  ans2_1.value = manB1_2;
  ans2_2.value = manB2_2;

  document.getElementById("ansMathJaxMatrix").innerHTML = "\\(B^T\\) = $\\begin{bmatrix}" +
    ans1_1.value + "&" + ans1_2.value + "\\\\" + ans2_1.value + "& " + ans2_2.value + "\\end{bmatrix}$";

  document.getElementById("ansMathJaxMatrix").style.display = "block";
  document.getElementById("stepsOneButton").style.display = "block";
  document.getElementById("workedSolutionButton").style.display = "block";

  stepsOne.innerHTML = "Write the rows as columns:" +
    "\\begin{bmatrix}a&b\\\\c&d\\end{bmatrix} = \\begin{bmatrix}a&c\\\\b&d\\end{bmatrix}";

  workedSolution.innerHTML = "\\(B^T\\) = $\\begin{bmatrix}" +
    ans1_1.value + "&" + ans1_2.value + "\\\\" + ans2_1.value + "& " + ans2_2.value + "\\end{bmatrix}$";

  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}

determinantA2x2.onclick = function() {
  clearFunc();
  hideSteps();

  var manA1_1 = a1_1.value;
  var manA1_2 = a1_2.value;
  var manA2_1 = a2_1.value;
  var manA2_2 = a2_2.value;

  determinantA2x2 = (Number(manA1_1) * Number(manA2_2)) - (Number(manA1_2) * Number(manA2_1));
  determinantAns.innerHTML = "The determinant of Matrix A is " + determinantA2x2 + "." + " <br> Click below to see how it's done.";

  document.getElementById("ansMathJaxMatrix").style.display = "block";
  document.getElementById("determinantAns").style.display = "block";
  document.getElementById("stepsOneButton").style.display = "block";
  document.getElementById("workedSolutionButton").style.display = "block";

  stepsOne.innerHTML = "$\\begin{bmatrix}a&b\\\\c&d\\end{bmatrix} =\\begin{vmatrix}a & b\\\\c & d\\end{vmatrix} = ad-bc$";
  workedSolution.innerHTML = "$(" + a1_1.value +
    "$ x $ " + a2_2.value + ") - (" + a1_2.value + "$ x $" + a2_1.value + ") = " + determinantA2x2 + "$";

  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}
//jQuery
//$("determinantAns").text("The determinant of Matrix A is " + determinantA2x2);
//$("determinantAns").html("The determinant of Matrix A is " + determinantA2x2);

determinantB2x2.onclick = function() {
  clearFunc();
  hideSteps();

  var manB1_1 = b1_1.value;
  var manB1_2 = b1_2.value;
  var manB2_1 = b2_1.value;
  var manB2_2 = b2_2.value;

  determinantB2x2 = (Number(manB1_1) * Number(manB2_2)) - (Number(manB1_2) * Number(manB2_1));
  determinantAns.innerHTML = "The determinant of Matrix B is " + determinantB2x2 + "." + " <br> Click below to see how it's done.";

  document.getElementById("ansMathJaxMatrix").style.display = "block";
  document.getElementById("determinantAns").style.display = "block";
  document.getElementById("stepsOneButton").style.display = "block";
  document.getElementById("workedSolutionButton").style.display = "block";

  stepsOne.innerHTML = "$\\begin{bmatrix}a&b\\\\c&d\\end{bmatrix} =\\begin{vmatrix}a & b\\\\c & d\\end{vmatrix} = ad-bc$";
  workedSolution.innerHTML = "$(" + b1_1.value + "$ x $ " + b2_2.value + ") - (" + b1_2.value + "$ x $" + b2_1.value + ") = " +
    determinantB2x2 + "$";

  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}

addition2x2.onclick = function() {
  clearFunc();
  hideSteps();

  var manA1_1 = a1_1.value;
  var manA1_2 = a1_2.value;
  var manA2_1 = a2_1.value;
  var manA2_2 = a2_2.value;

  var manB1_1 = b1_1.value;
  var manB1_2 = b1_2.value;
  var manB2_1 = b2_1.value;
  var manB2_2 = b2_2.value;

  ans1_1.value = Number(manA1_1) + Number(manB1_1);
  ans1_2.value = Number(manA1_2) + Number(manB1_2);
  ans2_1.value = Number(manA2_1) + Number(manB2_1);
  ans2_2.value = Number(manA2_2) + Number(manB2_2);

  document.getElementById("ansMathJaxMatrix").innerHTML = "\\begin{bmatrix} " + ans1_1.value + " & " + ans1_2.value + "\\\\ " + ans2_1.value +
    " & " + ans2_2.value + "\\" + "end{bmatrix}";

  document.getElementById("ansMathJaxMatrix").style.display = "block";
  document.getElementById("stepsOneButton").style.display = "block";
  document.getElementById("stepsTwoButton").style.display = "block";
  document.getElementById("workedSolutionButton").style.display = "block";

  stepsOne.innerHTML = "Ensure the matrices are the same size.";
  stepsTwo.innerHTML = "Add the corresponding elements of each matrix" +
    "<br><br> $\\begin{bmatrix} a{_1}{_,}{_1} + b{_1}{_,}{_1} & a{_1}{_,}{_2}  + b{_1}{_,}{_2} \\\\ a{_2}{_,}{_1}  + b{_2}{_,}{_1} & a{_2}{_,}{_2}" +
    " + b{_2}{_,}{_2}\\end{bmatrix}$";
  workedSolution.innerHTML = "<br><br> &emsp;&emsp; $=$ <br><br> $\\begin{bmatrix} " + a1_1.value + " &nbsp;+ &nbsp;" + b1_1.value + "&" +
    a1_2.value + " &nbsp;+ &nbsp;" + b1_2.value + "\\\\" + a2_1.value + " &nbsp;+ &nbsp;" + b2_1.value + "&" + a2_2.value + " &nbsp;+ &nbsp;" +
    b2_2.value + "\\end{bmatrix}$" + "<br><br> $A + B = \\begin{bmatrix} " + ans1_1.value + " & " + ans1_2.value + "\\\\ " + ans2_1.value +
    " & " + ans2_2.value + "\\" + "end{bmatrix}$";

  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}

subtraction2x2AminusB.onclick = function() {
  clearFunc();
  hideSteps();

  var manA1_1 = a1_1.value;
  var manA1_2 = a1_2.value;
  var manA2_1 = a2_1.value;
  var manA2_2 = a2_2.value;

  var manB1_1 = b1_1.value;
  var manB1_2 = b1_2.value;
  var manB2_1 = b2_1.value;
  var manB2_2 = b2_2.value;

  ans1_1.value = Number(manA1_1) - Number(manB1_1);
  ans1_2.value = Number(manA1_2) - Number(manB1_2);
  ans2_1.value = Number(manA2_1) - Number(manB2_1);
  ans2_2.value = Number(manA2_2) - Number(manB2_2);

  document.getElementById("ansMathJaxMatrix").innerHTML = "\\begin{bmatrix} " + ans1_1.value + " & " + ans1_2.value + "\\\\ " + ans2_1.value +
    " & " + ans2_2.value + "\\" + "end{bmatrix}";

  document.getElementById("ansMathJaxMatrix").style.display = "block";
  document.getElementById("stepsOneButton").style.display = "block";
  document.getElementById("stepsTwoButton").style.display = "block";
  document.getElementById("workedSolutionButton").style.display = "block";

  stepsOne.innerHTML = "Ensure the matrices are the same size.";
  stepsTwo.innerHTML = "Subtract the corresponding elements of each matrix" +
    "<br><br> $\\begin{bmatrix} a{_1}{_,}{_1} - b{_1}{_,}{_1} & a{_1}{_,}{_2} - b{_1}{_,}{_2} \\\\ a{_2}{_,}{_1}  - b{_2}{_,}{_1} & a{_2}{_,}{_2}  " +
    "- b{_2}{_,}{_2}\\end{bmatrix}$";
  workedSolution.innerHTML = "<br><br> &emsp;&emsp; $=$ <br><br> $\\begin{bmatrix} " + a1_1.value + " &nbsp;- &nbsp;" + b1_1.value + "&" + a1_2.value +
    " &nbsp;- &nbsp;" + b1_2.value + "\\\\" + a2_1.value + " &nbsp;- &nbsp;" + b2_1.value + "&" + a2_2.value + " &nbsp;- &nbsp;" + b2_2.value +
    "\\end{bmatrix}$" + "<br><br> $A - B = \\begin{bmatrix} " + ans1_1.value + " & " + ans1_2.value + "\\\\ " + ans2_1.value +
    " & " + ans2_2.value + "\\" + "end{bmatrix}$";

  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}

subtraction2x2BminusA.onclick = function() {
  clearFunc();
  hideSteps();
  var manA1_1 = a1_1.value;
  var manA1_2 = a1_2.value;
  var manA2_1 = a2_1.value;
  var manA2_2 = a2_2.value;

  var manB1_1 = b1_1.value;
  var manB1_2 = b1_2.value;
  var manB2_1 = b2_1.value;
  var manB2_2 = b2_2.value;

  ans1_1.value = Number(manB1_1) - Number(manA1_1);
  ans1_2.value = Number(manB1_2) - Number(manA1_2);
  ans2_1.value = Number(manB2_1) - Number(manA2_1);
  ans2_2.value = Number(manB2_2) - Number(manA2_2);

  document.getElementById("ansMathJaxMatrix").innerHTML = "\\begin{bmatrix} " + ans1_1.value + " & " + ans1_2.value + "\\\\ " + ans2_1.value +
    " & " + ans2_2.value + "\\" + "end{bmatrix}";

  document.getElementById("ansMathJaxMatrix").style.display = "block";
  document.getElementById("stepsOneButton").style.display = "block";
  document.getElementById("stepsTwoButton").style.display = "block";
  document.getElementById("workedSolutionButton").style.display = "block";

  stepsOne.innerHTML = "Ensure the matrices are the same size.";
  stepsTwo.innerHTML = "Subtract the corresponding elements of each matrix" +
    "<br><br> $\\begin{bmatrix} b{_1}{_,}{_1} - a{_1}{_,}{_1} & b{_1}{_,}{_2} - a{_1}{_,}{_2} \\\\ b{_2}{_,}{_1}  - a{_2}{_,}{_1} & b{_2}{_,}{_2} " +
    " - a{_2}{_,}{_2}\\end{bmatrix}$";
  workedSolution.innerHTML = "<br><br> &emsp;&emsp; $=$ <br><br> $\\begin{bmatrix} " + b1_1.value + " &nbsp;- &nbsp;" + a1_1.value + "&" + b1_2.value +
    " &nbsp;- &nbsp;" + a1_2.value + "\\\\" + b2_1.value + " &nbsp;- &nbsp;" + a2_1.value + "&" + b2_2.value + " &nbsp;- &nbsp;" + a2_2.value +
    "\\end{bmatrix}$" + "<br><br>$B - A = \\begin{bmatrix} " + ans1_1.value + " & " + ans1_2.value + "\\\\ " + ans2_1.value +
    " & " + ans2_2.value + "\\" + "end{bmatrix}$";

  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}

multiplyAB2x2.onclick = function() {
  clearFunc();
  hideSteps();

  var manA1_1 = a1_1.value;
  var manA1_2 = a1_2.value;
  var manA2_1 = a2_1.value;
  var manA2_2 = a2_2.value;

  var manB1_1 = b1_1.value;
  var manB1_2 = b1_2.value;
  var manB2_1 = b2_1.value;
  var manB2_2 = b2_2.value;

  ans1_1.value = ((Number(manA1_1) * Number(manB1_1)) + ((Number(manA1_2) * Number(manB2_1))));

  ans1_2.value = ((Number(manA1_1) * Number(manB1_2)) + ((Number(manA1_2) * Number(manB2_2))));

  ans2_1.value = ((Number(manA2_1) * Number(manB1_1)) + ((Number(manA2_2) * Number(manB2_1))));

  ans2_2.value = ((Number(manA2_1) * Number(manB1_2)) + ((Number(manA2_2) * Number(manB2_2))));

  document.getElementById("ansMathJaxMatrix").innerHTML = "\\begin{bmatrix} " + ans1_1.value + " & " + ans1_2.value + "\\\\ " + ans2_1.value +
    " & " + ans2_2.value + "\\" + "end{bmatrix}";

  document.getElementById("ansMathJaxMatrix").style.display = "block";
  document.getElementById("stepsOneButton").style.display = "block";
  document.getElementById("stepsTwoButton").style.display = "block";
  document.getElementById("stepsThreeButton").style.display = "block";
  document.getElementById("stepsFourButton").style.display = "block";
  document.getElementById("stepsFiveButton").style.display = "block";
  document.getElementById("workedSolutionButton").style.display = "block";

  stepsOne.innerHTML = "Ensure the number of columns of matrix A is equal to the number of rows of matrix B.";
  stepsTwo.innerHTML = "Calculate the dot product of the first row of the first matrix by the corresponding member of the first column of the second matrix" +
    "i.e. $a{_1}{_,}{_1}$ x $b{_1}{_,}{_1}$ + $a{_1}{_,}{_2}$ x $b{_2}{_,}{_1}$ . <br>" +
    "This will give you the element of the first row and first column of your new matrix; element $a{_1}{_,}{_1}$.";
  stepsThree.innerHTML = "Do this for the first row with the second column, this will give you the element for the first row," +
    " second column; $a{_1}{_,}{_2}$.<br>Continue doing this until all of the columns are complete.";
  stepsFour.innerHTML = "Move to the Second Row and replicate the actions.";
  stepsFive.innerHTML = "Simplified : $AB = &ensp;&ensp;&ensp;\\begin{bmatrix} a{_1}{_,}{_1} \\cdot b{_1}{_,}{_1} + a{_1}{_,}{_2} \\cdot b{_2}{_,}{_1} & " +
    "a{_1}{_,}{_1} \\cdot b{_1}{_,}{_2} + a{_1}{_,}{_2} \\cdot b{_2}{_,}{_2}" +
    "\\\\a{_2}{_,}{_1} \\cdot b{_1}{_,}{_1} + a{_2}{_,}{_2} \\cdot b{_2}{_,}{_1} &" +
    "a{_2}{_,}{_1} \\cdot b{_1}{_,}{_2} + a{_2}{_,}{_2} \\cdot b{_2}{_,}{_2}\\end{bmatrix}$";
  workedSolution.innerHTML = "<br><br> $AB = &ensp;&ensp;&ensp; \\begin{bmatrix}" + a1_1.value + "\\cdot" + b1_1.value + " + " + a1_2.value +
    "\\cdot" + b2_1.value + "&" + a1_1.value + "\\cdot" + b1_2.value + " + " + a1_2.value + "\\cdot" + b2_2.value + "\\\\" + a2_1.value + "\\cdot" +
    b1_1.value + " + " + a2_2.value + "\\cdot" + b2_1.value + "&" + a2_1.value + "\\cdot" + b1_2.value + " + " + a2_2.value + "\\cdot" + b2_2.value +
    "\\end{bmatrix}$";

  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);

}

multiplyBA2x2.onclick = function() {
  clearFunc();
  hideSteps();

  var manA1_1 = a1_1.value;
  var manA1_2 = a1_2.value;
  var manA2_1 = a2_1.value;
  var manA2_2 = a2_2.value;

  var manB1_1 = b1_1.value;
  var manB1_2 = b1_2.value;
  var manB2_1 = b2_1.value;
  var manB2_2 = b2_2.value;

  ans1_1.value = ((Number(manB1_1) * Number(manA1_1)) + ((Number(manB1_2) * Number(manA2_1))));

  ans1_2.value = ((Number(manB1_1) * Number(manA1_2)) + ((Number(manB1_2) * Number(manA2_2))));

  ans2_1.value = ((Number(manB2_1) * Number(manA1_1)) + ((Number(manB2_2) * Number(manA2_1))));

  ans2_2.value = ((Number(manB2_1) * Number(manA1_2)) + ((Number(manB2_2) * Number(manA2_2))));

  document.getElementById("ansMathJaxMatrix").innerHTML = "\\begin{bmatrix} " + ans1_1.value + " & " + ans1_2.value + "\\\\ " + ans2_1.value +
    " & " + ans2_2.value + "\\" + "end{bmatrix}";

  document.getElementById("ansMathJaxMatrix").style.display = "block";
  document.getElementById("stepsOneButton").style.display = "block";
  document.getElementById("stepsTwoButton").style.display = "block";
  document.getElementById("stepsThreeButton").style.display = "block";
  document.getElementById("stepsFourButton").style.display = "block";
  document.getElementById("stepsFiveButton").style.display = "block";
  document.getElementById("workedSolutionButton").style.display = "block";

  stepsOne.innerHTML = "Ensure the number of columns of matrix A is equal to the number of rows of matrix B.";
  stepsTwo.innerHTML = "Calculate the dot product of the first row of the first matrix by the corresponding member of the first column of the second matrix" +
    "i.e. $a{_1}{_,}{_1}$ x $b{_1}{_,}{_1}$ + $a{_1}{_,}{_2}$ x $b{_2}{_,}{_1}$ . <br>" +
    "This will give you the element of the first row and first column of your new matrix; element $a{_1}{_,}{_1}$.";
  stepsThree.innerHTML = "Do this for the first row with the second column, this will give you the element for the first row," +
    " second column; $a{_1}{_,}{_2}$.<br>Continue doing this until all of the columns are complete.";
  stepsFour.innerHTML = "Move to the Second Row and replicate the actions.";
  stepsFive.innerHTML = "Simplified : $BA = &ensp;&ensp;&ensp;\\begin{bmatrix} b{_1}{_,}{_1} \\cdot a{_1}{_,}{_1} + b{_1}{_,}{_2} \\cdot a{_2}{_,}{_1} & " +
    "b{_1}{_,}{_1} \\cdot a{_1}{_,}{_2} + b{_1}{_,}{_2} \\cdot a{_2}{_,}{_2}" +
    "\\\\b{_2}{_,}{_1} \\cdot a{_1}{_,}{_1} + b{_2}{_,}{_2} \\cdot a{_2}{_,}{_1} &" +
    "b{_2}{_,}{_1} \\cdot a{_1}{_,}{_2} + b{_2}{_,}{_2} \\cdot a{_2}{_,}{_2}\\end{bmatrix}$";
  workedSolution.innerHTML = "<br><br> $BA = &ensp;&ensp;&ensp; \\begin{bmatrix}" + b1_1.value + "\\cdot" + a1_1.value + " + " + b1_2.value +
    "\\cdot" + a2_1.value + "&" + b1_1.value + "\\cdot" + a1_2.value + " + " + b1_2.value + "\\cdot" + a2_2.value + "\\\\" + b2_1.value + "\\cdot" +
    a1_1.value + " + " + b2_2.value + "\\cdot" + a2_1.value + "&" + b2_1.value + "\\cdot" + a1_2.value + " + " + b2_2.value + "\\cdot" + a2_2.value +
    "\\end{bmatrix}$";

  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}

scalarA.onclick = function() {
  clearFunc();
  hideSteps();

  scalarA = scalarA2x2.value;
  manA1_1 = a1_1.value;
  manA1_2 = a1_2.value;
  manA2_1 = a2_1.value;
  manA2_2 = a2_2.value;

  ans1_1.value = Number(manA1_1) * Number(scalarA);
  ans1_2.value = Number(manA1_2) * Number(scalarA);
  ans2_1.value = Number(manA2_1) * Number(scalarA);
  ans2_2.value = Number(manA2_2) * Number(scalarA);

  document.getElementById("ansMathJaxMatrix").innerHTML = "\\begin{bmatrix} " + ans1_1.value + " & " + ans1_2.value + "\\\\ " + ans2_1.value +
    " & " + ans2_2.value + "\\" + "end{bmatrix}";

  document.getElementById("ansMathJaxMatrix").style.display = "block";
  document.getElementById("stepsOneButton").style.display = "block";
  document.getElementById("stepsTwoButton").style.display = "block";
  document.getElementById("workedSolutionButton").style.display = "block";

  stepsOne.innerHTML = "Let the Scalar = $\\lambda$";
  stepsTwo.innerHTML = "<br><br>Multiply the elements of the matrix by $\\lambda$" +
    "<br><br> $  \\begin{bmatrix} \\lambda\\cdot a& \\lambda\\cdot b\\\\ \\lambda\\cdot c & \\lambda\\cdot d\\end{bmatrix}$";
  workedSolution.innerHTML = "<br><br> &emsp;&emsp; $=$ <br><br> $\\begin{bmatrix} " + scalarA2x2.value + "\\cdot" + a1_1.value + " & " +
    scalarA2x2.value + "\\cdot " + a1_2.value + "\\\\ " + scalarA2x2.value + "\\cdot" + a2_1.value + " & " + scalarA2x2.value + "\\cdot " +
    a2_2.value + "\\end{bmatrix}$ <br><br> &emsp;&emsp; $=$ <br><br> $\\begin{bmatrix} " + ans1_1.value + " & " + ans1_2.value + "\\\\ " +
    ans2_1.value + " & " + ans2_2.value + "\\" + "end{bmatrix}$";

  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}

scalarB.onclick = function() {
  clearFunc();
  hideSteps();

  scalarB = scalarB2x2.value;
  manB1_1 = b1_1.value;
  manB1_2 = b1_2.value;
  manB2_1 = b2_1.value;
  manB2_2 = b2_2.value;

  ans1_1.value = Number(manB1_1) * Number(scalarB);
  ans1_2.value = Number(manB1_2) * Number(scalarB);
  ans2_1.value = Number(manB2_1) * Number(scalarB);
  ans2_2.value = Number(manB2_2) * Number(scalarB);

  document.getElementById("ansMathJaxMatrix").style.display = "block";
  document.getElementById("stepsOneButton").style.display = "block";
  document.getElementById("stepsTwoButton").style.display = "block";
  document.getElementById("workedSolutionButton").style.display = "block";

  stepsOne.innerHTML = "Let the Scalar = $\\lambda$";
  stepsTwo.innerHTML = "<br><br>Multiply the elements of the matrix by $\\lambda$" +
    "<br><br> $  \\begin{bmatrix} \\lambda\\cdot a& \\lambda\\cdot b\\\\ \\lambda\\cdot c & \\lambda\\cdot d\\end{bmatrix}$";
  workedSolution.innerHTML = "<br><br> &emsp;&emsp; $=$ <br><br> $\\begin{bmatrix} " + scalarB2x2.value + "\\cdot" + b1_1.value + " & " +
    scalarB2x2.value + "\\cdot " + b1_2.value + "\\\\ " + scalarB2x2.value + "\\cdot" + b2_1.value + " & " + scalarB2x2.value + "\\cdot " +
    b2_2.value + "\\end{bmatrix}$ <br><br> &emsp;&emsp; $=$ <br><br> $\\begin{bmatrix} " + ans1_1.value + " & " + ans1_2.value + "\\\\ " +
    ans2_1.value + " & " + ans2_2.value + "\\" + "end{bmatrix}$";

  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}
