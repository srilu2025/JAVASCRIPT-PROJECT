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

console.log("substring is",str1.search("st"));