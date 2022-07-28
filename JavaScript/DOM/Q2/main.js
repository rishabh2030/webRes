// 1-> selcet the ul
let list = document.querySelector("ul");
// 2-> select all li tags
let allListItems = document.querySelectorAll("li");
// 3 -> in this question 7 is missing 
        // first store the which in 7th postion is list
let eightEle = allListItems[6];
// 4 -> create new element which stores missing ele
let sevenEle = document.createElement("li");
sevenEle.innerText = '7';
// 5 -> use insertBefore method
list.insertBefore(sevenEle,eightEle);