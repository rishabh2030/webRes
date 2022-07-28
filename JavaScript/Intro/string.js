                                        /**String**/
var str = "rishabh";

// string length method
// STR_NAME.length
console.log(str.length);

// slice length method
// slice string  give a subString
console.log (str.slice(3,5));

// subString
// the diff b/w slice and substring is smiler
// The difference is that start and end values less than 0 are treated as 0 in substring() 
console.log(str.substring(0)+" "+str.slice(0));

// replace
// this replace the string for the given string 
// ans return new string
// it repalce only first string which matches and replace it
// it is also case censative
var sentace = "This is Pro-Graming Pro-Graming Pro-Graming"
console.log(sentace.replace("Pro-Graming","programing"));
console.log(sentace.replace("PRO-GRAMING","rishabh"));
// to make it work with upper or lower case
// just use 
// /_Word_/i
// without qoutes
console.log(sentace.replace(/PRO-GRAMING/i,"rishabh"));
// to replace all Macthed string
// use /_word_/g
console.log(sentace.replace(/Pro-Graming/g,"programing"));

// toUpperCase and toLowerCase
var word = "Rishabh";
console.log(word.toLowerCase());
console.log(word.toUpperCase());

// concatination

var w1 = "Hel";
var w2 = "lo";
console.log(w1.concat(w2));
var v1_1 = "Rishabh";
var v1_2 = "Sharma";
// concatination with space
console.log(v1_1.concat(" ",v1_2));

// trim method
// this method will trim only bank space 

let text = '   Hello World      ';
console.log(text);
let trimmedText = text.trim();
console.log(trimmedText);

