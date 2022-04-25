
clearFunc = function() {
  //Clear all steps and determinant. Allows fresh start at the beginning of each function.
  //Answers matrix need not be re-written at this point as it will rewrite itself later in each function.
  document.getElementById("stepsOne").innerHTML = "";
  document.getElementById("stepsFour").innerHTML = "";
  document.getElementById("stepsThree").innerHTML = "";
  document.getElementById("stepsFour").innerHTML = "";
  document.getElementById("stepsFive").innerHTML = "";
  document.getElementById("stepsSix").innerHTML = "";
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
  stepsSix.style.display = "none";
  workedSolution.style.display = "none";

  //Hides buttons. By doing this, can individually tailor which step buttons are shown, so can alter for calculations with more/fewer steps
  stepsOneButton.style.display = "none";
  stepsTwoButton.style.display = "none";
  stepsThreeButton.style.display = "none";
  stepsFourButton.style.display = "none";
  stepsFiveButton.style.display = "none";
  stepsSixButton.style.display = "none";
  workedSolutionButton.style.display = "none";
  solutionPartition.style.display = "none";
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
stepsSixButton.onclick = function() {

  var x = document.getElementById("stepsSix");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("stepsSixButton").style.display = "none";
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

//navbar links
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
calculator2x2.onclick = function() {
  document.location = '7 2x2 Calculator.html';
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


copyAnstoA.onclick = function() {
  clearFunc();
  hideSteps();

  a1_1.value = ans1_1.value;
  a1_2.value = ans1_2.value;
  a1_3.value = ans1_3.value;
  a2_1.value = ans2_1.value;
  a2_2.value = ans2_2.value;
  a2_3.value = ans2_3.value;
  a3_1.value = ans3_1.value;
  a3_2.value = ans3_2.value;
  a3_3.value = ans3_3.value;
}

copyAnstoB.onclick = function() {
  clearFunc();
  hideSteps();

  b1_1.value = ans1_1.value;
  b1_2.value = ans1_2.value;
  b1_3.value = ans1_3.value;
  b2_1.value = ans2_1.value;
  b2_2.value = ans2_2.value;
  b2_3.value = ans2_3.value;
  b3_1.value = ans3_1.value;
  b3_2.value = ans3_2.value;
  b3_3.value = ans3_3.value;
}

randomA.onclick = function() {
  clearFunc();
  hideSteps();

  rndmNum1 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  a1_1.value = rndmNum1;

  rndmNum2 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  a1_2.value = rndmNum2;

  rndmNum3 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  a1_3.value = rndmNum3;

  rndmNum4 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  a2_1.value = rndmNum4;

  rndmNum5 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  a2_2.value = rndmNum5;

  rndmNum6 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  a2_3.value = rndmNum6;

  rndmNum7 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  a3_1.value = rndmNum7;

  rndmNum8 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  a3_2.value = rndmNum8;

  rndmNum9 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  a3_3.value = rndmNum9;

}

randomB.onclick = function() { //function to create random matrix B.
  clearFunc();
  hideSteps();

  rndmNum1 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  b1_1.value = rndmNum1;

  rndmNum2 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  b1_2.value = rndmNum2;

  rndmNum3 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  b1_3.value = rndmNum3;

  rndmNum4 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  b2_1.value = rndmNum4;

  rndmNum5 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  b2_2.value = rndmNum5;

  rndmNum6 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  b2_3.value = rndmNum6;

  rndmNum7 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  b3_1.value = rndmNum7;

  rndmNum8 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  b3_2.value = rndmNum8;

  rndmNum9 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  b3_3.value = rndmNum9;

}

inverseA.onclick = function() {
  clearFunc();
  hideSteps();

  var manA1_1 = a1_1.value;
  var manA1_2 = a1_2.value;
  var manA1_3 = a1_3.value;
  var manA2_1 = a2_1.value;
  var manA2_2 = a2_2.value;
  var manA2_3 = a2_3.value;
  var manA3_1 = a3_1.value;
  var manA3_2 = a3_2.value;
  var manA3_3 = a3_3.value;

  determinantA3x3 = (Number(manA1_1) * Number(manA2_2) * Number(manA3_3)) +
    (Number(manA1_2) * Number(manA2_3) * Number(manA3_1)) +
    (Number(manA1_3) * Number(manA2_1) * Number(manA3_2)) -
    (Number(manA3_1) * Number(manA2_2) * Number(manA1_3)) -
    (Number(manA3_2) * Number(manA2_3) * Number(manA1_1)) -
    (Number(manA3_3) * Number(manA2_1) * Number(manA1_2));

  transposed1_1 = manA1_1;
  transposed1_2 = manA2_1;
  transposed1_3 = manA3_1;
  transposed2_1 = manA1_2;
  transposed2_2 = manA2_2;
  transposed2_3 = manA3_2;
  transposed3_1 = manA1_3;
  transposed3_2 = manA2_3;
  transposed3_3 = manA3_3;

  deta = ((Number(transposed2_2) * Number(transposed3_3)) - (Number(transposed2_3) * Number(transposed3_2)));
  detb = ((Number(transposed2_1) * Number(transposed3_3)) - (Number(transposed2_3) * Number(transposed3_1))) * -1;
  detc = ((Number(transposed2_1) * Number(transposed3_2)) - (Number(transposed2_2) * Number(transposed3_1)));
  detd = ((Number(transposed1_2) * Number(transposed3_3)) - (Number(transposed1_3) * Number(transposed3_2))) * -1;
  dete = ((Number(transposed1_1) * Number(transposed3_3)) - (Number(transposed1_3) * Number(transposed3_1)));
  detf = ((Number(transposed1_1) * Number(transposed3_2)) - (Number(transposed1_2) * Number(transposed3_1))) * -1;
  detg = ((Number(transposed1_2) * Number(transposed2_3)) - (Number(transposed1_3) * Number(transposed2_2)));
  deth = ((Number(transposed1_1) * Number(transposed2_3)) - (Number(transposed1_3) * Number(transposed2_1))) * -1;
  deti = ((Number(transposed1_1) * Number(transposed2_2)) - (Number(transposed1_2) * Number(transposed2_1)));

  inverseA3x3multiplier = 1 / determinantA3x3;

  rndAns1_1 = inverseA3x3multiplier * deta;
  rndAns1_2 = inverseA3x3multiplier * detb;
  rndAns1_3 = inverseA3x3multiplier * detc;
  rndAns2_1 = inverseA3x3multiplier * detd;
  rndAns2_2 = inverseA3x3multiplier * dete;
  rndAns2_3 = inverseA3x3multiplier * detf;
  rndAns3_1 = inverseA3x3multiplier * detg;
  rndAns3_2 = inverseA3x3multiplier * deth;
  rndAns3_3 = inverseA3x3multiplier * deti;

  ans1_1.value = Math.round((rndAns1_1 + Number.EPSILON) * 100) / 100;
  ans1_2.value = Math.round((rndAns1_2 + Number.EPSILON) * 100) / 100;
  ans1_3.value = Math.round((rndAns1_3 + Number.EPSILON) * 100) / 100;
  ans2_1.value = Math.round((rndAns2_1 + Number.EPSILON) * 100) / 100;
  ans2_2.value = Math.round((rndAns2_2 + Number.EPSILON) * 100) / 100;
  ans2_3.value = Math.round((rndAns2_3 + Number.EPSILON) * 100) / 100;
  ans3_1.value = Math.round((rndAns3_1 + Number.EPSILON) * 100) / 100;
  ans3_2.value = Math.round((rndAns3_2 + Number.EPSILON) * 100) / 100;
  ans3_3.value = Math.round((rndAns3_3 + Number.EPSILON) * 100) / 100;

  document.getElementById("ansMathJaxMatrix").innerHTML = "$A ^{-1} = \\begin{bmatrix}  " + ans1_1.value +
    " & " + ans1_2.value + " & " + ans1_3.value + "\\\\ " + ans2_1.value + " & " + ans2_2.value + " & " + ans2_3.value + "\\\\ " +
    ans3_1.value + " & " + ans3_2.value + " & " + ans3_3.value + "\\end{bmatrix}$";

  document.getElementById("ansMathJaxMatrix").style.display = "block";
  document.getElementById("stepsOneButton").style.display = "block";
  document.getElementById("stepsTwoButton").style.display = "block";
  document.getElementById("stepsThreeButton").style.display = "block";
  document.getElementById("stepsFourButton").style.display = "block";
  document.getElementById("stepsFiveButton").style.display = "block";
  document.getElementById("stepsSixButton").style.display = "block";
  document.getElementById("workedSolutionButton").style.display = "block";
  document.getElementById("solutionPartition").style.display = "block";

  stepsOne.innerHTML = "Find the determinant of the matrix. If the determinant is 0, there is no inverse matrix. The matrix will be displayed as empty on this webpage." +
    "To calculate the determinant: $det (A) \\begin{bmatrix}a&b&c\\\\d&e&f\\\\g&h&i\\end{bmatrix}" +
    "= &ensp; aei+bfg+cdh-ceg-bdi-afh$";
  stepsTwo.innerHTML = "Transpose the original matrix: $A ^T = \\begin{bmatrix}a&d&g\\\\b&e&h\\\\c&f&i\\end{bmatrix}$";
  stepsThree.innerHTML = "Replace each element with the determinant of its 2 x 2 \"minor\" matrix." +
    " i.e. For $a$, the minor matrix will be the 2 x 2 matrix including $e, f, h$ and $i$ &ensp;= &ensp;$\\begin{bmatrix} \\huge{a}" +
    " & \\small{b}& \\small{c}\\\\ \\small{d}& \\huge{e}& \\huge{f}\\\\ \\small{g}& \\huge{h}& \\huge{i}\\end{bmatrix}$" +
    " <br><br>The element $a$ would be replaced by the value of $ei-fh$<br><br>";
  stepsFour.innerHTML = "Apply the matrix of co-factors to this new matrix.";
  stepsFive.innerHTML = "Divide each term of the adjugate matrix by the determinant";
  stepsSix.innerHTML = "To summarise : $A^{-1} &ensp; = &ensp;\\dfrac1{det (A)} \\begin{bmatrix}Adj (A)\\end{bmatrix}$";

  if (determinantA3x3 === 0) {
    clearFunc();
    hideSteps();
    document.getElementById("ansMathJaxMatrix").innerHTML = "The determinant of matrix A is 0. A matrix with a determinant of 0 does not have an inverse.";
    document.getElementById("workedSolutionButton").style.display = "none";
    document.getElementById("ansMathJaxMatrix").style.display = "block";

  } else {
    document.getElementById("ansMathJaxMatrix").innerHTML = "$A ^{-1} = \\begin{bmatrix}  " + ans1_1.value +
      " & " + ans1_2.value + " & " + ans1_3.value + "\\\\ " + ans2_1.value + " & " + ans2_2.value + " & " + ans2_3.value + "\\\\ " +
      ans3_1.value + " & " + ans3_2.value + " & " + ans3_3.value + "\\end{bmatrix}$"
    workedSolution.innerHTML = "The original matrix $A = \\begin{bmatrix} " + a1_1.value + " & " + a1_2.value + " & " +
      a1_3.value + "\\\\ " + a2_1.value + " & " + a2_2.value + " & " + a2_3.value + " \\\\ " + a3_1.value + " & " +
      a3_2.value + " & " + a3_3.value + "\\end{bmatrix}$ &ensp;&ensp;&ensp;" +
      "<br><br>" +
      "Step One: $Det (A) = " + a1_1.value + "\\begin{vmatrix}" +
      +a2_2.value + "&" + a2_3.value + "\\\\" + a3_2.value + "&" + a3_3.value + "\\end{vmatrix} - &ensp;" + a1_2.value + "\\begin{vmatrix}" + a2_1.value + "&" +
      a2_3.value + "\\\\" + a3_1.value + "&" + a3_3.value + "\\end{vmatrix} + &ensp;" + a1_3.value + "\\begin{vmatrix}" + a2_1.value + "&" + a2_2.value + "\\\\" +
      a3_1.value + "&" + a3_2.value + "\\end{vmatrix}&ensp; = &ensp; " + a1_1.value + "(" + a2_2.value + " \\cdot" + a3_3.value + ") + &ensp;" + a1_2.value +
      "(" + a2_3.value + " \\cdot" + a3_1.value + ") + " + a1_3.value + "(" + a2_1.value + " \\cdot" + a3_2.value + ") - &ensp;" + a1_3.value + "(" +
      a2_2.value + " \\cdot" + a3_1.value + ") - &ensp;" + a1_2.value + "(" + a2_1.value + " \\cdot" + a3_3.value +
      ") - &ensp;" + a1_1.value + "(" + a2_3.value + " \\cdot" + a3_2.value + ") &ensp;&ensp;=&ensp;" + determinantA3x3 +

      "$<br><br>Step Two: $ A ^T = \\begin{bmatrix}  " + transposed1_1 +
      " & " + transposed1_2 + " & " + transposed1_3 + "\\\\ " + transposed2_1 + " & " + transposed2_2 + " & " + transposed2_3 + "\\\\ " +
      transposed3_1 + " & " + transposed3_2 + " & " + transposed3_3 + "\\end{bmatrix}$<br><br>" +

      "Steps Three and Four: $Adj(A) = \\begin{bmatrix}  " + deta +
      " & " + detb + " & " + detc + "\\\\ " + detd + " & " + dete + " & " + detf + "\\\\ " +
      detg + " & " + deth + " & " + deti + "\\end{bmatrix} $<br><br>" +

      "Step Five: $A^{-1} &ensp; = &ensp;\\dfrac1{" + determinantA3x3 + "} \\begin{bmatrix} " + deta +
      " & " + detb + " & " + detc + "\\\\ " + detd + " & " + dete + " & " + detf + "\\\\ " +
      detg + " & " + deth + " & " + deti + "\\end{bmatrix}$ <br><br>" +

      "Final Answer: $A ^{-1} = \\begin{bmatrix}  " + ans1_1.value +
      " & " + ans1_2.value + " & " + ans1_3.value + "\\\\ " + ans2_1.value + " & " + ans2_2.value + " & " + ans2_3.value + "\\\\ " +
      ans3_1.value + " & " + ans3_2.value + " & " + ans3_3.value + "\\end{bmatrix}$";
  }

  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}

inverseB.onclick = function() {
  clearFunc();
  hideSteps();

  var manB1_1 = b1_1.value;
  var manB1_2 = b1_2.value;
  var manB1_3 = b1_3.value;
  var manB2_1 = b2_1.value;
  var manB2_2 = b2_2.value;
  var manB2_3 = b2_3.value;
  var manB3_1 = b3_1.value;
  var manB3_2 = b3_2.value;
  var manB3_3 = b3_3.value;

  determinantB3x3 = (Number(manB1_1) * Number(manB2_2) * Number(manB3_3)) +
    (Number(manB1_2) * Number(manB2_3) * Number(manB3_1)) +
    (Number(manB1_3) * Number(manB2_1) * Number(manB3_2)) -
    (Number(manB3_1) * Number(manB2_2) * Number(manB1_3)) -
    (Number(manB3_2) * Number(manB2_3) * Number(manB1_1)) -
    (Number(manB3_3) * Number(manB2_1) * Number(manB1_2));

  transposed1_1 = manB1_1;
  transposed1_2 = manB2_1;
  transposed1_3 = manB3_1;
  transposed2_1 = manB1_2;
  transposed2_2 = manB2_2;
  transposed2_3 = manB3_2;
  transposed3_1 = manB1_3;
  transposed3_2 = manB2_3;
  transposed3_3 = manB3_3;

  deta = ((Number(transposed2_2) * Number(transposed3_3)) - (Number(transposed2_3) * Number(transposed3_2)));
  detb = ((Number(transposed2_1) * Number(transposed3_3)) - (Number(transposed2_3) * Number(transposed3_1))) * -1;
  detc = ((Number(transposed2_1) * Number(transposed3_2)) - (Number(transposed2_2) * Number(transposed3_1)));
  detd = ((Number(transposed1_2) * Number(transposed3_3)) - (Number(transposed1_3) * Number(transposed3_2))) * -1;
  dete = ((Number(transposed1_1) * Number(transposed3_3)) - (Number(transposed1_3) * Number(transposed3_1)));
  detf = ((Number(transposed1_1) * Number(transposed3_2)) - (Number(transposed1_2) * Number(transposed3_1))) * -1;
  detg = ((Number(transposed1_2) * Number(transposed2_3)) - (Number(transposed1_3) * Number(transposed2_2)));
  deth = ((Number(transposed1_1) * Number(transposed2_3)) - (Number(transposed1_3) * Number(transposed2_1))) * -1;
  deti = ((Number(transposed1_1) * Number(transposed2_2)) - (Number(transposed1_2) * Number(transposed2_1)));

  inverseB3x3multiplier = 1 / determinantB3x3;

  rndAns1_1 = inverseB3x3multiplier * deta;
  rndAns1_2 = inverseB3x3multiplier * detb;
  rndAns1_3 = inverseB3x3multiplier * detc;
  rndAns2_1 = inverseB3x3multiplier * detd;
  rndAns2_2 = inverseB3x3multiplier * dete;
  rndAns2_3 = inverseB3x3multiplier * detf;
  rndAns3_1 = inverseB3x3multiplier * detg;
  rndAns3_2 = inverseB3x3multiplier * deth;
  rndAns3_3 = inverseB3x3multiplier * deti;

  ans1_1.value = Math.round((rndAns1_1 + Number.EPSILON) * 100) / 100;
  ans1_2.value = Math.round((rndAns1_2 + Number.EPSILON) * 100) / 100;
  ans1_3.value = Math.round((rndAns1_3 + Number.EPSILON) * 100) / 100;
  ans2_1.value = Math.round((rndAns2_1 + Number.EPSILON) * 100) / 100;
  ans2_2.value = Math.round((rndAns2_2 + Number.EPSILON) * 100) / 100;
  ans2_3.value = Math.round((rndAns2_3 + Number.EPSILON) * 100) / 100;
  ans3_1.value = Math.round((rndAns3_1 + Number.EPSILON) * 100) / 100;
  ans3_2.value = Math.round((rndAns3_2 + Number.EPSILON) * 100) / 100;
  ans3_3.value = Math.round((rndAns3_3 + Number.EPSILON) * 100) / 100;

  document.getElementById("ansMathJaxMatrix").style.display = "block";
  document.getElementById("stepsOneButton").style.display = "block";
  document.getElementById("stepsTwoButton").style.display = "block";
  document.getElementById("stepsThreeButton").style.display = "block";
  document.getElementById("stepsFourButton").style.display = "block";
  document.getElementById("stepsFiveButton").style.display = "block";
  document.getElementById("stepsSixButton").style.display = "block";
  document.getElementById("workedSolutionButton").style.display = "block";
  document.getElementById("solutionPartition").style.display = "block";

  stepsOne.innerHTML = "Find the determinant of the matrix. If the determinant is 0, there is no inverse matrix. The matrix will be displayed as empty on this webpage." +
    "To calculate the determinant: $det (B) \\begin{bmatrix}a&b&c\\\\d&e&f\\\\g&h&i\\end{bmatrix}" +
    "= &ensp; aei+bfg+cdh-ceg-bdi-afh$";
  stepsTwo.innerHTML = "Transpose the original matrix: $B ^T = \\begin{bmatrix}a&d&g\\\\b&e&h\\\\c&f&i\\end{bmatrix}$";
  stepsThree.innerHTML = "Replace each element with the determinant of its 2 x 2 \"minor\" matrix." +
    " i.e. For $a$, the minor matrix will be the 2 x 2 matrix including $e, f, h$ and $i$ &ensp;= &ensp;$\\begin{bmatrix} \\huge{a}" +
    " & \\small{b}& \\small{c}\\\\ \\small{d}& \\huge{e}& \\huge{f}\\\\ \\small{g}& \\huge{h}& \\huge{i}\\end{bmatrix}$" +
    " <br><br>The element $a$ would be replaced by the value of $ei-fh$<br><br>";
  stepsFour.innerHTML = "Apply the matrix of co-factors to this new matrix.";
  stepsFive.innerHTML = "Divide each term of the adjugate matrix by the determinant";
  stepsSix.innerHTML = "To summarise : $B^{-1} &ensp; = &ensp;\\dfrac1{det (B)} \\begin{bmatrix}Adj (B)\\end{bmatrix}$";

  if (determinantB3x3 === 0) {
    clearFunc();
    hideSteps();
    document.getElementById("ansMathJaxMatrix").innerHTML = "The determinant of matrix B is 0. A matrix with a determinant of 0 does not have an inverse.";
    document.getElementById("workedSolutionButton").style.display = "none";
    document.getElementById("ansMathJaxMatrix").style.display = "block";
  } else {
    document.getElementById("ansMathJaxMatrix").innerHTML = "$B^{-1} = \\begin{bmatrix}  " + ans1_1.value +
      " & " + ans1_2.value + " & " + ans1_3.value + "\\\\ " + ans2_1.value + " & " + ans2_2.value + " & " + ans2_3.value + "\\\\ " +
      ans3_1.value + " & " + ans3_2.value + " & " + ans3_3.value + "\\end{bmatrix}$";

    workedSolution.innerHTML = "The original matrix $B = \\begin{bmatrix} " + b1_1.value + " & " + b1_2.value + " & " +
      b1_3.value + "\\\\ " + b2_1.value + " & " + b2_2.value + " & " + b2_3.value + " \\\\ " + b3_1.value + " & " +
      b3_2.value + " & " + b3_3.value + "\\end{bmatrix}$ <br><br>"

      +
      "Step One: $Det (B) = " + b1_1.value + "\\begin{vmatrix}" +
      +b2_2.value + "&" + b2_3.value + "\\\\" + b3_2.value + "&" + b3_3.value + "\\end{vmatrix} - &ensp;" + b1_2.value + "\\begin{vmatrix}" + b2_1.value + "&" +
      b2_3.value + "\\\\" + b3_1.value + "&" + b3_3.value + "\\end{vmatrix} + &ensp;" + b1_3.value + "\\begin{vmatrix}" + b2_1.value + "&" + b2_2.value + "\\\\" +
      b3_1.value + "&" + b3_2.value + "\\end{vmatrix}&ensp; = &ensp; " + b1_1.value + "(" + b2_2.value + " \\cdot" + b3_3.value + ") + &ensp;" + b1_2.value +
      "(" + b2_3.value + " \\cdot" + b3_1.value + ") + " + b1_3.value + "(" + b2_1.value + " \\cdot" + b3_2.value + ") - &ensp;" + b1_3.value + "(" +
      b2_2.value + " \\cdot" + b3_1.value + ") - &ensp;" + b1_2.value + "(" + b2_1.value + " \\cdot" + b3_3.value +
      ") - &ensp;" + b1_1.value + "(" + b2_3.value + " \\cdot" + b3_2.value + ") &ensp;&ensp;=&ensp;" + determinantB3x3 +

      "$<br><br>Step Two: $ B ^T = \\begin{bmatrix}  " + transposed1_1 +
      " & " + transposed1_2 + " & " + transposed1_3 + "\\\\ " + transposed2_1 + " & " + transposed2_2 + " & " + transposed2_3 + "\\\\ " +
      transposed3_1 + " & " + transposed3_2 + " & " + transposed3_3 + "\\end{bmatrix}$<br><br>" +

      "Steps Three and Four: $Adj(B) = \\begin{bmatrix}  " + deta +
      " & " + detb + " & " + detc + "\\\\ " + detd + " & " + dete + " & " + detf + "\\\\ " +
      detg + " & " + deth + " & " + deti + "\\end{bmatrix} $<br><br>" +

      "Step Five: $B^{-1} &ensp; = &ensp;\\dfrac1{" + determinantB3x3 + "} \\begin{bmatrix} " + deta +
      " & " + detb + " & " + detc + "\\\\ " + detd + " & " + dete + " & " + detf + "\\\\ " +
      detg + " & " + deth + " & " + deti + "\\end{bmatrix}$ <br><br>" +

      "Final Answer: $B ^{-1} = \\begin{bmatrix}  " + ans1_1.value +
      " & " + ans1_2.value + " & " + ans1_3.value + "\\\\ " + ans2_1.value + " & " + ans2_2.value + " & " + ans2_3.value + "\\\\ " +
      ans3_1.value + " & " + ans3_2.value + " & " + ans3_3.value + "\\end{bmatrix}$";
  }

  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}

transposeA3x3.onclick = function() {
  clearFunc();
  hideSteps();

  var manA1_1 = a1_1.value;
  var manA1_2 = a1_2.value;
  var manA1_3 = a1_3.value;
  var manA2_1 = a2_1.value;
  var manA2_2 = a2_2.value;
  var manA2_3 = a2_3.value;
  var manA3_1 = a3_1.value;
  var manA3_2 = a3_2.value;
  var manA3_3 = a3_3.value;

  ans1_1.value = manA1_1;
  ans1_2.value = manA2_1;
  ans1_3.value = manA3_1;
  ans2_1.value = manA1_2;
  ans2_2.value = manA2_2;
  ans2_3.value = manA3_2;
  ans3_1.value = manA1_3;
  ans3_2.value = manA2_3;
  ans3_3.value = manA3_3;

  document.getElementById("ansMathJaxMatrix").innerHTML = "$A ^T = \\begin{bmatrix}  " + ans1_1.value +
    " & " + ans1_2.value + " & " + ans1_3.value + "\\\\ " + ans2_1.value + " & " + ans2_2.value + " & " + ans2_3.value + "\\\\ " +
    ans3_1.value + " & " + ans3_2.value + " & " + ans3_3.value + "\\end{bmatrix}$";

  document.getElementById("ansMathJaxMatrix").style.display = "block";
  document.getElementById("stepsOneButton").style.display = "block";
  document.getElementById("workedSolutionButton").style.display = "block";

  stepsOne.innerHTML = "Write the rows as columns:" +
    "$\\begin{bmatrix} a & d & g\\\\ b & e & h \\\\ c & f & i\\end{bmatrix}$";

  workedSolution.innerHTML = "$A = \\begin{bmatrix}  " + a1_1.value +
    " & " + a1_2.value + " & " + a1_3.value + "\\\\ " + a2_1.value + " & " + a2_2.value + " & " + a2_3.value + "\\\\ " +
    a3_1.value + " & " + a3_2.value + " & " + a3_3.value + "\\end{bmatrix} &emsp;&emsp; = &emsp;&emsp;A ^T = \\begin{bmatrix}  " + ans1_1.value +
    " & " + ans1_2.value + " & " + ans1_3.value + "\\\\ " + ans2_1.value + " & " + ans2_2.value + " & " + ans2_3.value + "\\\\ " +
    ans3_1.value + " & " + ans3_2.value + " & " + ans3_3.value + "\\end{bmatrix}$";

  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}

transposeB3x3.onclick = function() {
  clearFunc();
  hideSteps();

  var manB1_1 = b1_1.value;
  var manB1_2 = b1_2.value;
  var manB1_3 = b1_3.value;
  var manB2_1 = b2_1.value;
  var manB2_2 = b2_2.value;
  var manB2_3 = b2_3.value;
  var manB3_1 = b3_1.value;
  var manB3_2 = b3_2.value;
  var manB3_3 = b3_3.value;


  ans1_1.value = manB1_1;
  ans1_2.value = manB2_1;
  ans1_3.value = manB3_1;
  ans2_1.value = manB1_2;
  ans2_2.value = manB2_2;
  ans2_3.value = manB3_2;
  ans3_1.value = manB1_3;
  ans3_2.value = manB2_3;
  ans3_3.value = manB3_3;

  document.getElementById("ansMathJaxMatrix").innerHTML = "$B ^T = \\begin{bmatrix}  " + ans1_1.value +
    " & " + ans1_2.value + " & " + ans1_3.value + "\\\\ " + ans2_1.value + " & " + ans2_2.value + " & " + ans2_3.value + "\\\\ " +
    ans3_1.value + " & " + ans3_2.value + " & " + ans3_3.value + "\\end{bmatrix}$";

  document.getElementById("ansMathJaxMatrix").style.display = "block";
  document.getElementById("stepsOneButton").style.display = "block";
  document.getElementById("workedSolutionButton").style.display = "block";

  stepsOne.innerHTML = "Write the rows as columns:" +
    "$\\begin{bmatrix} a & d & g\\\\ b & e & h \\\\ c & f & i\\end{bmatrix}$";

  workedSolution.innerHTML = "$B = \\begin{bmatrix}  " + b1_1.value +
    " & " + b1_2.value + " & " + b1_3.value + "\\\\ " + b2_1.value + " & " + b2_2.value + " & " + b2_3.value + "\\\\ " +
    b3_1.value + " & " + b3_2.value + " & " + b3_3.value + "\\end{bmatrix} &emsp;&emsp; = &emsp;&emsp;B ^T = \\begin{bmatrix}  " + ans1_1.value +
    " & " + ans1_2.value + " & " + ans1_3.value + "\\\\ " + ans2_1.value + " & " + ans2_2.value + " & " + ans2_3.value + "\\\\ " +
    ans3_1.value + " & " + ans3_2.value + " & " + ans3_3.value + "\\end{bmatrix}$";

  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}

determinantA3x3.onclick = function() {
  clearFunc();
  hideSteps();

  var manA1_1 = a1_1.value;
  var manA1_2 = a1_2.value;
  var manA1_3 = a1_3.value;
  var manA2_1 = a2_1.value;
  var manA2_2 = a2_2.value;
  var manA2_3 = a2_3.value;
  var manA3_1 = a3_1.value;
  var manA3_2 = a3_2.value;
  var manA3_3 = a3_3.value;

  determinantA3x3 = (Number(manA1_1) * Number(manA2_2) * Number(manA3_3)) +
    (Number(manA1_2) * Number(manA2_3) * Number(manA3_1)) +
    (Number(manA1_3) * Number(manA2_1) * Number(manA3_2)) -
    (Number(manA3_1) * Number(manA2_2) * Number(manA1_3)) -
    (Number(manA3_2) * Number(manA2_3) * Number(manA1_1)) -
    (Number(manA3_3) * Number(manA2_1) * Number(manA1_2));

  document.getElementById("determinantAns").innerHTML = "The determinant of Matrix A is " + determinantA3x3 + "." + " <br> Click below to see how it's done.";

  document.getElementById("determinantAns").style.display = "block";
  document.getElementById("stepsOneButton").style.display = "block";
  document.getElementById("stepsTwoButton").style.display = "block";
  document.getElementById("stepsThreeButton").style.display = "block";
  document.getElementById("stepsFourButton").style.display = "block";
  document.getElementById("stepsFiveButton").style.display = "block";
  document.getElementById("workedSolutionButton").style.display = "block";
  document.getElementById("solutionPartition").style.display = "block";

  stepsOne.innerHTML = "Multiply $a$ by the determinant of the 2 x 2 matrix that is not in the same row or column as $a$";
  stepsTwo.innerHTML = "Do the same for $-b$. Note the negative sign.";
  stepsThree.innerHTML = "Do the same for $c$";
  stepsFour.innerHTML = "Add them all together";
  stepsFive.innerHTML = "Summarised : $Det (A) = \\begin{bmatrix}a&b&c\\\\d&e&f\\\\g&h&i\\end{bmatrix} = \\begin{vmatrix}a&b&c\\\\d&e&f\\\\g&h&i" +
    "\\end{vmatrix} = a\\begin{vmatrix} d&f\\\\h&i\\end{vmatrix} -b\\begin{vmatrix}d&f\\\\g&i\\end{vmatrix}+c\\begin{vmatrix}d&e\\\\g&h\\end{vmatrix}" +
    "&ensp; = &ensp; aei+bfg+cdh-ceg-bdi-afh$";



  workedSolution.innerHTML = "The original matrix $A = \\begin{bmatrix} " + a1_1.value + " & " + a1_2.value + " & " +
    a1_3.value + "\\\\ " + a2_1.value + " & " + a2_2.value + " & " + a2_3.value + " \\\\ " + a3_1.value + " & " +
    a3_2.value + " & " + a3_3.value + "\\end{bmatrix}$ &ensp;&ensp;&ensp;" +
    "<br><br>"

    +
    "$Det (A) = " + a1_1.value + "\\begin{vmatrix}" +
    +a2_2.value + "&" + a2_3.value + "\\\\" + a3_2.value + "&" + a3_3.value + "\\end{vmatrix} - &ensp;" + a1_2.value + "\\begin{vmatrix}" + a2_1.value + "&" +
    a2_3.value + "\\\\" + a3_1.value + "&" + a3_3.value + "\\end{vmatrix} + &ensp;" + a1_3.value + "\\begin{vmatrix}" + a2_1.value + "&" + a2_2.value + "\\\\" +
    a3_1.value + "&" + a3_2.value + "\\end{vmatrix}&ensp; = &ensp; " + a1_1.value + "(" + a2_2.value + " \\cdot" + a3_3.value + ") + &ensp;" + a1_2.value +
    "(" + a2_3.value + " \\cdot" + a3_1.value + ") + " + a1_3.value + "(" + a2_1.value + " \\cdot" + a3_2.value + ") - &ensp;" + a1_3.value + "(" +
    a2_2.value + " \\cdot" + a3_1.value + ") - &ensp;" + a1_2.value + "(" + a2_1.value + " \\cdot" + a3_3.value +
    ") - &ensp;" + a1_1.value + "(" + a2_3.value + " \\cdot" + a3_2.value + ") &ensp;&ensp;=&ensp;" + determinantA3x3 + "$";


  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}

determinantB3x3.onclick = function() {
  clearFunc();
  hideSteps();

  var manB1_1 = b1_1.value;
  var manB1_2 = b1_2.value;
  var manB1_3 = b1_3.value;
  var manB2_1 = b2_1.value;
  var manB2_2 = b2_2.value;
  var manB2_3 = b2_3.value;
  var manB3_1 = b3_1.value;
  var manB3_2 = b3_2.value;
  var manB3_3 = b3_3.value;

  determinantB3x3 = (Number(manB1_1) * Number(manB2_2) * Number(manB3_3)) +
    (Number(manB1_2) * Number(manB2_3) * Number(manB3_1)) +
    (Number(manB1_3) * Number(manB2_1) * Number(manB3_2)) -
    (Number(manB3_1) * Number(manB2_2) * Number(manB1_3)) -
    (Number(manB3_2) * Number(manB2_3) * Number(manB1_1)) -
    (Number(manB3_3) * Number(manB2_1) * Number(manB1_2));

  document.getElementById("determinantAns").innerHTML = "The determinant of Matrix B is " + determinantB3x3 + "." + " <br> Click below to see how it's done.";

  document.getElementById("determinantAns").style.display = "block";
  document.getElementById("stepsOneButton").style.display = "block";
  document.getElementById("stepsTwoButton").style.display = "block";
  document.getElementById("stepsThreeButton").style.display = "block";
  document.getElementById("stepsFourButton").style.display = "block";
  document.getElementById("stepsFiveButton").style.display = "block";
  document.getElementById("workedSolutionButton").style.display = "block";
  document.getElementById("solutionPartition").style.display = "block";

  stepsOne.innerHTML = "Multiply $a$ by the determinant of the 2 x 2 matrix that is not in the same row or column as $a$";
  stepsTwo.innerHTML = "Do the same for $-b$. Note the negative sign.";
  stepsThree.innerHTML = "Do the same for $c$";
  stepsFour.innerHTML = "Add them all together";
  stepsFive.innerHTML = "Summarised : $Det (B) = \\begin{bmatrix}a&b&c\\\\d&e&f\\\\g&h&i\\end{bmatrix} = \\begin{vmatrix}a&b&c\\\\d&e&f\\\\g&h&i" +
    "\\end{vmatrix} = a\\begin{vmatrix} d&f\\\\h&i\\end{vmatrix} -b\\begin{vmatrix}d&f\\\\g&i\\end{vmatrix}+c\\begin{vmatrix}d&e\\\\g&h\\end{vmatrix}" +
    "&ensp; = &ensp; aei+bfg+cdh-ceg-bdi-afh$";



  workedSolution.innerHTML = "The original matrix $B = \\begin{bmatrix} " + b1_1.value + " & " + b1_2.value + " & " +
    b1_3.value + "\\\\ " + b2_1.value + " & " + b2_2.value + " & " + b2_3.value + " \\\\ " + b3_1.value + " & " +
    b3_2.value + " & " + b3_3.value + "\\end{bmatrix}$ <br><br>"

    +
    "$Det (B) = " + b1_1.value + "\\begin{vmatrix}" +
    +b2_2.value + "&" + b2_3.value + "\\\\" + b3_2.value + "&" + b3_3.value + "\\end{vmatrix} - &ensp;" + b1_2.value + "\\begin{vmatrix}" + b2_1.value + "&" +
    b2_3.value + "\\\\" + b3_1.value + "&" + b3_3.value + "\\end{vmatrix}+ &ensp;" + b1_3.value + "\\begin{vmatrix}" + b2_1.value + "&" + b2_2.value + "\\\\" +
    b3_1.value + "&" + b3_2.value + "\\end{vmatrix}&ensp; = &ensp; " + b1_1.value + "(" + b2_2.value + " \\cdot" + b3_3.value + ") + " + b1_2.value +
    "(" + b2_3.value + " \\cdot" + b3_1.value + ") + &ensp;" + b1_3.value + "(" + b2_1.value + " \\cdot" + b3_2.value + ") - &ensp;" + b1_3.value + "(" +
    b2_2.value + " \\cdot" + b3_1.value + ") - &ensp;" + b1_2.value + "(" + b2_1.value + " \\cdot" + b3_3.value +
    ") -" + b1_1.value + "(" + b2_3.value + " \\cdot" + b3_2.value + ") &ensp;&ensp;=&ensp;" + determinantB3x3 + "$";


  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}

addition3x3.onclick = function() {
  clearFunc();
  hideSteps();

  var manA1_1 = a1_1.value;
  var manA1_2 = a1_2.value;
  var manA1_3 = a1_3.value;
  var manA2_1 = a2_1.value;
  var manA2_2 = a2_2.value;
  var manA2_3 = a2_3.value;
  var manA3_1 = a3_1.value;
  var manA3_2 = a3_2.value;
  var manA3_3 = a3_3.value;

  var manB1_1 = b1_1.value;
  var manB1_2 = b1_2.value;
  var manB1_3 = b1_3.value;
  var manB2_1 = b2_1.value;
  var manB2_2 = b2_2.value;
  var manB2_3 = b2_3.value;
  var manB3_1 = b3_1.value;
  var manB3_2 = b3_2.value;
  var manB3_3 = b3_3.value;

  ans1_1.value = Number(manA1_1) + Number(manB1_1);
  ans1_2.value = Number(manA1_2) + Number(manB1_2);
  ans1_3.value = Number(manA1_3) + Number(manB1_3);
  ans2_1.value = Number(manA2_1) + Number(manB2_1);
  ans2_2.value = Number(manA2_2) + Number(manB2_2);
  ans2_3.value = Number(manA2_3) + Number(manB2_3);
  ans3_1.value = Number(manA3_1) + Number(manB3_1);
  ans3_2.value = Number(manA3_2) + Number(manB3_2);
  ans3_3.value = Number(manA3_3) + Number(manB3_3);

  document.getElementById("ansMathJaxMatrix").innerHTML = "$\\begin{bmatrix}  " + ans1_1.value +
    " & " + ans1_2.value + " & " + ans1_3.value + "\\\\ " + ans2_1.value + " & " + ans2_2.value + " & " + ans2_3.value + "\\\\ " +
    ans3_1.value + " & " + ans3_2.value + " & " + ans3_3.value + "\\end{bmatrix}$";

  document.getElementById("ansMathJaxMatrix").style.display = "block";
  document.getElementById("stepsOneButton").style.display = "block";
  document.getElementById("stepsTwoButton").style.display = "block";
  document.getElementById("workedSolutionButton").style.display = "block";
  document.getElementById("solutionPartition").style.display = "block";

  stepsOne.innerHTML = "Ensure the matrices are the same size.";
  stepsTwo.innerHTML = "Add the corresponding elements of each matrix" +
    "<br><br> $\\begin{bmatrix} a{_1}{_,}{_1} + b{_1}{_,}{_1} & a{_1}{_,}{_2} + b{_1}{_,}{_2} & a{_1}{_,}{_3}  + b{_1}{_,}{_3}\\\\ a{_2}{_,}{_1}  + b{_2}{_,}{_1} & a{_2}{_,}{_2}" +
    " + b{_2}{_,}{_2} & a{_2}{_,}{_3} + b{_2}{_,}{_3} \\\\ a{_3}{_,}{_1}  + b{_3}{_,}{_1} & a{_3}{_,}{_2}" +
    " + b{_3}{_,}{_2} & a{_3}{_,}{_3}  + b{_3}{_,}{_3}\\end{bmatrix}$";
  workedSolution.innerHTML = "The original matrix $A = \\begin{bmatrix} " + a1_1.value + " & " + a1_2.value + " & " +
    a1_3.value + "\\\\ " + a2_1.value + " & " + a2_2.value + " & " + a2_3.value + " \\\\ " + a3_1.value + " & " +
    a3_2.value + " & " + a3_3.value + "\\end{bmatrix}$ &ensp;&ensp;&ensp;" +
    "The original matrix $B = \\begin{bmatrix} " + b1_1.value + " & " + b1_2.value + " & " +
    b1_3.value + "\\\\ " + b2_1.value + " & " + b2_2.value + " & " + b2_3.value + " \\\\ " + b3_1.value + " & " +
    b3_2.value + " & " + b3_3.value + "\\end{bmatrix}$ <br><br>"

    +
    "$\\begin{bmatrix} " + a1_1.value + " &nbsp;+ &nbsp;" + b1_1.value + "&" +
    a1_2.value + " &nbsp;+ &nbsp;" + b1_2.value + "&" + a1_3.value + " &nbsp;+ &nbsp;" + b1_3.value + "\\\\" + a2_1.value + " &nbsp;+ &nbsp;" +
    b2_1.value + "&" + a2_2.value + " &nbsp;+ &nbsp;" + b2_2.value + "&" + a2_3.value + " &nbsp;+ &nbsp;" + b2_3.value + "\\\\" + a3_1.value +
    " &nbsp;+ &nbsp;" + b3_1.value + "&" + a3_2.value + " &nbsp;+ &nbsp;" + b3_2.value + "&" + a3_3.value + " &nbsp;+ &nbsp;" + b3_3.value +
    "\\end{bmatrix} &emsp;&emsp; = &emsp;&emsp;\\begin{bmatrix}  " + ans1_1.value + " & " + ans1_2.value + " & " + ans1_3.value + "\\\\ " +
    ans2_1.value + " & " + ans2_2.value + " & " + ans2_3.value + "\\\\ " + ans3_1.value + " & " + ans3_2.value + " & " + ans3_3.value +
    "\\end{bmatrix}$";

  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}

subtraction3x3AminusB.onclick = function() {
  clearFunc();
  hideSteps();

  var manA1_1 = a1_1.value;
  var manA1_2 = a1_2.value;
  var manA1_3 = a1_3.value;
  var manA2_1 = a2_1.value;
  var manA2_2 = a2_2.value;
  var manA2_3 = a2_3.value;
  var manA3_1 = a3_1.value;
  var manA3_2 = a3_2.value;
  var manA3_3 = a3_3.value;

  var manB1_1 = b1_1.value;
  var manB1_2 = b1_2.value;
  var manB1_3 = b1_3.value;
  var manB2_1 = b2_1.value;
  var manB2_2 = b2_2.value;
  var manB2_3 = b2_3.value;
  var manB3_1 = b3_1.value;
  var manB3_2 = b3_2.value;
  var manB3_3 = b3_3.value;

  ans1_1.value = Number(manA1_1) - Number(manB1_1);
  ans1_2.value = Number(manA1_2) - Number(manB1_2);
  ans1_3.value = Number(manA1_3) - Number(manB1_3);
  ans2_1.value = Number(manA2_1) - Number(manB2_1);
  ans2_2.value = Number(manA2_2) - Number(manB2_2);
  ans2_3.value = Number(manA2_3) - Number(manB2_3);
  ans3_1.value = Number(manA3_1) - Number(manB3_1);
  ans3_2.value = Number(manA3_2) - Number(manB3_2);
  ans3_3.value = Number(manA3_3) - Number(manB3_3);

  document.getElementById("ansMathJaxMatrix").innerHTML = "$\\begin{bmatrix}  " + ans1_1.value +
    " & " + ans1_2.value + " & " + ans1_3.value + "\\\\ " + ans2_1.value + " & " + ans2_2.value + " & " + ans2_3.value + "\\\\ " +
    ans3_1.value + " & " + ans3_2.value + " & " + ans3_3.value + "\\end{bmatrix}$";

  document.getElementById("ansMathJaxMatrix").style.display = "block";
  document.getElementById("stepsOneButton").style.display = "block";
  document.getElementById("stepsTwoButton").style.display = "block";
  document.getElementById("workedSolutionButton").style.display = "block";
  document.getElementById("solutionPartition").style.display = "block";

  stepsOne.innerHTML = "Ensure the matrices are the same size.";
  stepsTwo.innerHTML = "Add the corresponding elements of each matrix" +
    "<br><br> $\\begin{bmatrix} a{_1}{_,}{_1} - b{_1}{_,}{_1} & a{_1}{_,}{_2} - b{_1}{_,}{_2} & a{_1}{_,}{_3}  - b{_1}{_,}{_3}\\\\ a{_2}{_,}{_1}  - b{_2}{_,}{_1} & a{_2}{_,}{_2}" +
    " - b{_2}{_,}{_2} & a{_2}{_,}{_3} - b{_2}{_,}{_3} \\\\ a{_3}{_,}{_1}  - b{_3}{_,}{_1} & a{_3}{_,}{_2}" +
    " - b{_3}{_,}{_2} & a{_3}{_,}{_3}  - b{_3}{_,}{_3}\\end{bmatrix}$";
  workedSolution.innerHTML = "The original matrix $A = \\begin{bmatrix} " + a1_1.value + " & " + a1_2.value + " & " +
    a1_3.value + "\\\\ " + a2_1.value + " & " + a2_2.value + " & " + a2_3.value + " \\\\ " + a3_1.value + " & " +
    a3_2.value + " & " + a3_3.value + "\\end{bmatrix}$ &ensp;&ensp;&ensp;" +
    "The original matrix $B = \\begin{bmatrix} " + b1_1.value + " & " + b1_2.value + " & " +
    b1_3.value + "\\\\ " + b2_1.value + " & " + b2_2.value + " & " + b2_3.value + " \\\\ " + b3_1.value + " & " +
    b3_2.value + " & " + b3_3.value + "\\end{bmatrix}$ <br><br>"

    +
    "$\\begin{bmatrix} " + a1_1.value + " &nbsp;- &nbsp;" + b1_1.value + "&" +
    a1_2.value + " &nbsp;- &nbsp;" + b1_2.value + "&" + a1_3.value + " &nbsp;- &nbsp;" + b1_3.value + "\\\\" + a2_1.value + " &nbsp;- &nbsp;" +
    b2_1.value + "&" + a2_2.value + " &nbsp;- &nbsp;" + b2_2.value + "&" + a2_3.value + " &nbsp;- &nbsp;" + b2_3.value + "\\\\" + a3_1.value +
    " &nbsp;- &nbsp;" + b3_1.value + "&" + a3_2.value + " &nbsp;- &nbsp;" + b3_2.value + "&" + a3_3.value + " &nbsp;- &nbsp;" + b3_3.value +
    "\\end{bmatrix} &emsp;&emsp; A-B &emsp;&emsp;= &emsp;&emsp;\\begin{bmatrix}  " + ans1_1.value + " & " + ans1_2.value + " & " + ans1_3.value + "\\\\ " +
    ans2_1.value + " & " + ans2_2.value + " & " + ans2_3.value + "\\\\ " + ans3_1.value + " & " + ans3_2.value + " & " + ans3_3.value +
    "\\end{bmatrix}$";

  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}

subtraction3x3BminusA.onclick = function() {
  clearFunc();
  hideSteps();

  var manA1_1 = a1_1.value;
  var manA1_2 = a1_2.value;
  var manA1_3 = a1_3.value;
  var manA2_1 = a2_1.value;
  var manA2_2 = a2_2.value;
  var manA2_3 = a2_3.value;
  var manA3_1 = a3_1.value;
  var manA3_2 = a3_2.value;
  var manA3_3 = a3_3.value;

  var manB1_1 = b1_1.value;
  var manB1_2 = b1_2.value;
  var manB1_3 = b1_3.value;
  var manB2_1 = b2_1.value;
  var manB2_2 = b2_2.value;
  var manB2_3 = b2_3.value;
  var manB3_1 = b3_1.value;
  var manB3_2 = b3_2.value;
  var manB3_3 = b3_3.value;

  ans1_1.value = Number(manB1_1) - Number(manA1_1);
  ans1_2.value = Number(manB1_2) - Number(manA1_2);
  ans1_3.value = Number(manB1_3) - Number(manA1_3);
  ans2_1.value = Number(manB2_1) - Number(manA2_1);
  ans2_2.value = Number(manB2_2) - Number(manA2_2);
  ans2_3.value = Number(manB2_3) - Number(manA2_3);
  ans3_1.value = Number(manB3_1) - Number(manA3_1);
  ans3_2.value = Number(manB3_2) - Number(manA3_2);
  ans3_3.value = Number(manB3_3) - Number(manA3_3);

  document.getElementById("ansMathJaxMatrix").innerHTML = "$\\begin{bmatrix}  " + ans1_1.value +
    " & " + ans1_2.value + " & " + ans1_3.value + "\\\\ " + ans2_1.value + " & " + ans2_2.value + " & " + ans2_3.value + "\\\\ " +
    ans3_1.value + " & " + ans3_2.value + " & " + ans3_3.value + "\\end{bmatrix}$";

  document.getElementById("ansMathJaxMatrix").style.display = "block";
  document.getElementById("stepsOneButton").style.display = "block";
  document.getElementById("stepsTwoButton").style.display = "block";
  document.getElementById("workedSolutionButton").style.display = "block";
  document.getElementById("solutionPartition").style.display = "block";

  stepsOne.innerHTML = "Ensure the matrices are the same size.";
  stepsTwo.innerHTML = "Add the corresponding elements of each matrix" +
    "<br><br> $\\begin{bmatrix} b{_1}{_,}{_1} - a{_1}{_,}{_1} & b{_1}{_,}{_2} - a{_1}{_,}{_2} & b{_1}{_,}{_3}  - a{_1}{_,}{_3}\\\\ b{_2}{_,}{_1}  - a{_2}{_,}{_1} & b{_2}{_,}{_2}" +
    " - a{_2}{_,}{_2} & b{_2}{_,}{_3} - a{_2}{_,}{_3} \\\\ b{_3}{_,}{_1}  - a{_3}{_,}{_1} & b{_3}{_,}{_2}" +
    " - a{_3}{_,}{_2} & b{_3}{_,}{_3}  - a{_3}{_,}{_3}\\end{bmatrix}$";
  workedSolution.innerHTML = "The original matrix $A = \\begin{bmatrix} " + a1_1.value + " & " + a1_2.value + " & " +
    a1_3.value + "\\\\ " + a2_1.value + " & " + a2_2.value + " & " + a2_3.value + " \\\\ " + a3_1.value + " & " +
    a3_2.value + " & " + a3_3.value + "\\end{bmatrix}$ &ensp;&ensp;&ensp;" +
    "The original matrix $B = \\begin{bmatrix} " + b1_1.value + " & " + b1_2.value + " & " +
    b1_3.value + "\\\\ " + b2_1.value + " & " + b2_2.value + " & " + b2_3.value + " \\\\ " + b3_1.value + " & " +
    b3_2.value + " & " + b3_3.value + "\\end{bmatrix}$ <br><br>"

    +
    "$\\begin{bmatrix} " + b1_1.value + " &nbsp;- &nbsp;" + a1_1.value + "&" +
    b1_2.value + " &nbsp;- &nbsp;" + a1_2.value + "&" + b1_3.value + " &nbsp;- &nbsp;" + a1_3.value + "\\\\" + b2_1.value + " &nbsp;- &nbsp;" +
    a2_1.value + "&" + b2_2.value + " &nbsp;- &nbsp;" + a2_2.value + "&" + b2_3.value + " &nbsp;- &nbsp;" + a2_3.value + "\\\\" + b3_1.value +
    " &nbsp;- &nbsp;" + a3_1.value + "&" + b3_2.value + " &nbsp;- &nbsp;" + a3_2.value + "&" + b3_3.value + " &nbsp;- &nbsp;" + a3_3.value +
    "\\end{bmatrix} &emsp;&emsp; B-A &emsp;&emsp;= &emsp;&emsp;\\begin{bmatrix}  " + ans1_1.value + " & " + ans1_2.value + " & " + ans1_3.value + "\\\\ " +
    ans2_1.value + " & " + ans2_2.value + " & " + ans2_3.value + "\\\\ " + ans3_1.value + " & " + ans3_2.value + " & " + ans3_3.value +
    "\\end{bmatrix}$";

  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}

multiplyAB3x3.onclick = function() {
  clearFunc();
  hideSteps();

  var manA1_1 = a1_1.value;
  var manA1_2 = a1_2.value;
  var manA1_3 = a1_3.value;
  var manA2_1 = a2_1.value;
  var manA2_2 = a2_2.value;
  var manA2_3 = a2_3.value;
  var manA3_1 = a3_1.value;
  var manA3_2 = a3_2.value;
  var manA3_3 = a3_3.value;

  var manB1_1 = b1_1.value;
  var manB1_2 = b1_2.value;
  var manB1_3 = b1_3.value;
  var manB2_1 = b2_1.value;
  var manB2_2 = b2_2.value;
  var manB2_3 = b2_3.value;
  var manB3_1 = b3_1.value;
  var manB3_2 = b3_2.value;
  var manB3_3 = b3_3.value

  ans1_1.value = ((Number(manA1_1) * Number(manB1_1)) + ((Number(manA1_2) * Number(manB2_1))) + ((Number(manA1_3) * Number(manB3_1))));
  ans1_2.value = ((Number(manA1_1) * Number(manB1_2)) + ((Number(manA1_2) * Number(manB2_2))) + ((Number(manA1_3) * Number(manB3_2))));
  ans1_3.value = ((Number(manA1_1) * Number(manB1_3)) + ((Number(manA1_2) * Number(manB2_3))) + ((Number(manA1_3) * Number(manB3_3))));
  ans2_1.value = ((Number(manA2_1) * Number(manB1_1)) + ((Number(manA2_2) * Number(manB2_1))) + ((Number(manA2_3) * Number(manB3_1))));
  ans2_2.value = ((Number(manA2_1) * Number(manB1_2)) + ((Number(manA2_2) * Number(manB2_2))) + ((Number(manA2_3) * Number(manB3_2))));
  ans2_3.value = ((Number(manA2_1) * Number(manB1_3)) + ((Number(manA2_2) * Number(manB2_3))) + ((Number(manA2_3) * Number(manB3_3))));
  ans3_1.value = ((Number(manA3_1) * Number(manB1_1)) + ((Number(manA3_2) * Number(manB2_1))) + ((Number(manA3_3) * Number(manB3_1))));
  ans3_2.value = ((Number(manA3_1) * Number(manB1_2)) + ((Number(manA3_2) * Number(manB2_2))) + ((Number(manA3_3) * Number(manB3_2))));
  ans3_3.value = ((Number(manA3_1) * Number(manB1_3)) + ((Number(manA3_2) * Number(manB2_3))) + ((Number(manA3_3) * Number(manB3_3))));

  document.getElementById("ansMathJaxMatrix").innerHTML = "$\\begin{bmatrix}  " + ans1_1.value +
    " & " + ans1_2.value + " & " + ans1_3.value + "\\\\ " + ans2_1.value + " & " + ans2_2.value + " & " + ans2_3.value + "\\\\ " +
    ans3_1.value + " & " + ans3_2.value + " & " + ans3_3.value + "\\end{bmatrix}$";

  document.getElementById("ansMathJaxMatrix").style.display = "block";
  document.getElementById("stepsOneButton").style.display = "block";
  document.getElementById("stepsTwoButton").style.display = "block";
  document.getElementById("stepsThreeButton").style.display = "block";
  document.getElementById("stepsFourButton").style.display = "block";
  document.getElementById("stepsFiveButton").style.display = "block";
  document.getElementById("workedSolutionButton").style.display = "block";
  document.getElementById("solutionPartition").style.display = "block";

  stepsOne.innerHTML = "Ensure the number of columns of matrix A is equal to the number of rows of matrix B.";
  stepsTwo.innerHTML = "Calculate the dot product of the first row of the first matrix by the corresponding member of the first column of the second matrix " +
    "i.e. $a{_1}{_,}{_1} \\cdot b{_1}{_,}{_1} + a{_1}{_,}{_2} \\cdot b{_2}{_,}{_1} + a{_1}{_,}{_3}\\cdot b{_3}{_,}{_1} $ <br>" +
    "This will give you the element of the first row and first column of your new matrix; element $ab{_1}{_,}{_1}$.";
  stepsThree.innerHTML = "Do this for the first row with the second column, this will give you the element for the first row," +
    " second column; $ab{_1}{_,}{_2}$.<br>Continue doing this until all of the columns are complete.";
  stepsFour.innerHTML = "Move to the Second Row and replicate the actions.";
  stepsFive.innerHTML = "Summarised : $AB = &ensp;&ensp;&ensp;\\begin{bmatrix} a{_1}{_,}{_1} \\cdot b{_1}{_,}{_1} +  a{_1}{_,}{_2} \\cdot b{_2}{_,}{_1} +  a{_1}{_,}{_3} " +
    "\\cdot b{_3}{_,}{_1} & a{_1}{_,}{_1} \\cdot b{_1}{_,}{_2} +  a{_1}{_,}{_2} \\cdot b{_2}{_,}{_2} +  a{_1}{_,}{_3} \\cdot b{_3}{_,}{_2}  & a{_1}{_,}{_1} \\cdot b{_1}{_,}{_3}" +
    " +  a{_1}{_,}{_2} \\cdot b{_2}{_,}{_3} +  a{_1}{_,}{_3} \\cdot b{_3}{_,}{_3} \\\\" + //first line
    "a{_2}{_,}{_1} \\cdot b{_1}{_,}{_1} +  a{_2}{_,}{_2} \\cdot b{_2}{_,}{_1} +  a{_2}{_,}{_3}\\cdot b{_3}{_,}{_1} & a{_2}{_,}{_1} \\cdot b{_1}{_,}{_2} +  " +
    "a{_2}{_,}{_2} \\cdot b{_2}{_,}{_2} +  a{_2}{_,}{_3} \\cdot b{_3}{_,}{_2}  & a{_2}{_,}{_1} \\cdot b{_1}{_,}{_3} +  a{_2}{_,}{_2} \\cdot b{_2}{_,}{_3} +  " +
    "a{_2}{_,}{_3} \\cdot b{_3}{_,}{_3} \\\\" + //second line
    "a{_3}{_,}{_1} \\cdot b{_1}{_,}{_1} +  a{_3}{_,}{_2} \\cdot b{_2}{_,}{_1} +  a{_3}{_,}{_3} \\cdot b{_3}{_,}{_1} & a{_3}{_,}{_1} \\cdot b{_1}{_,}{_2} +  " +
    "a{_3}{_,}{_2} \\cdot b{_2}{_,}{_2} +  a{_3}{_,}{_3} \\cdot b{_3}{_,}{_2}  & a{_3}{_,}{_1} \\cdot b{_1}{_,}{_3} +  a{_3}{_,}{_2} \\cdot b{_2}{_,}{_3} +  " +
    "a{_3}{_,}{_3} \\cdot b{_3}{_,}{_3} \\end{bmatrix}$"; //third line

  workedSolution.innerHTML = "The original matrix $A = \\begin{bmatrix} " + a1_1.value + " & " + a1_2.value + " & " +
    a1_3.value + "\\\\ " + a2_1.value + " & " + a2_2.value + " & " + a2_3.value + " \\\\ " + a3_1.value + " & " +
    a3_2.value + " & " + a3_3.value + "\\end{bmatrix}$ &ensp;&ensp;&ensp;" +
    "The original matrix $B = \\begin{bmatrix} " + b1_1.value + " & " + b1_2.value + " & " +
    b1_3.value + "\\\\ " + b2_1.value + " & " + b2_2.value + " & " + b2_3.value + " \\\\ " + b3_1.value + " & " +
    b3_2.value + " & " + b3_3.value + "\\end{bmatrix}$ <br><br>"

    +
    "<br><br> $AB = &ensp;&ensp;&ensp; \\begin{bmatrix}" + a1_1.value + " \\cdot " + b1_1.value + " + " + a1_2.value + " \\cdot " + b2_1.value + " + " +
    a1_3.value + " \\cdot " + b3_1.value + "&ensp;&" + a1_1.value + " \\cdot " + b1_2.value + " + " + a1_2.value + " \\cdot " + b2_2.value + " + " + a1_3.value + " \\cdot " + b3_2.value + " &ensp;& " +
    a1_1.value + " \\cdot " + b1_3.value + " + " + a1_2.value + " \\cdot " + b2_3.value + " + " + a1_3.value + " \\cdot " + b3_3.value + "\\\\" + //first line
    a2_1.value + " \\cdot " + b1_1.value + " + " + a2_2.value + " \\cdot " + b2_1.value + " + " + a2_3.value + " \\cdot " + b3_1.value + "&ensp;&" + a2_1.value + " \\cdot " + b1_2.value +
    " + " + a2_2.value + " \\cdot " + b2_2.value + " + " + a2_3.value + " \\cdot " + b3_2.value + "&ensp;&" + a2_1.value + " \\cdot " + b1_3.value + " + " + a2_2.value + " \\cdot " +
    b2_3.value + " + " + a2_3.value + " \\cdot " + b3_3.value + "\\\\" + //second line
    a3_1.value + " \\cdot " + b1_1.value + " + " + a3_2.value + " \\cdot " + b2_1.value + " + " + a3_3.value + " \\cdot " + b3_1.value + "&ensp;&" + a3_1.value + " \\cdot " + b1_2.value +
    " + " + a3_2.value + " \\cdot " + b2_2.value + " + " + a3_3.value + " \\cdot " + b3_2.value + "&ensp;&" + a3_1.value + " \\cdot " + b1_3.value + " + " + a3_2.value + " \\cdot " +
    b2_3.value + " + " + a3_3.value + " \\cdot " + b3_3.value + "\\end{bmatrix}  &ensp;&ensp;= &ensp;&ensp;\\begin{bmatrix}  " + ans1_1.value + " & " + ans1_2.value + " & " +
    ans1_3.value + "\\\\ " + ans2_1.value + " & " + ans2_2.value + " & " + ans2_3.value + "\\\\ " + ans3_1.value + " & " + ans3_2.value + " & " + ans3_3.value + "\\end{bmatrix}$";

  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}

multiplyBA3x3.onclick = function() {
  clearFunc();
  hideSteps();

  var manA1_1 = a1_1.value;
  var manA1_2 = a1_2.value;
  var manA1_3 = a1_3.value;
  var manA2_1 = a2_1.value;
  var manA2_2 = a2_2.value;
  var manA2_3 = a2_3.value;
  var manA3_1 = a3_1.value;
  var manA3_2 = a3_2.value;
  var manA3_3 = a3_3.value;

  var manB1_1 = b1_1.value;
  var manB1_2 = b1_2.value;
  var manB1_3 = b1_3.value;
  var manB2_1 = b2_1.value;
  var manB2_2 = b2_2.value;
  var manB2_3 = b2_3.value;
  var manB3_1 = b3_1.value;
  var manB3_2 = b3_2.value;
  var manB3_3 = b3_3.value

  ans1_1.value = ((Number(manB1_1) * Number(manA1_1)) + ((Number(manB1_2) * Number(manA2_1))) + ((Number(manB1_3) * Number(manA3_1))));
  ans1_2.value = ((Number(manB1_1) * Number(manA1_2)) + ((Number(manB1_2) * Number(manA2_2))) + ((Number(manB1_3) * Number(manA3_2))));
  ans1_3.value = ((Number(manB1_1) * Number(manA1_3)) + ((Number(manB1_2) * Number(manA2_3))) + ((Number(manB1_3) * Number(manA3_3))));
  ans2_1.value = ((Number(manB2_1) * Number(manA1_1)) + ((Number(manB2_2) * Number(manA2_1))) + ((Number(manB2_3) * Number(manA3_1))));
  ans2_2.value = ((Number(manB2_1) * Number(manA1_2)) + ((Number(manB2_2) * Number(manA2_2))) + ((Number(manB2_3) * Number(manA3_2))));
  ans2_3.value = ((Number(manB2_1) * Number(manA1_3)) + ((Number(manB2_2) * Number(manA2_3))) + ((Number(manB2_3) * Number(manA3_3))));
  ans3_1.value = ((Number(manB3_1) * Number(manA1_1)) + ((Number(manB3_2) * Number(manA2_1))) + ((Number(manB3_3) * Number(manA3_1))));
  ans3_2.value = ((Number(manB3_1) * Number(manA1_2)) + ((Number(manB3_2) * Number(manA2_2))) + ((Number(manB3_3) * Number(manA3_2))));
  ans3_3.value = ((Number(manB3_1) * Number(manA1_3)) + ((Number(manB3_2) * Number(manA2_3))) + ((Number(manB3_3) * Number(manA3_3))));

  document.getElementById("ansMathJaxMatrix").innerHTML = "$\\begin{bmatrix}  " + ans1_1.value +
    " & " + ans1_2.value + " & " + ans1_3.value + "\\\\ " + ans2_1.value + " & " + ans2_2.value + " & " + ans2_3.value + "\\\\ " +
    ans3_1.value + " & " + ans3_2.value + " & " + ans3_3.value + "\\end{bmatrix}$";

  document.getElementById("ansMathJaxMatrix").style.display = "block";
  document.getElementById("stepsOneButton").style.display = "block";
  document.getElementById("stepsTwoButton").style.display = "block";
  document.getElementById("stepsThreeButton").style.display = "block";
  document.getElementById("stepsFourButton").style.display = "block";
  document.getElementById("stepsFiveButton").style.display = "block";
  document.getElementById("workedSolutionButton").style.display = "block";
  document.getElementById("solutionPartition").style.display = "block";

  stepsOne.innerHTML = "Ensure the number of columns of matrix B is equal to the number of rows of matrix A.";
  stepsTwo.innerHTML = "Calculate the dot product of the first row of the first matrix by the corresponding member of the first column of the second matrix " +
    "i.e. $b{_1}{_,}{_1} \\cdot a{_1}{_,}{_1} + b{_1}{_,}{_2} \\cdot a{_2}{_,}{_1} + b{_1}{_,}{_3}\\cdot a{_3}{_,}{_1} $ <br>" +
    "This will give you the element of the first row and first column of your new matrix; element $ba{_1}{_,}{_1}$.";
  stepsThree.innerHTML = "Do this for the first row with the second column, this will give you the element for the first row, second column; $ba{_1}{_,}{_2}$." +
    "<br>Continue doing this until all of the columns are complete.";
  stepsFour.innerHTML = "Move to the Second Row and replicate the actions.";
  stepsFive.innerHTML = "Summarised : $BA = &ensp;&ensp;&ensp;\\begin{bmatrix} b{_1}{_,}{_1} \\cdot a{_1}{_,}{_1} +  b{_1}{_,}{_2} \\cdot a{_2}{_,}{_1} +  b{_1}{_,}{_3} " +
    "\\cdot a{_3}{_,}{_1} & b{_1}{_,}{_1} \\cdot a{_1}{_,}{_2} +  b{_1}{_,}{_2} \\cdot a{_2}{_,}{_2} +  b{_1}{_,}{_3} \\cdot a{_3}{_,}{_2}  & b{_1}{_,}{_1} \\cdot a{_1}{_,}{_3}" +
    " +  b{_1}{_,}{_2} \\cdot a{_2}{_,}{_3} +  b{_1}{_,}{_3} \\cdot a{_3}{_,}{_3} \\\\" + //first line
    "b{_2}{_,}{_1} \\cdot a{_1}{_,}{_1} +  b{_2}{_,}{_2} \\cdot a{_2}{_,}{_1} +  b{_2}{_,}{_3}\\cdot a{_3}{_,}{_1} & b{_2}{_,}{_1} \\cdot a{_1}{_,}{_2} +  " +
    "b{_2}{_,}{_2} \\cdot a{_2}{_,}{_2} +  b{_2}{_,}{_3} \\cdot a{_3}{_,}{_2}  & b{_2}{_,}{_1} \\cdot a{_1}{_,}{_3} +  b{_2}{_,}{_2} \\cdot a{_2}{_,}{_3} +  " +
    "b{_2}{_,}{_3} \\cdot a{_3}{_,}{_3} \\\\" + //second line
    "b{_3}{_,}{_1} \\cdot a{_1}{_,}{_1} +  b{_3}{_,}{_2} \\cdot a{_2}{_,}{_1} +  b{_3}{_,}{_3} \\cdot a{_3}{_,}{_1} & b{_3}{_,}{_1} \\cdot a{_1}{_,}{_2} +  " +
    "b{_3}{_,}{_2} \\cdot a{_2}{_,}{_2} +  b{_3}{_,}{_3} \\cdot a{_3}{_,}{_2}  & b{_3}{_,}{_1} \\cdot a{_1}{_,}{_3} +  b{_3}{_,}{_2} \\cdot a{_2}{_,}{_3} +  " +
    "b{_3}{_,}{_3} \\cdot a{_3}{_,}{_3} \\end{bmatrix}$"; //third line

  workedSolution.innerHTML = "The original matrix $A = \\begin{bmatrix} " + a1_1.value + " & " + a1_2.value + " & " +
    a1_3.value + "\\\\ " + a2_1.value + " & " + a2_2.value + " & " + a2_3.value + " \\\\ " + a3_1.value + " & " +
    a3_2.value + " & " + a3_3.value + "\\end{bmatrix}$ &ensp;&ensp;&ensp;" +
    "The original matrix $B = \\begin{bmatrix} " + b1_1.value + " & " + b1_2.value + " & " +
    b1_3.value + "\\\\ " + b2_1.value + " & " + b2_2.value + " & " + b2_3.value + " \\\\ " + b3_1.value + " & " +
    b3_2.value + " & " + b3_3.value + "\\end{bmatrix}$ <br><br>"

    +
    "<br><br> $BA = &ensp;&ensp;&ensp; \\begin{bmatrix}" + b1_1.value + " \\cdot " + a1_1.value + " + " + b1_2.value + " \\cdot " + a2_1.value + " + " +
    b1_3.value + " \\cdot " + a3_1.value + "&ensp;&" + b1_1.value + " \\cdot " + a1_2.value + " + " + b1_2.value + " \\cdot " + a2_2.value + " + " + b1_3.value + " \\cdot " + a3_2.value + " &ensp;& " +
    b1_1.value + " \\cdot " + a1_3.value + " + " + b1_2.value + " \\cdot " + a2_3.value + " + " + b1_3.value + " \\cdot " + a3_3.value + "\\\\" + //first line
    b2_1.value + " \\cdot " + a1_1.value + " + " + b2_2.value + " \\cdot " + a2_1.value + " + " + b2_3.value + " \\cdot " + a3_1.value + "&ensp;&" + b2_1.value + " \\cdot " + a1_2.value +
    " + " + b2_2.value + " \\cdot " + a2_2.value + " + " + b2_3.value + " \\cdot " + a3_2.value + "&ensp;&" + b2_1.value + " \\cdot " + a1_3.value + " + " + b2_2.value + " \\cdot " +
    a2_3.value + " + " + b2_3.value + " \\cdot " + a3_3.value + "\\\\" + //second line
    b3_1.value + " \\cdot " + a1_1.value + " + " + b3_2.value + " \\cdot " + a2_1.value + " + " + b3_3.value + " \\cdot " + a3_1.value + "&ensp;&" + b3_1.value + " \\cdot " + a1_2.value +
    " + " + b3_2.value + " \\cdot " + a2_2.value + " + " + b3_3.value + " \\cdot " + a3_2.value + "&ensp;&" + b3_1.value + " \\cdot " + a1_3.value + " + " + b3_2.value + " \\cdot " +
    a2_3.value + " + " + b3_3.value + " \\cdot " + a3_3.value + "\\end{bmatrix}  &ensp;&ensp;= &ensp;&ensp;\\begin{bmatrix}  " + ans1_1.value + " & " + ans1_2.value + " & " +
    ans1_3.value + "\\\\ " + ans2_1.value + " & " + ans2_2.value + " & " + ans2_3.value + "\\\\ " + ans3_1.value + " & " + ans3_2.value + " & " + ans3_3.value + "\\end{bmatrix}$";

  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}

scalarA.onclick = function() {
  clearFunc();
  hideSteps();

  scalarA = scalarA3x3.value;
  var manA1_1 = a1_1.value;
  var manA1_2 = a1_2.value;
  var manA1_3 = a1_3.value;
  var manA2_1 = a2_1.value;
  var manA2_2 = a2_2.value;
  var manA2_3 = a2_3.value;
  var manA3_1 = a3_1.value;
  var manA3_2 = a3_2.value;
  var manA3_3 = a3_3.value;


  ans1_1.value = Number(manA1_1) * Number(scalarA);
  ans1_2.value = Number(manA1_2) * Number(scalarA);
  ans1_3.value = Number(manA1_3) * Number(scalarA);
  ans2_1.value = Number(manA2_1) * Number(scalarA);
  ans2_2.value = Number(manA2_2) * Number(scalarA);
  ans2_3.value = Number(manA2_3) * Number(scalarA);
  ans3_1.value = Number(manA3_1) * Number(scalarA);
  ans3_2.value = Number(manA3_2) * Number(scalarA);
  ans3_3.value = Number(manA3_3) * Number(scalarA);

  document.getElementById("ansMathJaxMatrix").innerHTML = "$\\begin{bmatrix} " + ans1_1.value + " & " + ans1_2.value + " & " +
    ans1_3.value + "\\\\ " + ans2_1.value + " & " + ans2_2.value + " & " + ans2_3.value + " \\\\ " + ans3_1.value + " & " +
    ans3_2.value + " & " + ans3_3.value + "\\end{bmatrix}$";

  document.getElementById("ansMathJaxMatrix").style.display = "block";
  document.getElementById("stepsOneButton").style.display = "block";
  document.getElementById("stepsTwoButton").style.display = "block";
  document.getElementById("workedSolutionButton").style.display = "block";

  stepsOne.innerHTML = "Let the Scalar = $\\lambda$";

  stepsTwo.innerHTML = "<br><br>Multiply the elements of the matrix by $\\lambda$" +
    "<br><br> $  \\begin{bmatrix} \\lambda\\cdot a & \\lambda\\cdot b & \\lambda\\cdot c\\\\ \\lambda\\cdot d & \\lambda\\cdot e & \\lambda\\cdot f" +
    "\\\\ \\lambda\\cdot g & \\lambda\\cdot h & \\lambda\\cdot i\\end{bmatrix}$";

  workedSolution.innerHTML = "The original matrix $A = \\begin{bmatrix} " + a1_1.value + " & " + a1_2.value + " & " +
    a1_3.value + "\\\\ " + a2_1.value + " & " + a2_2.value + " & " + a2_3.value + " \\\\ " + a3_1.value + " & " +
    a3_2.value + " & " + a3_3.value + "\\end{bmatrix}$ <br><br>" +
    "$\\begin{bmatrix} " + scalarA + "\\cdot" + a1_1.value +
    " & " + scalarA + "\\cdot " + a1_2.value + " & " + scalarA + "\\cdot " + a1_3.value +
    "\\\\ " + scalarA + "\\cdot" + a2_1.value + " & " + scalarA + "\\cdot " + a2_2.value + " & " + scalarA + "\\cdot " + a2_3.value +
    "\\\\ " + scalarA + "\\cdot" + a3_1.value + " & " + scalarA + "\\cdot " + a3_2.value + " & " + scalarA + "\\cdot " + a3_3.value +
    "\\end{bmatrix}  &emsp;&emsp; = &emsp;&emsp; \\begin{bmatrix} " + ans1_1.value + " & " + ans1_2.value + " & " +
    ans1_3.value + "\\\\ " + ans2_1.value + " & " + ans2_2.value + " & " + ans2_3.value + "\\\\ " + ans3_1.value + " & " +
    ans3_2.value + " & " + ans3_3.value + "\\end{bmatrix}$ ";

  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}

scalarB.onclick = function() {
  clearFunc();
  hideSteps();

  scalarB = scalarB3x3.value;
  var manB1_1 = b1_1.value;
  var manB1_2 = b1_2.value;
  var manB1_3 = b1_3.value;
  var manB2_1 = b2_1.value;
  var manB2_2 = b2_2.value;
  var manB2_3 = b2_3.value;
  var manB3_1 = b3_1.value;
  var manB3_2 = b3_2.value;
  var manB3_3 = b3_3.value;

  ans1_1.value = Number(manB1_1) * Number(scalarB);
  ans1_2.value = Number(manB1_2) * Number(scalarB);
  ans1_3.value = Number(manB1_3) * Number(scalarB);
  ans2_1.value = Number(manB2_1) * Number(scalarB);
  ans2_2.value = Number(manB2_2) * Number(scalarB);
  ans2_3.value = Number(manB2_3) * Number(scalarB);
  ans3_1.value = Number(manB3_1) * Number(scalarB);
  ans3_2.value = Number(manB3_2) * Number(scalarB);
  ans3_3.value = Number(manB3_3) * Number(scalarB);

  document.getElementById("ansMathJaxMatrix").innerHTML = "$\\begin{bmatrix} " + ans1_1.value + " & " + ans1_2.value + " & " +
    ans1_3.value + "\\\\ " + ans2_1.value + " & " + ans2_2.value + " & " + ans2_3.value + " \\\\ " + ans3_1.value + " & " +
    ans3_2.value + " & " + ans3_3.value + "\\end{bmatrix}$";

  document.getElementById("ansMathJaxMatrix").style.display = "block";
  document.getElementById("stepsOneButton").style.display = "block";
  document.getElementById("stepsTwoButton").style.display = "block";
  document.getElementById("workedSolutionButton").style.display = "block";

  stepsOne.innerHTML = "Let the Scalar = $\\lambda$";

  stepsTwo.innerHTML = "<br><br>Multiply the elements of the matrix by $\\lambda$" +
    "<br><br> $  \\begin{bmatrix} \\lambda\\cdot a & \\lambda\\cdot b & \\lambda\\cdot c\\\\ \\lambda\\cdot d & \\lambda\\cdot e & \\lambda\\cdot f" +
    "\\\\ \\lambda\\cdot g & \\lambda\\cdot h & \\lambda\\cdot i\\end{bmatrix}$";

  workedSolution.innerHTML = "The original matrix $B = \\begin{bmatrix} " + a1_1.value + " & " + b1_2.value + " & " +
    b1_3.value + "\\\\ " + b2_1.value + " & " + b2_2.value + " & " + b2_3.value + " \\\\ " + b3_1.value + " & " +
    b3_2.value + " & " + b3_3.value + "\\end{bmatrix}$ <br><br>" +
    "$\\begin{bmatrix} " + scalarB + "\\cdot" + b1_1.value +
    " & " + scalarB + "\\cdot " + b1_2.value + " & " + scalarB + "\\cdot " + b1_3.value +
    "\\\\ " + scalarB + "\\cdot" + b2_1.value + " & " + scalarB + "\\cdot " + b2_2.value + " & " + scalarB + "\\cdot " + b2_3.value +
    "\\\\ " + scalarB + "\\cdot" + b3_1.value + " & " + scalarB + "\\cdot " + b3_2.value + " & " + scalarB + "\\cdot " + b3_3.value +
    "\\end{bmatrix}  &emsp;&emsp; = &emsp;&emsp; \\begin{bmatrix} " + ans1_1.value + " & " + ans1_2.value + " & " +
    ans1_3.value + "\\\\ " + ans2_1.value + " & " + ans2_2.value + " & " + ans2_3.value + "\\\\ " + ans3_1.value + " & " +
    ans3_2.value + " & " + ans3_3.value + "\\end{bmatrix}$ ";

  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}
