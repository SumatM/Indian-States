let userKey = JSON.parse(localStorage.getItem("userKey")) || [];
let userdata = JSON.parse(localStorage.getItem("userData")) || [];

let datashow = document.getElementById("siginornot");
console.log("Hello")
if(userKey[0] == "sr4d34") {
 span = document.createElement("a");
  
    datashow.style.color = "black"
    datashow.style.fontWeight="600"
    datashow.setAttribute("href","#")
    datashow.innerText=userdata[0].name;
    span = datashow;
}


console.log(span)