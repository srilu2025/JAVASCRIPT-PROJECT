/**Scenario:
========
You are given an array of student marks.
Consider only passed students (marks ≥ 50)
Add 5 bonus marks to each passed student
Calculate the total marks of passed students after bonus

const marks = [35, 60, 80, 45, 90, 50]; */

let marks=[35, 60, 80, 45, 90, 50];

const totalMarks=marks.filter(n=>n>=50).map(n=>n+5).reduce((acc,n)=>acc+n);
console.log("total marks of passed students are",totalMarks);

