
//getting login data 

let inputdata = document.getElementById("number")
    button = document.querySelector("button")

let userdata = JSON.parse(localStorage.getItem("userData")) || [];
let userKey = JSON.parse(localStorage.getItem("userKey")) || [];

button.addEventListener("click",(e) => {
   let number = document.getElementById("number").value
let password = document.getElementById("password").value;
    if(number!=="" && password!=="") {
        verification = userdata.forEach((ele,ind)=>{
            if(number==ele.number){
                    // console.log("num")
                if(password==ele.password){
                    // console.log("done")
                    //intervel
                    userKey[0]=("sr4d34")
                    localStorage.setItem("userKey",JSON.stringify(userKey))
                    let show1 = document.querySelector("#loginboxtop2>p");
                    show1.style.color="green"
                    show1.style.fontWeight = "700";
                    show1.innerText ="LOGIN SUCCESSFUL";
                    setTimeout(function(){
                    window.location.href = "/HTML/index.html"
                     },2000)

                } else {
                    // console.log("pas")
                    let show = document.querySelector("#loginboxtop2>p");
                        show.style.color="red"
                    show.innerText ="Invalid Password";
                    //intervel
                    setTimeout(function(){
                        window.location.href = "/HTML/login.html"
                    },2000)

                }
            } else if((password==ele.password || number!==ele.number)) {
                // console.log("pas2")
                show = document.querySelector("#loginboxtop2>p");
                    show.style.color="red"
                show.innerText ="Incorrect Username & Password";
                setTimeout(function(){
                    window.location.href = "/HTML/login.html"
                },2000)
                
            }
        })
        
    }else{
        let show = document.querySelector("#loginboxtop2>p");
       show.style.color="red"
       show.innerText ="Please Enter Your Mobile No. & Password";
        //intervel
       setTimeout(function(){
        window.location.href = "/HTML/login.html"
    },2000)
    }
})


let redirectbutton = document.getElementById("redirect")
redirectbutton.addEventListener("click",()=>{
  window.location.href = "/HTML/signup.html"
})