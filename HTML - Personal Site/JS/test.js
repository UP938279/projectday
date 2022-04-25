clearFunc = function() {
  //Clear all inputs etc. Allows fresh start at the beginning of each function.
  document.getElementById("stepsOne").innerHTML = "";
  document.getElementById("stepsFour").innerHTML = "";
  document.getElementById("stepsThree").innerHTML = "";
  document.getElementById("stepsFour").innerHTML = "";
  document.getElementById("stepsFive").innerHTML = "";
  document.getElementById("determinantAns").innerHTML = "";
}

hideSteps = function() {
  //Hides all steps so not visible
  stepsOne.style.display = "none";
  stepsTwo.style.display = "none";
  stepsThree.style.display = "none";
  stepsFour.style.display = "none";
  stepsFive.style.display = "none";


  stepsOneButton.style.display = "none";
  stepsTwoButton.style.display = "none";
  stepsThreeButton.style.display = "none";
  stepsFourButton.style.display = "none";
  stepsFiveButton.style.display = "none";
  stepsSixButton.style.display = "none";
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

//Navbar hyperlink replacements
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


transposeA2x2.onclick = function() {
  //could make each constant but shouldn't need to, works ok as is - not broke don't fix
  // clearFunc();

  var manA1_1 = a1_1.value;
  var manA1_2 = a1_2.value;
  var manA2_1 = a2_1.value;
  var manA2_2 = a2_2.value;


  ans1_1.value = manA1_1;
  ans1_2.value = manA2_1;
  ans2_1.value = manA1_2;
  ans2_2.value = manA2_2;


  const element = document.getElementById("test");
  element.textContent = "\begin{bmatrix} 1 & 2\\ 3 & 4\end{bmatrix}";


  const elementTest = document.getElementById("test1");
  elementTest.innerHTML = "\\begin{bmatrix} " + ans1_1.value + " & " + ans1_2.value + "\\\\ " + ans2_1.value +
    " & " + ans2_2.value + "\\" + "end{bmatrix}";
  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);


  document.getElementById("stepsOneButton").style.display = "block";

}

inverseA.onclick = function() {


  var manA1_1 = a1_1.value;
  var manA1_2 = a1_2.value;
  var manA2_1 = a2_1.value;
  var manA2_2 = a2_2.value;

  determinantA2x2 = (Number(manA1_1) * Number(manA2_2)) - (Number(manA1_2) * Number(manA2_1));

  inverseA2x2multiplier = 1 / determinantA2x2;

  ans1_1.value = manA2_2 * inverseA2x2multiplier;
  ans1_2.value = -(manA2_1 * inverseA2x2multiplier);
  ans2_1.value = -(manA1_2 * inverseA2x2multiplier);
  ans2_2.value = manA1_1 * inverseA2x2multiplier;

  var y = 0;

  const element = document.getElementById("test");
  element.innerHTML = "y variable test works" + "     " + y.value;

  document.getElementById("test1").innerHTML = "y = 0";

  hideSteps();


}

randomA.onclick = function() {

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

  rndmNum1 = Math.round(((Math.random()) * 2 - 1) * 15.1); //creates random integer up to +/-15
  b1_1.value = rndmNum1;

  rndmNum2 = Math.round(((Math.random()) * 2 - 1) * 15.1); //creates random integer up to +/-15
  b1_2.value = rndmNum2;

  rndmNum3 = Math.round(((Math.random()) * 2 - 1) * 15.1); //creates random integer up to +/-15
  b2_1.value = rndmNum3;

  rndmNum4 = Math.round(((Math.random()) * 2 - 1) * 15.1); //creates random integer up to +/-15
  b2_2.value = rndmNum4;

}


inverseB.onclick = function() {
  var manB1_1 = b1_1.value;
  var manB1_2 = b1_2.value;
  var manB2_1 = b2_1.value;
  var manB2_2 = b2_2.value;

  determinantB2x2 = (Number(manB1_1) * Number(manB2_2)) - (Number(manB1_2) * Number(manB2_1));

  inverseB2x2multiplier = 1 / determinantB2x2;

  ans1_1.value = manB2_2 * inverseB2x2multiplier;
  ans1_2.value = -(manB2_1 * inverseB2x2multiplier);
  ans2_1.value = -(manB1_2 * inverseB2x2multiplier);
  ans2_2.value = manB1_1 * inverseB2x2multiplier;
}


transposeB2x2.onclick = function() {
  //could make each constant but shouldn't need to, works ok as is - not broke don't fix
  var manB1_1 = b1_1.value;
  var manB1_2 = b1_2.value;
  var manB2_1 = b2_1.value;
  var manB2_2 = b2_2.value;


  ans1_1.value = manB1_1;
  ans1_2.value = manB2_1;
  ans2_1.value = manB1_2;
  ans2_2.value = manB2_2;

}

determinantA2x2.onclick = function() {
  clearFunc();
  document.getElementById("answerTable").style.display = "none";
  var manA1_1 = a1_1.value;
  var manA1_2 = a1_2.value;
  var manA2_1 = a2_1.value;
  var manA2_2 = a2_2.value;

  determinantA2x2 = (Number(manA1_1) * Number(manA2_2)) - (Number(manA1_2) * Number(manA2_1));

  const elementTest = document.getElementById("test1");
  determinantAns.innerHTML = "The determinant of Matrix A is " + determinantA2x2 + "." + " <br> Click below to see how it's done.";



}
//jQuery
//$("determinantAns").text("The determinant of Matrix A is " + determinantA2x2);
//$("determinantAns").html("The determinant of Matrix A is " + determinantA2x2);



determinantB2x2.onclick = function() {
  var manB1_1 = b1_1.value;
  var manB1_2 = b1_2.value;
  var manB2_1 = b2_1.value;
  var manB2_2 = b2_2.value;

  determinantB2x2 = (Number(manB1_1) * Number(manB2_2)) - (Number(manB1_2) * Number(manB2_1));
  determinantAns.innerHTML = "The determinant of Matrix B is " + determinantB2x2 + "." + " <br> Click below to see how it's done.";


}

addition2x2.onclick = function() {
  clearFunc();
  hideSteps();

  document.getElementById("answerTable").style.display = "block";

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

  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);

  document.getElementById("stepsOneButton").style.display = "block";
  document.getElementById("stepsTwoButton").style.display = "block";
  document.getElementById("stepsThreeButton").style.display = "block";

  stepsOne.innerHTML = "Ensure the matrices are the same size.";
  stepsTwo.innerHTML = "Add the corresponding elements of each matrix" +
    "<br> $\\begin{bmatrix} a1_1.value + b1_1.value + a1_2.value  + b1_2.value \\\ a2_1.value  + b2_1.value & a2_2.value  + b2_2.value\\end{bmatrix}$";

  stepsThree.innerHTML = "\begin{bmatrix} a +  b\\ c & d\end{bmatrix}"


  MathJax.typeset()
}

subtraction2x2AminusB.onclick = function() {
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
}


subtraction2x2BminusA.onclick = function() {
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

}

multiplyAB2x2.onclick = function() {
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
}

multiplyBA2x2.onclick = function() {
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
}


scalarA.onclick = function() {
  clearFunc();
  scalarA = scalarA2x2.value;
  manA1_1 = a1_1.value;
  manA1_2 = a1_2.value;
  manA2_1 = a2_1.value;
  manA2_2 = a2_2.value;

  ans1_1.value = Number(manA1_1) * Number(scalarA);
  ans1_2.value = Number(manA1_2) * Number(scalarA);
  ans2_1.value = Number(manA2_1) * Number(scalarA);
  ans2_2.value = Number(manA2_2) * Number(scalarA);
}


scalarB.onclick = function() {
  scalarB = scalarB2x2.value;
  manB1_1 = b1_1.value;
  manB1_2 = b1_2.value;
  manB2_1 = b2_1.value;
  manB2_2 = b2_2.value;

  ans1_1.value = Number(manB1_1) * Number(scalarB);
  ans1_2.value = Number(manB1_2) * Number(scalarB);
  ans2_1.value = Number(manB2_1) * Number(scalarB);
  ans2_2.value = Number(manB2_2) * Number(scalarB);
}
//
