
//getting login data 

 let inputdata = document.getElementById("number")

 button = document.querySelector("button")
 
 let userdata = JSON.parse(localStorage.getItem("userData")) || [];
 let userKey = JSON.parse(localStorage.getItem("userKey")) || [];
 button.addEventListener("click",() => {
    let name = document.getElementById("name").value
 let number = document.getElementById("number").value;
 let password = document.getElementById("password").value;
    if(name!="" && number!="" & password!="") {
        if(password.length>=8) {
         let obj={
            name:name,
            number:number,
            password:password,
         }
         userKey.push("sr4d34")
         userdata.push(obj);
         localStorage.setItem("userData",JSON.stringify(userdata))
         localStorage.setItem("userKey",JSON.stringify(userKey))
         window.location.href = "/HTML/index.html";
        }else {
        let show = document.querySelector("#loginboxtop2>p");
        show.style.color="red"
        show.innerText ="Please Enter Password Of Minimum 8 Character"
        }
    }
 })