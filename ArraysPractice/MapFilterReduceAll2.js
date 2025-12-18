/***Scenario:
========
You are given an array of monthly salaries.
Consider only salaries above 20,000
Apply 10% tax deduction to those salaries
Calculate the total tax amount collected

const salaries = [15000, 22000, 30000, 18000, 25000]; */

const salaries = [15000, 22000, 30000, 18000, 25000];

const totalTaxAmount=salaries.filter(n=>n>20000).map(n=>n*0.10).reduce((acc,val)=>(acc+val));
console.log("total tax amount collected is",totalTaxAmount);