/**Find the index of the first occurrence of a substring (indexOf()). */

let str="javasacripti";

//j  a  v  a  s  c  r  i  p  t
//0  1  2  3  4  5  6  7  8  9

console.log("first occurrence of a substring.. ",str.indexOf('a'));

/**Find the index of the last occurrence of a substring (lastIndexOf()). */

    
console.log(" index of the last occurrence of a substring ",str.lastIndexOf('i'));

/**Check if a string contains a specific substring (includes()). */

console.log("string contains a specific substring..",str.includes("sacrip"));

/**Check if a string starts or ends with a given substring (startsWith(), endsWith()). */

console.log("string starts with given substring",str.startsWith("java"));

console.log("string ends with given substring ",str.endsWith("cripti"));

/*Search for a substring using a regular expression (search()) and returns Finds index of first match else -1 if not found*/

let str1="playwright";

console.log("substring is",str1.search("st"));//will get -1 "st" is not present

/**Match a pattern in a string using match() and returns Extracts matching text else null if no match */

console.log(str1.match(/z/g));// here z is not present we will get NULL.

console.log("******************String Modification & Extraction***********************");


/**Convert the string to uppercase or lowercase (toUpperCase(), toLowerCase()). */

let str2="welcome";
console.log("coverting to lowercase",str2.toLowerCase());
console.log("converting to uppercase",str2.toUpperCase());

/**Extract a substring using different methods (slice(), substring(), substr()-deprecated). */

console.log("checking the slice method",str2.slice(-4,-1));//will get output "com"
console.log("checking the substring",str2.substring(1,7));//will get "elco"

/**Remove extra spaces from the start or end (trim(), trimStart(), trimEnd()). */

let str3=" automation ";
console.log("using trim method",str3.trim());
console.log("using trimStart method",str3.trimStart());
console.log("using trimEnd method",str3.trimEnd());

/** Repeat a string multiple times (repeat()).*/
console.log("printing the string automation for 10 times..",str3.repeat(10));

/**Replace part of a string with another substring (replace(), replaceAll()). */
console.log("replacing the string",str3.replace("auto","manual"));//will display manualmation
console.log("using replaceAll() method",str3.replaceAll("a","s"));//will replace a by s

/**Split the string into an array based on a delimiter (split()). */
let str4="I@am$in!javascript*class";
console.log("splitting special charactes ",str4.split(/[@*$!]/).join(' '));

/**Pad a string with another string to reach a certain length (padStart(), padEnd()). */

let num="2";

console.log("padStart practice is..",num.padStart(9,"0"));
console.log("padEnd practice is",num.padEnd(3,"0"));

/**Concatenate two or more strings (concat()). */

let str5=str2+str3;

console.log("concatinating the str3 and str4",str5);//output should display "welcome automation"

/**Converts a number into a string representation (toString()). */

let num1=123;

let strng=num1.toString();

console.log("type of the strng is..",typeof strng);

/**Find the length of a given string using the length property. */

let strValue="welome JavaScript";

console.log("The length of strValue is...."+strValue.length);