//if user double clicks check your answer when answer is correct, will increase correct answer multiple times


let questionCount = 0;
let correctQuestions = 0;
let correctQuestionsPercentage = 0;
let determinantA = 0;
let questionType = 0;
let clear2x2 = 123456;

clearFunc = function() {
  //Clear all steps and determinant. Allows fresh start at the beginning of each function.
  //Answers matrix need not be re-written at this point as it will rewrite itself later in each function.
  document.getElementById("determinantAns").innerHTML = "";
  document.getElementById("ansMathJaxMatrix").innerHTML = "";
  document.getElementById("ansComments").innerHTML = "";

  determinantA.value = 99999;
  userAnsDeterminant.value = 99999; //to check against when not a determinant question

  userAns1_1.value = clear2x2;
  userAns1_2.value = clear2x2;
  userAns1_3.value = clear2x2;

  userAns2_1.value = clear2x2;
  userAns2_2.value = clear2x2;
  userAns2_3.value = clear2x2;

  userAns3_1.value = clear2x2;
  userAns3_2.value = clear2x2;
  userAns3_3.value = clear2x2;

  ans1_1.value = clear2x2;
  ans1_2.value = clear2x2;
  ans1_3.value = clear2x2;

  ans2_1.value = clear2x2;
  ans2_2.value = clear2x2;
  ans2_3.value = clear2x2;

  ans3_1.value = clear2x2;
  ans3_2.value = clear2x2;
  ans3_3.value = clear2x2;

  document.getElementById("userAns1_3").style.display = "block";
  document.getElementById("userAns2_3").style.display = "block";
  document.getElementById("userAns3_1").style.display = "block";
  document.getElementById("userAns3_2").style.display = "block";
  document.getElementById("userAns3_3").style.display = "block";
  document.getElementById("a1_3").style.display = "block";
  document.getElementById("a2_3").style.display = "block";
  document.getElementById("a3_1").style.display = "block";
  document.getElementById("a3_2").style.display = "block";
  document.getElementById("a3_3").style.display = "block";
  document.getElementById("b1_3").style.display = "block";
  document.getElementById("b2_3").style.display = "block";
  document.getElementById("b3_1").style.display = "block";
  document.getElementById("b3_2").style.display = "block";
  document.getElementById("b3_3").style.display = "block";
}

hideSolution = function() {
  //Hides all steps so not visible
  workedSolution.style.display = "none";
  determinantAns.style.display = "none";
  ansMathJaxMatrix.style.display = "none";
  //answerTable.style.display = "none";
  userAnsDeterminant.style.display = "none";
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
showAnswerButton.onclick = function() {

  var y = document.getElementById("ansMathJaxMatrix");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }

  var z = document.getElementById("determinantAns");
  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }
}
// End of Show Steps Buttons

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


function updateDisplay() {
  correctQuestionsPercentage = (Number(correctQuestions) / Number(questionCount)) * 100;
  document.getElementById("questionCountdisplay").innerHTML = "You have answered " + (questionCount - 1) + " questions. You have given " + correctQuestions +
    " correct answers. Your mark is " + correctQuestionsPercentage + "%.";
}

function matrix2x2Display() {
  document.getElementById("userAns1_3").style.display = "none";
  document.getElementById("userAns2_3").style.display = "none";
  document.getElementById("userAns3_1").style.display = "none";
  document.getElementById("userAns3_2").style.display = "none";
  document.getElementById("userAns3_3").style.display = "none";
  document.getElementById("a1_3").style.display = "none";
  document.getElementById("a2_3").style.display = "none";
  document.getElementById("a3_1").style.display = "none";
  document.getElementById("a3_2").style.display = "none";
  document.getElementById("a3_3").style.display = "none";
  document.getElementById("b1_3").style.display = "none";
  document.getElementById("b2_3").style.display = "none";
  document.getElementById("b3_1").style.display = "none";
  document.getElementById("b3_2").style.display = "none";
  document.getElementById("b3_3").style.display = "none";


  //sets values so that all elements that the user will not input or affect (i.e. all those linked to 3x3 matrices) are clear2x2 value
  //and will count as +1 points for the scoring
  a1_3.value = clear2x2;
  a2_3.value = clear2x2;
  a3_1.value = clear2x2;
  a3_2.value = clear2x2;
  a3_3.value = clear2x2;
  b1_3.value = clear2x2;
  b2_3.value = clear2x2;
  b3_1.value = clear2x2;
  b3_2.value = clear2x2;
  b3_3.value = clear2x2;

  userAns1_3.value = clear2x2;
  userAns2_3.value = clear2x2;
  userAns3_1.value = clear2x2;
  userAns3_2.value = clear2x2;
  userAns3_3.value = clear2x2;

}

function checkAnswers() {
  let z = 0;

  z = 0;

  if (userAns1_1.value === ans1_1.value) {
    z++;
  }
  if (userAns1_2.value === ans1_2.value) {
    z++;
  }
  if (userAns2_1.value === ans2_1.value) {
    z++;
  }
  if (userAns2_2.value === ans2_2.value) {
    z++;
  }

  if (userAns1_3.value == ans1_3.value) {
    z++;
  }
  if (userAns2_3.value == ans2_3.value) {
    z++;
  }
  if (userAns3_1.value == ans3_1.value) {
    z++;
  }
  if (userAns3_2.value == ans3_2.value) {
    z++;
  }
  if (userAns3_3.value == ans3_3.value) {
    z++;
  }

  // document.getElementById("test").innerHTML = "Gets here. clear 2x2 =" + clear2x2 + "  and userAns3_3 = " + userAns3_3.value + " and z = " + z + " and also userAnsDeterminant = " +
  //   userAnsDeterminant.value + " and determinantA = " + determinantA;
  //was used for testing

  if (userAnsDeterminant.value == determinantA) {
    z++;
    document.getElementById("ansComments").innerHTML = "and z = " + z;
  }

  // document.getElementById("userAnsDeterminantParagraph").innerHTML = "Gets here. clear 2x2 =" + clear2x2 + "  and userAns3_3 = " + userAns3_3.value + " and z = " + z +
  //   " and also userAnsDeterminant = " + userAnsDeterminant.value + " and determinantA = " + determinantA + ". z = " + z;
  //was used for testing

  if (z === 10) {
    document.getElementById("ansComments").innerHTML = "Well done, that answer is correct!";
    correctQuestions++;
  } else {
    document.getElementById("ansComments").innerHTML = "That's not quite correct. Try again.";
  }

  document.getElementById("ansComments").style.display = "block";

  document.getElementById("workedSolutionButton").style.display = "block";
}

function randomNumberGenerator() {
  questionType = Math.floor(Math.random() * 21) + 1; //reset to twelve

  rndmNum1 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  a1_1.value = rndmNum1;
  rndmNum2 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  a1_2.value = rndmNum2;
  rndmNum3 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  a2_1.value = rndmNum3;
  rndmNum4 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  a2_2.value = rndmNum4;
  rndmNum5 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  b1_1.value = rndmNum5;
  rndmNum6 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  b1_2.value = rndmNum6;
  rndmNum7 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  b2_1.value = rndmNum7;
  rndmNum8 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  b2_2.value = rndmNum8;


  rndmNum9 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  a1_3.value = rndmNum9;
  rndmNum10 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  a2_3.value = rndmNum10;
  rndmNum11 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  a3_1.value = rndmNum11;
  rndmNum12 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  a3_2.value = rndmNum12;
  rndmNum13 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  a3_3.value = rndmNum13;


  rndmNum14 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  b1_3.value = rndmNum14;
  rndmNum15 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  b2_3.value = rndmNum15;
  rndmNum16 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  b3_1.value = rndmNum16;
  rndmNum17 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  b3_2.value = rndmNum17;
  rndmNum18 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  b3_3.value = rndmNum18;

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
}

testStart.onclick = function() {
  clearFunc();
  hideSolution();
  randomNumberGenerator();

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

  document.getElementById("testStart").innerHTML = "Press here for the next question";
  document.getElementById("matrixB").style.display = "block";
  document.getElementById("userAnswerTable").style.display = "block";
  document.getElementById("userAnsDeterminantParagraph").style.display = "none";



  questionCount++;
  updateDisplay();
  determinantA = 99999; //.value ??


  //2x2 questions
  if (questionType === 1) {
    matrix2x2Display();
    document.getElementById("theProblem").innerHTML = "Transpose matrix A";

    ans1_1.value = a1_1.value;
    ans1_2.value = a2_1.value;
    ans2_1.value = a1_2.value;
    ans2_2.value = a2_2.value;


    document.getElementById("ansMathJaxMatrix").innerHTML = "$A^T = \\begin{bmatrix}" +
      ans1_1.value + "&" + ans1_2.value + "\\\\" + ans2_1.value + "& " + ans2_2.value + "\\end{bmatrix}$";

    workedSolution.innerHTML = "The original matrix $A = \\begin{bmatrix} " + a1_1.value + " & " + a1_2.value + "\\\\ " + a2_1.value + " & " + a2_2.value + "\\end{bmatrix}$ &ensp;&ensp;&ensp;" +
      "<br><br>" + "$A^T = \\begin{bmatrix}" +
      ans1_1.value + "&" + ans1_2.value + "\\\\" + ans2_1.value + "& " + ans2_2.value + "\\end{bmatrix}$";
  }

  if (questionType === 2) {
    matrix2x2Display();
    document.getElementById("theProblem").innerHTML = "Transpose matrix B";

    ans1_1.value = manB1_1;
    ans1_2.value = manB2_1;
    ans2_1.value = manB1_2;
    ans2_2.value = manB2_2;

    document.getElementById("ansMathJaxMatrix").innerHTML = "$B^T = \\begin{bmatrix}" +
      ans1_1.value + "&" + ans1_2.value + "\\\\" + ans2_1.value + "& " + ans2_2.value + "\\end{bmatrix}$";

    document.getElementById("ansMathJaxMatrix").style.display = "block";
    document.getElementById("workedSolutionButton").style.display = "block";

    workedSolution.innerHTML = "The original matrix $B = \\begin{bmatrix} " + b1_1.value + " & " + b1_2.value + "\\\\ " + b2_1.value + " & " + b2_2.value + "\\end{bmatrix}$ &ensp;&ensp;&ensp;" +
      "<br><br>" + "$B^T = \\begin{bmatrix}" +
      ans1_1.value + "&" + ans1_2.value + "\\\\" + ans2_1.value + "& " + ans2_2.value + "\\end{bmatrix}$";
  }

  if (questionType === 3) {
    matrix2x2Display();
    document.getElementById("theProblem").innerHTML = "Please ADD matrix A to matrix B";

    ans1_1.value = Number(rndmNum1) + Number(rndmNum5);
    ans1_2.value = Number(rndmNum2) + Number(rndmNum6);
    ans2_1.value = Number(rndmNum3) + Number(rndmNum7);
    ans2_2.value = Number(rndmNum4) + Number(rndmNum8);

    document.getElementById("ansMathJaxMatrix").style.display = "block";
    document.getElementById("ansMathJaxMatrix").innerHTML = "\\begin{bmatrix} " + ans1_1.value + " & " + ans1_2.value + "\\\\ " + ans2_1.value +
      " & " + ans2_2.value + "\\" + "end{bmatrix}";

    document.getElementById("workedSolutionButton").style.display = "block";
    workedSolution.innerHTML = "The original matrix $A = \\begin{bmatrix} " + a1_1.value + " & " + a1_2.value + "\\\\ " + a2_1.value + " & " + a2_2.value + "\\end{bmatrix}$ &ensp;&ensp;&ensp;" +
      "The original matrix $B = \\begin{bmatrix} " + b1_1.value + " & " + b1_2.value + "\\\\ " + b2_1.value + " & " + b2_2.value + "\\end{bmatrix}$ &ensp;&ensp;&ensp;" +
      "<br><br>" +
      "$A + B &emsp;&emsp; = \\begin{bmatrix}" + a1_1.value + " &nbsp;+ &nbsp;" + b1_1.value + "&" +
      a1_2.value + " &nbsp;+ &nbsp;" + b1_2.value + "\\\\" + a2_1.value + " &nbsp;+ &nbsp;" + b2_1.value + "&" + a2_2.value + " &nbsp;+ &nbsp;" +
      b2_2.value + "\\end{bmatrix}$" + "<br><br> $A + B = \\begin{bmatrix} " + ans1_1.value + " & " + ans1_2.value + "\\\\ " + ans2_1.value +
      " & " + ans2_2.value + "\\" + "end{bmatrix}$";
  }

  if (questionType === 4) {
    matrix2x2Display();
    document.getElementById("theProblem").innerHTML = "Please ADD matrix B to matrix A";

    ans1_1.value = Number(rndmNum1) + Number(rndmNum5);
    ans1_2.value = Number(rndmNum2) + Number(rndmNum6);
    ans2_1.value = Number(rndmNum3) + Number(rndmNum7);
    ans2_2.value = Number(rndmNum4) + Number(rndmNum8);

    document.getElementById("ansMathJaxMatrix").style.display = "block";
    document.getElementById("ansMathJaxMatrix").innerHTML = "\\begin{bmatrix} " + ans1_1.value + " & " + ans1_2.value + "\\\\ " + ans2_1.value +
      " & " + ans2_2.value + "\\" + "end{bmatrix}";

    document.getElementById("workedSolutionButton").style.display = "block";
    workedSolution.innerHTML = "The original matrix $A = \\begin{bmatrix} " + a1_1.value + " & " + a1_2.value + "\\\\ " + a2_1.value + " & " + a2_2.value + "\\end{bmatrix}$ &ensp;&ensp;&ensp;" +
      "The original matrix $B = \\begin{bmatrix} " + b1_1.value + " & " + b1_2.value + "\\\\ " + b2_1.value + " & " + b2_2.value + "\\end{bmatrix}$ &ensp;&ensp;&ensp;" +
      "<br><br>" +
      "$B + A &emsp;&emsp; = \\begin{bmatrix} " + b1_1.value + " &nbsp;+ &nbsp;" + a1_1.value + "&" +
      b1_2.value + " &nbsp;+ &nbsp;" + a1_2.value + "\\\\" + a2_1.value + " &nbsp;+ &nbsp;" + b2_1.value + "&" + a2_2.value + " &nbsp;+ &nbsp;" +
      b2_2.value + "\\end{bmatrix}$" + "<br><br> $A + B = \\begin{bmatrix} " + ans1_1.value + " & " + ans1_2.value + "\\\\ " + ans2_1.value +
      " & " + ans2_2.value + "\\" + "end{bmatrix}$";
  }

  if (questionType === 5) {
    matrix2x2Display();
    document.getElementById("theProblem").innerHTML = "Please SUBTRACT matrix B from matrix A";

    ans1_1.value = Number(manA1_1) - Number(manB1_1);
    ans1_2.value = Number(manA1_2) - Number(manB1_2);
    ans2_1.value = Number(manA2_1) - Number(manB2_1);
    ans2_2.value = Number(manA2_2) - Number(manB2_2);

    document.getElementById("ansMathJaxMatrix").style.display = "block";
    document.getElementById("ansMathJaxMatrix").innerHTML = "\\begin{bmatrix} " + ans1_1.value + " & " + ans1_2.value + "\\\\ " + ans2_1.value +
      " & " + ans2_2.value + "\\" + "end{bmatrix}";

    document.getElementById("workedSolutionButton").style.display = "block";

    workedSolution.innerHTML = "The original matrix $A = \\begin{bmatrix} " + a1_1.value + " & " + a1_2.value + "\\\\ " + a2_1.value + " & " + a2_2.value + "\\end{bmatrix}$ &ensp;&ensp;&ensp;" +
      "The original matrix $B = \\begin{bmatrix} " + b1_1.value + " & " + b1_2.value + "\\\\ " + b2_1.value + " & " + b2_2.value + "\\end{bmatrix}$ &ensp;&ensp;&ensp;" +
      "<br><br>" +
      "$A - B = \\begin{bmatrix} " + a1_1.value + " &nbsp;- &nbsp;" + b1_1.value + "&" + a1_2.value +
      " &nbsp;- &nbsp;" + b1_2.value + "\\\\" + a2_1.value + " &nbsp;- &nbsp;" + b2_1.value + "&" + a2_2.value + " &nbsp;- &nbsp;" + b2_2.value +
      "\\end{bmatrix}$" + "<br><br> $A - B = \\begin{bmatrix} " + ans1_1.value + " & " + ans1_2.value + "\\\\ " + ans2_1.value +
      " & " + ans2_2.value + "\\" + "end{bmatrix}$";
  }

  if (questionType === 6) {
    matrix2x2Display();
    document.getElementById("theProblem").innerHTML = "Please SUBTRACT matrix A from matrix B";

    ans1_1.value = Number(manB1_1) - Number(manA1_1);
    ans1_2.value = Number(manB1_2) - Number(manA1_2);
    ans2_1.value = Number(manB2_1) - Number(manA2_1);
    ans2_2.value = Number(manB2_2) - Number(manA2_2);

    document.getElementById("ansMathJaxMatrix").style.display = "block";
    document.getElementById("ansMathJaxMatrix").innerHTML = "\\begin{bmatrix} " + ans1_1.value + " & " + ans1_2.value + "\\\\ " + ans2_1.value +
      " & " + ans2_2.value + "\\" + "end{bmatrix}";

    document.getElementById("workedSolutionButton").style.display = "block";

    workedSolution.innerHTML = "The original matrix $A = \\begin{bmatrix} " + a1_1.value + " & " + a1_2.value + "\\\\ " + a2_1.value + " & " + a2_2.value + "\\end{bmatrix}$ &ensp;&ensp;&ensp;" +
      "The original matrix $B = \\begin{bmatrix} " + b1_1.value + " & " + b1_2.value + "\\\\ " + b2_1.value + " & " + b2_2.value + "\\end{bmatrix}$ &ensp;&ensp;&ensp;" +
      "<br><br>" +
      "$B - A = \\begin{bmatrix} " + b1_1.value + " &nbsp;- &nbsp;" + a1_1.value + "&" + b1_2.value +
      " &nbsp;- &nbsp;" + a1_2.value + "\\\\" + b2_1.value + " &nbsp;- &nbsp;" + a2_1.value + "&" + b2_2.value + " &nbsp;- &nbsp;" + a2_2.value +
      "\\end{bmatrix}$" + "<br><br>$B - A = \\begin{bmatrix} " + ans1_1.value + " & " + ans1_2.value + "\\\\ " + ans2_1.value +
      " & " + ans2_2.value + "\\" + "end{bmatrix}$";
  }

  if (questionType === 7) {
    matrix2x2Display();
    document.getElementById("theProblem").innerHTML = "Multiply matrix A by matrix B";

    ans1_1.value = ((Number(manA1_1) * Number(manB1_1)) + ((Number(manA1_2) * Number(manB2_1))));
    ans1_2.value = ((Number(manA1_1) * Number(manB1_2)) + ((Number(manA1_2) * Number(manB2_2))));
    ans2_1.value = ((Number(manA2_1) * Number(manB1_1)) + ((Number(manA2_2) * Number(manB2_1))));
    ans2_2.value = ((Number(manA2_1) * Number(manB1_2)) + ((Number(manA2_2) * Number(manB2_2))));

    document.getElementById("ansMathJaxMatrix").innerHTML = "\\begin{bmatrix} " + ans1_1.value + " & " + ans1_2.value + "\\\\ " + ans2_1.value +
      " & " + ans2_2.value + "\\" + "end{bmatrix}";

    document.getElementById("ansMathJaxMatrix").style.display = "block";
    document.getElementById("workedSolutionButton").style.display = "block";

    workedSolution.innerHTML = "The original matrix $A = \\begin{bmatrix} " + a1_1.value + " & " + a1_2.value + "\\\\ " + a2_1.value + " & " + a2_2.value + "\\end{bmatrix}$ &ensp;&ensp;&ensp;" +
      "The original matrix $B = \\begin{bmatrix} " + b1_1.value + " & " + b1_2.value + "\\\\ " + b2_1.value + " & " + b2_2.value + "\\end{bmatrix}$ &ensp;&ensp;&ensp;" +
      "<br><br>" +
      "<br><br> $AB = &ensp;&ensp;&ensp; \\begin{bmatrix}" + a1_1.value + "\\cdot" + b1_1.value + " + " + a1_2.value +
      "\\cdot" + b2_1.value + "&" + a1_1.value + "\\cdot" + b1_2.value + " + " + a1_2.value + "\\cdot" + b2_2.value + "\\\\" + a2_1.value + "\\cdot" +
      b1_1.value + " + " + a2_2.value + "\\cdot" + b2_1.value + "&" + a2_1.value + "\\cdot" + b1_2.value + " + " + a2_2.value + "\\cdot" + b2_2.value +
      "\\end{bmatrix}$";
  }

  if (questionType === 8) {
    matrix2x2Display();
    document.getElementById("theProblem").innerHTML = "Multiply matrix B by matrix A";

    ans1_1.value = ((Number(manB1_1) * Number(manA1_1)) + ((Number(manB1_2) * Number(manA2_1))));
    ans1_2.value = ((Number(manB1_1) * Number(manA1_2)) + ((Number(manB1_2) * Number(manA2_2))));
    ans2_1.value = ((Number(manB2_1) * Number(manA1_1)) + ((Number(manB2_2) * Number(manA2_1))));
    ans2_2.value = ((Number(manB2_1) * Number(manA1_2)) + ((Number(manB2_2) * Number(manA2_2))));

    document.getElementById("ansMathJaxMatrix").innerHTML = "\\begin{bmatrix} " + ans1_1.value + " & " + ans1_2.value + "\\\\ " + ans2_1.value +
      " & " + ans2_2.value + "\\" + "end{bmatrix}";

    document.getElementById("ansMathJaxMatrix").style.display = "block";
    document.getElementById("workedSolutionButton").style.display = "block";

    workedSolution.innerHTML = "The original matrix $A = \\begin{bmatrix} " + a1_1.value + " & " + a1_2.value + "\\\\ " + a2_1.value + " & " + a2_2.value + "\\end{bmatrix}$ &ensp;&ensp;&ensp;" +
      "The original matrix $B = \\begin{bmatrix} " + b1_1.value + " & " + b1_2.value + "\\\\ " + b2_1.value + " & " + b2_2.value + "\\end{bmatrix}$ &ensp;&ensp;&ensp;" +
      "<br><br>" +
      "$BA = &ensp;&ensp;&ensp; \\begin{bmatrix}" + b1_1.value + "\\cdot" + a1_1.value + " + " + b1_2.value +
      "\\cdot" + a2_1.value + "&" + b1_1.value + "\\cdot" + a1_2.value + " + " + b1_2.value + "\\cdot" + a2_2.value + "\\\\" + b2_1.value + "\\cdot" +
      a1_1.value + " + " + b2_2.value + "\\cdot" + a2_1.value + "&" + b2_1.value + "\\cdot" + a1_2.value + " + " + b2_2.value + "\\cdot" + a2_2.value +
      "\\end{bmatrix}$";
  }

  if (questionType === 9) {
    matrix2x2Display();
    document.getElementById("theProblem").innerHTML = "Calculate the inverse of matrix A to two decimal places";

    determinantA = (Number(manA1_1) * Number(manA2_2)) - (Number(manA1_2) * Number(manA2_1));

    inverseA2x2multiplier = 1 / determinantA;

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

    document.getElementById("ansMathJaxMatrix").style.display = "block";
    document.getElementById("workedSolutionButton").style.display = "block";

    document.getElementById("ansMathJaxMatrix").innerHTML = "\\begin{bmatrix} " + ans1_1.value + " & " + ans1_2.value + "\\\\ " + ans2_1.value +
      " & " + ans2_2.value + "\\" + "end{bmatrix}";
    workedSolution.innerHTML = "<br>$A^{-1} = \\frac{1}{" + determinantA + "}$&ensp; x&ensp; $\\begin{bmatrix}" + a2_2.value + "& " + minusb + "\\\\" +
      minusc + "&" + a1_1.value + "\\end{bmatrix}$" + "<br><br><br> $A^{-1} = \\begin{bmatrix} " + ans1_1.value + " & " + ans1_2.value + "\\\\ " + ans2_1.value +
      " & " + ans2_2.value + "\\" + "end{bmatrix}$";

    if (determinantA == 0) {
      document.getElementById("ansMathJaxMatrix").innerHTML = "The determinant of this matrix is 0. A matrix with a determinant of 0 does not have an inverse.";
      document.getElementById("workedSolutionButton").style.display = "none";
    }
  }

  if (questionType === 10) {
    matrix2x2Display();
    document.getElementById("theProblem").innerHTML = "Calculate the inverse of matrix B to two decimal places";

    determinantB2x2 = (Number(manB1_1) * Number(manB2_2)) - (Number(manB1_2) * Number(manB2_1));

    inverseB2x2multiplier = 1 / determinantB2x2;

    rndAns1_1 = manB2_2 * inverseA2x2multiplier;
    rndAns1_2 = -(manB1_2 * inverseA2x2multiplier);
    rndAns2_1 = -(manB2_1 * inverseA2x2multiplier);
    rndAns2_2 = manB1_1 * inverseA2x2multiplier;

    ans1_1.value = Math.round((rndAns1_1 + Number.EPSILON) * 100) / 100;
    ans1_2.value = -Math.round((rndAns1_2 + Number.EPSILON) * 100) / 100;
    ans2_1.value = -Math.round((rndAns2_1 + Number.EPSILON) * 100) / 100;
    ans2_2.value = Math.round((rndAns2_2 + Number.EPSILON) * 100) / 100;

    minusb = (manB1_2 * -1);
    minusc = (manB2_1 * -1);

    document.getElementById("ansMathJaxMatrix").style.display = "block";
    document.getElementById("workedSolutionButton").style.display = "block";


    document.getElementById("ansMathJaxMatrix").innerHTML = "\\begin{bmatrix} " + ans1_1.value + " & " + ans1_2.value + "\\\\ " + ans2_1.value +
      " & " + ans2_2.value + "\\" + "end{bmatrix}";
    workedSolution.innerHTML = "The original matrix $B = \\begin{bmatrix} " + b1_1.value + " & " + b1_2.value + "\\\\ " + b2_1.value + " & " + b2_2.value + "\\end{bmatrix}$ &ensp;&ensp;&ensp;" +
      "<br><br>" + "<br>$B^{-1} = \\frac{1}{" + determinantB + "}$&ensp; x&ensp; $\\begin{bmatrix}" + b2_2.value + "& " + minusb + "\\\\" +
      minusc + "&" + b1_1.value + "\\end{bmatrix}$" + "<br><br><br> $B^{-1} = \\begin{bmatrix} " + ans1_1.value + " & " + ans1_2.value + "\\\\ " + ans2_1.value +
      " & " + ans2_2.value + "\\" + "end{bmatrix}$";


    if (determinantB == 0) {
      document.getElementById("ansMathJaxMatrix").innerHTML = "The determinant of this matrix is 0. A matrix with a determinant of 0 does not have an inverse.";
      document.getElementById("workedSolutionButton").style.display = "none";
    }

  }

  if (questionType === 11) {
    matrix2x2Display();
    document.getElementById("theProblem").innerHTML = "Calculate the determinant of matrix A";

    determinantA = (Number(manA1_1) * Number(manA2_2)) - (Number(manA1_2) * Number(manA2_1));
    determinantAns.innerHTML = "The determinant of Matrix A is " + determinantA;

    document.getElementById("matrixB").style.display = "none";

    document.getElementById("userAnsDeterminantParagraph").style.display = "block";
    document.getElementById("userAnsDeterminant").style.display = "block";
    document.getElementById("userAnswerTable").style.display = "none";
    determinantAns.style.display = "block";


    workedSolution.innerHTML = "$(" + a1_1.value +
      "$ x $ " + a2_2.value + ") - (" + a1_2.value + "$ x $" + a2_1.value + ") = " + determinantA + "$";
  }

  //3x3 questions
  if (questionType === 12) {

    document.getElementById("theProblem").innerHTML = "Calculate the determinant of matrix A";

    determinantA = (Number(manA1_1) * Number(manA2_2) * Number(manA3_3)) +
      (Number(manA1_2) * Number(manA2_3) * Number(manA3_1)) +
      (Number(manA1_3) * Number(manA2_1) * Number(manA3_2)) -
      (Number(manA3_1) * Number(manA2_2) * Number(manA1_3)) -
      (Number(manA3_2) * Number(manA2_3) * Number(manA1_1)) -
      (Number(manA3_3) * Number(manA2_1) * Number(manA1_2));

    determinantAns.innerHTML = "The determinant of Matrix A is " + determinantA;

    document.getElementById("matrixB").style.display = "none";
    determinantAns.style.display = "block";

    document.getElementById("userAnsDeterminantParagraph").style.display = "block";

    document.getElementById("userAnsDeterminant").style.display = "block";
    document.getElementById("userAnswerTable").style.display = "none";

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
      ") - &ensp;" + a1_1.value + "(" + a2_3.value + " \\cdot" + a3_2.value + ") &ensp;&ensp;=&ensp;" + determinantA + "$";
  }

  if (questionType === 13) {
    document.getElementById("theProblem").innerHTML = "Calculate the inverse of matrix A to two decimal places";

    determinantA = (Number(manA1_1) * Number(manA2_2) * Number(manA3_3)) +
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

    inverseA3x3multiplier = 1 / determinantA;

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

    if (determinantA === 0) {
      clearFunc();
      hideSteps();
      document.getElementById("ansMathJaxMatrix").innerHTML = "The determinant of matrix A is 0. A matrix with a determinant of 0 does not have an inverse.";
      document.getElementById("workedSolutionButton").style.display = "none";
      document.getElementById("ansMathJaxMatrix").style.display = "block";
    } else {
      document.getElementById("ansMathJaxMatrix").innerHTML = "$A^{-1} = \\begin{bmatrix}  " + ans1_1.value +
        " & " + ans1_2.value + " & " + ans1_3.value + "\\\\ " + ans2_1.value + " & " + ans2_2.value + " & " + ans2_3.value + "\\\\ " +
        ans3_1.value + " & " + ans3_2.value + " & " + ans3_3.value + "\\end{bmatrix}$";

      workedSolution.innerHTML = "The original matrix $A = \\begin{bmatrix} " + a1_1.value + " & " + a1_2.value + " & " +
        a1_3.value + "\\\\ " + a2_1.value + " & " + a2_2.value + " & " + a2_3.value + " \\\\ " + a3_1.value + " & " +
        a3_2.value + " & " + a3_3.value + "\\end{bmatrix}$ <br><br>"

        +
        "Step One: $Det (A) = " + a1_1.value + "\\begin{vmatrix}" +
        +a2_2.value + "&" + a2_3.value + "\\\\" + a3_2.value + "&" + a3_3.value + "\\end{vmatrix} - &ensp;" + a1_2.value + "\\begin{vmatrix}" + a2_1.value + "&" +
        a2_3.value + "\\\\" + a3_1.value + "&" + a3_3.value + "\\end{vmatrix} + &ensp;" + a1_3.value + "\\begin{vmatrix}" + a2_1.value + "&" + a2_2.value + "\\\\" +
        a3_1.value + "&" + a3_2.value + "\\end{vmatrix}&ensp; = &ensp; " + a1_1.value + "(" + a2_2.value + " \\cdot" + a3_3.value + ") + &ensp;" + a1_2.value +
        "(" + a2_3.value + " \\cdot" + a3_1.value + ") + " + a1_3.value + "(" + a2_1.value + " \\cdot" + a3_2.value + ") - &ensp;" + a1_3.value + "(" +
        a2_2.value + " \\cdot" + a3_1.value + ") - &ensp;" + a1_2.value + "(" + a2_1.value + " \\cdot" + a3_3.value +
        ") - &ensp;" + a1_1.value + "(" + a2_3.value + " \\cdot" + a3_2.value + ") &ensp;&ensp;=&ensp;" + determinantA +

        "$<br><br>Step Two: $ A ^T = \\begin{bmatrix}  " + transposed1_1 +
        " & " + transposed1_2 + " & " + transposed1_3 + "\\\\ " + transposed2_1 + " & " + transposed2_2 + " & " + transposed2_3 + "\\\\ " +
        transposed3_1 + " & " + transposed3_2 + " & " + transposed3_3 + "\\end{bmatrix}$<br><br>" +

        "Steps Three and Four: $Adj(A) = \\begin{bmatrix}  " + deta +
        " & " + detb + " & " + detc + "\\\\ " + detd + " & " + dete + " & " + detf + "\\\\ " +
        detg + " & " + deth + " & " + deti + "\\end{bmatrix} $<br><br>" +

        "Step Five: $A^{-1} &ensp; = &ensp;\\dfrac1{" + determinantB3x3 + "} \\begin{bmatrix} " + deta +
        " & " + detb + " & " + detc + "\\\\ " + detd + " & " + dete + " & " + detf + "\\\\ " +
        detg + " & " + deth + " & " + deti + "\\end{bmatrix}$ <br><br>" +

        "Final Answer: $A ^{-1} = \\begin{bmatrix}  " + ans1_1.value +
        " & " + ans1_2.value + " & " + ans1_3.value + "\\\\ " + ans2_1.value + " & " + ans2_2.value + " & " + ans2_3.value + "\\\\ " +
        ans3_1.value + " & " + ans3_2.value + " & " + ans3_3.value + "\\end{bmatrix}$";
    }

    document.getElementById("ansMathJaxMatrix").style.display = "block";
    document.getElementById("determinantAns").style.display = "none";

    document.getElementById("workedSolutionButton").style.display = "block";
  }

  if (questionType === 14) {

    document.getElementById("theProblem").innerHTML = "Calculate the inverse of matrix B to two decimal places";

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

    document.getElementById("ansMathJaxMatrix").style.display = "block";
    document.getElementById("determinantAns").style.display = "none";

    document.getElementById("workedSolutionButton").style.display = "block";
  }

  if (questionType === 15) {

    document.getElementById("theProblem").innerHTML = "Multiply matrix B by matrix A";

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
    document.getElementById("workedSolutionButton").style.display = "block";

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

  }

  if (questionType === 16) {

    document.getElementById("theProblem").innerHTML = "Multiply matrix A by matrix B";

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
    document.getElementById("workedSolutionButton").style.display = "block";

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

  }

  if (questionType === 17) {

    document.getElementById("theProblem").innerHTML = "Please SUBTRACT matrix A from matrix B";

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
    document.getElementById("workedSolutionButton").style.display = "block";

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
  }

  if (questionType === 18) {

    document.getElementById("theProblem").innerHTML = "Please SUBTRACT matrix B from matrix A";

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
    document.getElementById("workedSolutionButton").style.display = "block";

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
  }

  if (questionType === 19) {

    document.getElementById("theProblem").innerHTML = "Please ADD matrix A to matrix B";

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
    document.getElementById("workedSolutionButton").style.display = "block";

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
  }

  if (questionType === 20) {

    document.getElementById("theProblem").innerHTML = "Transpose matrix B";

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
    document.getElementById("workedSolutionButton").style.display = "block";

    workedSolution.innerHTML = "\\B = $\\begin{bmatrix}  " + b1_1.value +
      " & " + b1_2.value + " & " + b1_3.value + "\\\\ " + b2_1.value + " & " + b2_2.value + " & " + b2_3.value + "\\\\ " +
      b3_1.value + " & " + b3_2.value + " & " + b3_3.value + "\\end{bmatrix} &emsp;&emsp; = &emsp;&emsp;B ^T = \\begin{bmatrix}  " + ans1_1.value +
      " & " + ans1_2.value + " & " + ans1_3.value + "\\\\ " + ans2_1.value + " & " + ans2_2.value + " & " + ans2_3.value + "\\\\ " +
      ans3_1.value + " & " + ans3_2.value + " & " + ans3_3.value + "\\end{bmatrix}$";
  }

  if (questionType === 21) {

    document.getElementById("theProblem").innerHTML = "Transpose matrix A";

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
    document.getElementById("workedSolutionButton").style.display = "block";

    workedSolution.innerHTML = "\\A = $\\begin{bmatrix}  " + a1_1.value +
      " & " + a1_2.value + " & " + a1_3.value + "\\\\ " + a2_1.value + " & " + a2_2.value + " & " + a2_3.value + "\\\\ " +
      a3_1.value + " & " + a3_2.value + " & " + a3_3.value + "\\end{bmatrix} &emsp;&emsp; = &emsp;&emsp;A ^T = \\begin{bmatrix}  " + ans1_1.value +
      " & " + ans1_2.value + " & " + ans1_3.value + "\\\\ " + ans2_1.value + " & " + ans2_2.value + " & " + ans2_3.value + "\\\\ " +
      ans3_1.value + " & " + ans3_2.value + " & " + ans3_3.value + "\\end{bmatrix}$";
  }


  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);

  document.getElementById("workedSolution").style.display = "none";
  document.getElementById("determinantAns").style.display = "none";
  document.getElementById("ansMathJaxMatrix").style.display = "none";
}


checkSolutionButton.onclick = function() {
  checkAnswers();
  updateDisplay();
}
