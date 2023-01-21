let userKey = JSON.parse(localStorage.getItem("userKey")) || [];
let userdata = JSON.parse(localStorage.getItem("userData")) || [];
let cartData = JSON.parse(localStorage.getItem("cart")) || [];
  console.log(userKey);
let datashow = document.getElementById("siginornot");
if(userKey[0] == "sr4d34") {
 span = document.createElement("a");
    datashow.style.color = "black"
    datashow.style.fontWeight="600"
    datashow.setAttribute("href","#")
    datashow.innerText=userdata[0].name;
    span = datashow;
  
    datashow.addEventListener("mouseover",()=>{
      datashow.innerText = "SignOut"
    })
    datashow.addEventListener("click",()=>{
      userKey[0]="qerfeudf"
      localStorage.setItem("userKey",JSON.stringify(userKey))
      window.location.href = "/HTML/login.html";
    })
    datashow.addEventListener("mouseleave", ()=>{
      datashow.innerText=userdata[0].name;
      // console.log("Hello")
    })

//cart name change 
    let totalitems = document.getElementById("cart_items")
    let items = document.getElementById("cart");
cartData = JSON.parse(localStorage.getItem("cart")) || [];
console.log(cartData)
  if(cartData[0]!==undefined){
    // console.log("Hello")
    items.style.backgroundColor = "black";
    items.style.color = "white";
   items.innerHTML = "Checkout";
   totalitems.innerText = cartData.length;
  }

}


