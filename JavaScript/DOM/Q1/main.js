// ans
// // 1-> create a varibles which store the button
// let btn = document.querySelector("button");

// // 2-> add Event Listener
// btn.addEventListener("click",function(){
//     // 3 -> create a new div 
//     let divEle = document.createElement("div");
//     // 4 -> add html in divEle
//     divEle.innerHTML = "<h1>Rishabh</h1>"
//     // 5 -> get body and store it 
//     let bodyDiv = document.querySelector("body");
//     // 6-> append divEle in bodyDiv
//     bodyDiv.appendChild(divEle);
// })


// my code
let btn = document.querySelector("button");

btn.addEventListener("click",work);

function work (){
    let divEle = document.createElement("div");
    divEle.innerHTML = "<h1>Rishabh</h1>";
    let bodyEle = document.querySelector("body");
    bodyEle.appendChild(divEle);
}
