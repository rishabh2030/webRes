// 
// alert("rishabh");

var heading = document.querySelector("h1");
// https://www.w3schools.com/jsrEF/met_win_alert.asp

if(window.confirm("18+"))
{
    heading.innerHTML = "enjoy"
    console.log("enjoy")
}
else{
    heading.innerHTML = "grow-up"
    console.log("grow-up");
}