pagelink1.onclick = function () {
  document.location ='#circuitOne';
}
pagelink2.onclick = function () {
  document.location ='#circuitTwo';
}
pagelink3.onclick = function () {
  document.location ='#circuitThree';
}


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

calculator3x3.onclick = function() {
  document.location = '10 3x3 Calculator.html';
}

quiz.onclick = function() {
  document.location ='8 Quiz section.html';
}
//end of navbar links


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


circuitOneWorkedSolutionButton.onclick = function() {

  var x = document.getElementById("circuitOneWorkedSolution");
  if (x.style.display === "block") {
    x.style.display = "none";
    document.location ='#circuitOneWorkedSolution';

  } else {
    x.style.display = "block";
  }
}

circuitTwoWorkedSolutionButton.onclick = function() {

  var x = document.getElementById("circuitTwoWorkedSolution");
  if (x.style.display === "block") {
    x.style.display = "none";
    document.location ='#circuitTwoWorkedSolution';
  } else {
    x.style.display = "block";
  }
}

circuitThreeWorkedSolutionButton.onclick = function() {

  var x = document.getElementById("circuitThreeWorkedSolution");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
      document.location ='#circuitThreeWorkedSolution';
  }
}

hideSolutions = function() {
  //Hides all solutions so not visible

  circuitOneWorkedSolution.style.display = "none";
  circuitTwoWorkedSolution.style.display = "none";
  circuitThreeWorkedSolution.style.display = "none";
  circuitOneWorkedSolutionButton.style.display = "none";
  circuitTwoWorkedSolutionButton.style.display = "none";
  circuitThreeWorkedSolutionButton.style.display = "none";

  circuitOneAns.style.display = "none";
  circuitTwoAns.style.display = "none";
  circuitThreeAns.style.display = "none";
}


circuitOneCalculateButton.onclick = function() {
hideSolutions();
  circuitOneWorkedSolutionButton.style.display = "block";
  circuitOneAns.style.display = "block";
  document.location ='#circuitOneAns';

  var valueCircuitOneE1 = (circuitOneE1.value - circuitOneE2.value);
  var valueCircuitOneE2 = circuitOneE2.value;
  var valueCircuitOneR1 = circuitOneR1.value;
  var valueCircuitOneR2 = circuitOneR2.value;
  var valueCircuitOneR3 = circuitOneR3.value;

  var valueCircuitOneI1Numer = (Number(valueCircuitOneE1) * (Number(valueCircuitOneR2) + Number(valueCircuitOneR3))) - (Number(valueCircuitOneE2) * (-(Number(valueCircuitOneR3))));

  var valueCircuitOneDenom = ((Number(valueCircuitOneR1) + (Number(valueCircuitOneR3))) * (Number(valueCircuitOneR2) + Number(valueCircuitOneR3))) - (Number(valueCircuitOneR3) * Number(valueCircuitOneR3));

  var valueCircuitOneI1 = Number(valueCircuitOneI1Numer) / Number(valueCircuitOneDenom);

  valueCircuitOneI2Numer = ((Number(valueCircuitOneR1) + (Number(valueCircuitOneR3))) * (Number(valueCircuitOneE2))) - (-(Number(valueCircuitOneR3)) * (Number(valueCircuitOneE1)));
  valueCircuitOneI2 = Number(valueCircuitOneI2Numer) / Number(valueCircuitOneDenom);

var ansvalueCircuitOneI1 = Number(valueCircuitOneI1) - Number(valueCircuitOneI2);
var ansvalueCircuitOneI2 = Number(valueCircuitOneI2);


  circuitOneAns.innerHTML = "The value of $I_1$ is $" + Math.round((ansvalueCircuitOneI1 + Number.EPSILON) * 100) / 100 + " $ Amps. The value of $I_2$ is $" +
  Math.round((ansvalueCircuitOneI2 + Number.EPSILON) * 100) / 100 + " $ Amps. Both answers are to 2 d.p.";
  circuitOneWorkedSolution.innerHTML = "$" + circuitOneE1.value +" - " + circuitOneE2.value + " = (" + valueCircuitOneR1 + " + " + valueCircuitOneR3 + ") i_1 - " +
  valueCircuitOneR3 + " i_2$ <br>$" + valueCircuitOneE2 + "= -" + valueCircuitOneR3 + "i_1 + (" + valueCircuitOneR2 + "+" + valueCircuitOneR3 + ") i_2$ <br>" +

"and $I_1 = i_1-i_2, I_2 = i_2$<br><br>" +

"Using Cramer's Rule to solve: <br>$ i_1 = \\dfrac{ \\begin{bmatrix} " + valueCircuitOneE1 + " & -" + valueCircuitOneR3 + "\\\\ " + valueCircuitOneE2  +
" & " + (Number(valueCircuitOneR2) + Number(valueCircuitOneR3)) + "\\" + "end{bmatrix}}" +
"{\\begin{bmatrix} " + (Number(valueCircuitOneR1) + (Number(valueCircuitOneR3))) + " & -" + valueCircuitOneR3 + "\\\\ -" + valueCircuitOneR3  +
" & " + (Number(valueCircuitOneR2) + Number(valueCircuitOneR3)) + "\\" + "end{bmatrix}} = \\dfrac{" +valueCircuitOneI1Numer + "}{" + valueCircuitOneDenom + "} = " + valueCircuitOneI1 +

"&emsp;&emsp;&emsp; i_2 = \\dfrac{ \\begin{bmatrix} " + (Number(valueCircuitOneR1) + (Number(valueCircuitOneR3))) + " &" + valueCircuitOneE1 + "\\\\ -" + valueCircuitOneR3  +
" & " + valueCircuitOneE2 + "\\" + "end{bmatrix}}" +
"{\\begin{bmatrix} " + (Number(valueCircuitOneR1) + (Number(valueCircuitOneR3))) + " & -" + valueCircuitOneR3 + "\\\\ -" + valueCircuitOneR3 +
" & " + (Number(valueCircuitOneR2) + Number(valueCircuitOneR3)) + "\\" + "end{bmatrix}} = \\dfrac{" +valueCircuitOneI2Numer + "}{" + valueCircuitOneDenom + "} = " + valueCircuitOneI2 +

"$<br> $I_1 = " + Math.round((valueCircuitOneI1 + Number.EPSILON) * 100) / 100 + " - " + Math.round((valueCircuitOneI2 + Number.EPSILON) * 100) / 100 + " = " +
 Math.round((ansvalueCircuitOneI1 + Number.EPSILON) * 100) / 100 + " $ Amps <br> $I_2 = " + Math.round((ansvalueCircuitOneI2 + Number.EPSILON) * 100) / 100 + "$ Amps";

// Math.round((rndAns1_1 + Number.EPSILON) * 100) / 100

  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}

circuitTwoCalculateButton.onclick = function() {
hideSolutions();
  circuitTwoWorkedSolutionButton.style.display = "block";
circuitTwoAns.style.display = "block";
document.location ='#circuitTwoAns';

  var valueCircuitTwoE1 = circuitTwoE1.value;
  var valueCircuitTwoE2 = circuitTwoE2.value;
  var valueCircuitTwoR1 = circuitTwoR1.value;
  var valueCircuitTwoR2 = circuitTwoR2.value;
  var valueCircuitTwoR3 = circuitTwoR3.value;

  var valueCircuitTwoI1Numer = (Number(valueCircuitTwoE1) * (Number(valueCircuitTwoR2) + Number(valueCircuitTwoR3))) - (Number(valueCircuitTwoE2 * (Number(valueCircuitTwoR3))));

  var valueCircuitTwoDenom = ((Number(valueCircuitTwoR1) + (Number(valueCircuitTwoR3))) * (Number(valueCircuitTwoR2) + Number(valueCircuitTwoR3))) - (Number(valueCircuitTwoR3) * Number(valueCircuitTwoR3));

  var valueCircuitTwoI1 = Number(valueCircuitTwoI1Numer) / Number(valueCircuitTwoDenom);

  valueCircuitTwoI2Numer = ((Number(valueCircuitTwoR1) + (Number(valueCircuitTwoR3))) * (-(Number(valueCircuitTwoE2)))) - (-(Number(valueCircuitTwoR3)) * (Number(valueCircuitTwoE1)));
  valueCircuitTwoI2 = Number(valueCircuitTwoI2Numer) / Number(valueCircuitTwoDenom);

  var ansvalueCircuitTwoI1 = Number(valueCircuitTwoI1) - Number(valueCircuitTwoI2);
  var ansvalueCircuitTwoI2 = Number(valueCircuitTwoI2);

  circuitTwoAns.innerHTML = "The value of $I_1$ is $" + (Math.round((ansvalueCircuitTwoI1 + Number.EPSILON) * 100) / 100) + "$ Amps. The value of $I_2$ is $" +
   (Math.round((ansvalueCircuitTwoI2 + Number.EPSILON) * 100) / 100) + "$ Amps. Both answers are to 2 d.p.";

  circuitTwoWorkedSolution.innerHTML = "$" + valueCircuitTwoE1 + " = (" + valueCircuitTwoR1 + " + " + valueCircuitTwoR3 + ") i_1 - " +
  valueCircuitTwoR3 + " i_2$ <br>$" + valueCircuitTwoE2 + "= -" + valueCircuitTwoR3 + "i_1 + (" + valueCircuitTwoR2 + "+" + valueCircuitTwoR3 + ") i_2$ <br>" +

"and $I_1 = i_1-i_2, I_2 = i_2$<br><br>" +

"Using Cramer's Rule to solve: <br>$ i_1 = \\dfrac{ \\begin{bmatrix} " + valueCircuitTwoE1 + " & -" + valueCircuitTwoR3 + "\\\\ -" + valueCircuitTwoE2  +
" & " + (Number(valueCircuitTwoR2) + Number(valueCircuitTwoR3)) + "\\" + "end{bmatrix}}" +
"{\\begin{bmatrix} " + (Number(valueCircuitTwoR1) + (Number(valueCircuitTwoR3))) + " & -" + valueCircuitTwoR3 + "\\\\ -" + valueCircuitTwoR3  +
" & -" + (Number(valueCircuitTwoR2) + Number(valueCircuitTwoR3)) + "\\" + "end{bmatrix}} = \\dfrac{" +valueCircuitTwoI1Numer + "}{" + valueCircuitTwoDenom + "} = " + valueCircuitTwoI1 +

"&emsp;&emsp;&emsp; i_2 = \\dfrac{ \\begin{bmatrix} " + (Number(valueCircuitTwoR1) + (Number(valueCircuitTwoR3))) + " &" + valueCircuitTwoE1 + "\\\\ -" + valueCircuitTwoR3  +
" & " + valueCircuitTwoE2 + "\\" + "end{bmatrix}}" +
"{\\begin{bmatrix} " + (Number(valueCircuitTwoR1) + (Number(valueCircuitTwoR3))) + " & -" + valueCircuitTwoR3 + "\\\\ -" + valueCircuitTwoR3  +
" & " + (Number(valueCircuitTwoR2) + Number(valueCircuitTwoR3)) + "\\" + "end{bmatrix}} = \\dfrac{" +valueCircuitTwoI2Numer + "}{" + valueCircuitTwoDenom + "} = " + valueCircuitTwoI2 + "$" +

"<br> $I_1 = " + Math.round((valueCircuitTwoI1 + Number.EPSILON) * 100) / 100 + " - " + Math.round((valueCircuitTwoI2 + Number.EPSILON) * 100) / 100 +
" = " + Math.round((ansvalueCircuitTwoI1 + Number.EPSILON) * 100) / 100 + "$  Amps <br> $I_2 = " + Math.round((ansvalueCircuitTwoI2 + Number.EPSILON) * 100) / 100 + "$ Amps";

  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}

circuitThreeCalculateButton.onclick = function() {
hideSolutions();
  circuitThreeWorkedSolutionButton.style.display = "block";
  circuitThreeAns.style.display = "block";
    document.location ='#circuitThreeAns';


  var valueCircuitThreeE1 = circuitThreeE1.value;
  var valueCircuitThreeR1 = circuitThreeR1.value;
  var valueCircuitThreeR2 = circuitThreeR2.value;
  var valueCircuitThreeR3 = circuitThreeR3.value;
  var valueCircuitThreeR4 = circuitThreeR4.value;
  var valueCircuitThreeR5 = circuitThreeR5.value;
  var zero = 0;

  var a1 =(Number(valueCircuitThreeR2) + (Number(valueCircuitThreeR4)));
var b1 = -(Number(valueCircuitThreeR4));
var c1 = valueCircuitThreeE1;

var d1 = -(Number(valueCircuitThreeR4));
var e1 = (Number(valueCircuitThreeR3) + Number(valueCircuitThreeR4) + Number(valueCircuitThreeR5));
var f1 = zero;

var g1 = -(Number(valueCircuitThreeR2));
var h1 = -(Number(valueCircuitThreeR3));
var i1 = zero;

var a2 =(Number(valueCircuitThreeR2) + (Number(valueCircuitThreeR4)));
var b2 = -(Number(valueCircuitThreeR4));
var c2 = -(Number(valueCircuitThreeR2));

var d2 = -(Number(valueCircuitThreeR4));
var e2 = (Number(valueCircuitThreeR3) + Number(valueCircuitThreeR4) + Number(valueCircuitThreeR5));
var f2 = -(Number(valueCircuitThreeR3));

var g2 = -(Number(valueCircuitThreeR2));
var h2 = -(Number(valueCircuitThreeR3));
var i2 = (Number(valueCircuitThreeR1) + Number(valueCircuitThreeR2) + Number(valueCircuitThreeR3));
//

determinantA3x3 = (Number(a1) * Number(e1) * Number(i1)) +
  (Number(b1) * Number(f1) * Number(g1)) +
  (Number(c1) * Number(d1) * Number(h1)) -
  (Number(g1) * Number(e1) * Number(c1)) -
  (Number(h1) * Number(f1) * Number(a1)) -
  (Number(i1) * Number(d1) * Number(b1));

  determinantB3x3 = (Number(a2) * Number(e2) * Number(i2)) +
    (Number(b2) * Number(f2) * Number(g2)) +
    (Number(c2) * Number(d2) * Number(h2)) -
    (Number(g2) * Number(e2) * Number(c2)) -
    (Number(h2) * Number(f2) * Number(a2)) -
    (Number(i2) * Number(d2) * Number(b2));


  var ansvalueCircuitThreeI1 = Number(determinantA3x3) / Number(determinantB3x3);

  circuitThreeAns.innerHTML = "The value of $I$ is $" + (Math.round((ansvalueCircuitThreeI1 + Number.EPSILON) * 100) / 100) + "$ Amps (2 d.p.)";

  circuitThreeWorkedSolution.innerHTML = "$" + valueCircuitThreeE1 + " = (" + valueCircuitThreeR2 + " + " + valueCircuitThreeR4 + ") i_1 - " +
  valueCircuitThreeR4 + " i_2 - " + valueCircuitThreeR2 + "i_3$<br>$0 = -" + valueCircuitThreeR1 + " i_1 + (" + valueCircuitThreeR3 + "+" + valueCircuitThreeR4 + "+" +
   valueCircuitThreeR5 + ") i_2 - " + valueCircuitThreeR3 + " i_3$ <br>$0 = -" + valueCircuitThreeR2 + " i_1 - " + valueCircuitThreeR3 + " i_2 + (" + valueCircuitThreeR1 + " + " +
   valueCircuitThreeR2 + " + " + valueCircuitThreeR3 +  ") i_3$ <br>" +

"In this scenario, $I$ will be equal to the value of $i_3$, so we will not calculate $i_1$ or $i_2$ <br>" +

"Using Cramer's Rule to solve: <br>$ i_3 = \\dfrac{" +
" \\begin{bmatrix} " + (Number(valueCircuitThreeR2) + (Number(valueCircuitThreeR4))) + " & -" + valueCircuitThreeR4 + " & " + valueCircuitThreeE1 +
"\\\\ -" + valueCircuitThreeR4  + " & " + (Number(valueCircuitThreeR3) + Number(valueCircuitThreeR4) + Number(valueCircuitThreeR5)) + "& " + zero +
 "\\\\ -" + valueCircuitThreeR2  + " & -" + valueCircuitThreeR3 + "& " + zero + "\\end{bmatrix}}" +

" {\\begin{bmatrix} " + (Number(valueCircuitThreeR2) + (Number(valueCircuitThreeR4))) + " & -" + valueCircuitThreeR4 + " & -" + valueCircuitThreeR2
+ "\\\\ -" + valueCircuitThreeR4  + " & " + (Number(valueCircuitThreeR3) + Number(valueCircuitThreeR4) + Number(valueCircuitThreeR5)) + "& -" + valueCircuitThreeR3
+ "\\\\ -" + valueCircuitThreeR2  + " & -" + valueCircuitThreeR3 + "& " +  (Number(valueCircuitThreeR1) + Number(valueCircuitThreeR2) + Number(valueCircuitThreeR3)) + "\\end{bmatrix}}" +
 " = \\dfrac{" + Number(determinantA3x3) + "}{" + Number(determinantB3x3) + "} = " + ansvalueCircuitThreeI1 + "$";

MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}
