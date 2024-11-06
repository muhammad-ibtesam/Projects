var english = +prompt("What is your English subject score?");
var math = +prompt("What is your Math subject score?");
var sindhi = +prompt("What is your Sindhi subject score?");

var totalMarks = 300;
var obtainMarks = english + math + sindhi; 
var percentage = Math.round((obtainMarks / totalMarks) * 100);

var grade = "Fail";

if (percentage >= 90) grade = "A<sup>+</sup>";
else if (percentage >= 80 && percentage <= 90) grade = "B<sup>+</sup>";
else if (percentage >= 70 && percentage <= 80) grade = "C<sup>+</sup>";
else if (percentage >= 60 && percentage <= 70) grade = "D<sup>+</sup>";
// else grade = "Fail";

document.write(`
    <h1>Mark Sheet</h1>
    Total Marks: ${totalMarks} <br>
    Obtain Marks: ${obtainMarks} <br>
    Percentage: ${percentage} <br>
    Grade: ${grade}`
);
