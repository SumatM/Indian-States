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

let firstimg = document.getElementById("firstimg");

firstimg.addEventListener("mouseover",()=>{
  firstimg.src = "https://imagescdn.aeo.in/img/app/product/2/285571-1205991.jpg?w=291&auto=format"
})
firstimg.addEventListener("mouseleave",()=>{
  console.log("h")
  firstimg.src = "https://imagescdn.aeo.in/img/app/product/2/285571-1205992.jpg?auto=format"
})

let secondimg = document.getElementById("secondimg");


secondimg.addEventListener("mouseover",()=>{
  secondimg.src = "https://imagescdn.aeo.in/img/app/product/5/554767-4564167.jpg?w=291&auto=format"
})
secondimg.addEventListener("mouseleave",()=>{
  secondimg.src = "https://imagescdn.aeo.in/img/app/product/5/554767-4564166.jpg?auto=format"
})

let thirdimg = document.getElementById("thirdimg");


thirdimg.addEventListener("mouseover",()=>{
  thirdimg.src = "https://imagescdn.aeo.in/img/app/product/3/316856-1469166.jpg?w=291&auto=format"
})
thirdimg.addEventListener("mouseleave",()=>{
  thirdimg.src = "https://imagescdn.aeo.in/img/app/product/3/316856-1469167.jpg?auto=format"
})

let fourthimg = document.getElementById("fourthimg");


fourthimg.addEventListener("mouseover",()=>{
  fourthimg.src = "https://imagescdn.aeo.in/img/app/product/3/338416-1583299.jpg?w=291&auto=format"
})
fourthimg.addEventListener("mouseleave",()=>{
  fourthimg.src = "https://imagescdn.aeo.in/img/app/product/3/338416-1583300.jpg?auto=format"
})


let fivthimg = document.getElementById("fivthimg");


fivthimg.addEventListener("mouseover",()=>{
  fivthimg.src = "https://imagescdn.aeo.in/img/app/product/5/548738-4452149.jpg?w=291&auto=format"
})
fivthimg.addEventListener("mouseleave",()=>{
  fivthimg.src = "https://imagescdn.aeo.in/img/app/product/5/548738-4452148.jpg?auto=format"
})


