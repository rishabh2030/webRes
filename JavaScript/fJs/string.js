var str = "furqan";
console.log(str.length);

// console.log(str.slice(-1,4));
console.log(str.slice(2,-1));
console.log(str.substring(-1,4));

var def1 = "Rishabh is simp";

console.log(def1.replace(/rishabh/i,"furqan"));
console.log(def1);
var def = "rishabh is simp rishabh is simp rishabh is simp"
console.log(def.replace(/rishabh/g,"furqan"));
var xyz = "furQan";
console.log (xyz.toLowerCase());
console.log(xyz.toUpperCase());
// console.log(xyz);

var l1 = "furqan";
var l2 = "Khushi";
console.log(l1.concat("",l2));
var frinds = "  rishabh  vivek  furqan  dewang   ishaan  prashant  harshal   ";
console.log(frinds);
console.log(frinds.trim());
