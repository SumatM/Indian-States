
let api = ("/json/women.json")
let appData = []
async function fetchdata(){
try{
    let request = await fetch(api);
let data =  await request.json();
console.log(data);
appData[0]=data;
display(data);
}
catch(error){
    console.log(error)
}
}
fetchdata()

// backside image data to chage over the hover
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let tot  = document.getElementById("totalitems")
let mostview = JSON.parse(localStorage.getItem("popular")) || [];
let popular = 0; 
let userKey = JSON.parse(localStorage.getItem("userKey")) || [];
let userdata = JSON.parse(localStorage.getItem("userData")) || [];
let cartData = JSON.parse(localStorage.getItem("cart")) || [];


let divDisplay = document.getElementById("displayData")
let datappend = document.getElementById("showdata");
function display(data) {
divDisplay.innerHTML = null;
datappend.innerHTML = null;
data.forEach((ele,ind) =>{
let card = document.createElement("div");
card.setAttribute("class","card")
let img = document.createElement("img");
img.setAttribute("class","change")
img.src = ele.img;
addtocart = document.createElement("img")
addtocart.src = "https://images.emojiterra.com/google/android-10/512px/2795.png"
addtocart.setAttribute("class","plussign")
 // add to card function 
  addtocart.addEventListener("click",()=>{
    // cartorder = data.filter((e,i)=>{
    //   return i==ind
    // })
    if(userKey[0] == "sr4d34") {
      // is user is logined in or not
      if(check(ele) ){
        alert("Item Is Already Present In Cart")
      }else{
       cart.push({...ele,number:1})
     localStorage.setItem("cart",JSON.stringify(cart))
      }
    } else{
         // show error in nofify
  datashow.innerText = "Login First";
  datashow.style.color = "white"
  datashow.setAttribute("href","/HTML/login.html")
  datashow.style.backgroundColor = "red"
  datashow.style.padding = "5px"
    datashow.style.fontWeight="700"
    }

     
    
    // console.log(cart)

           
if(userKey[0] == "sr4d34") {
  span = document.createElement("a");
     datashow.style.color = "black"
     datashow.style.fontWeight="600"
     datashow.setAttribute("href","#")
     datashow.innerText=userdata[0].name;
     span = datashow;
 
 //to change the data when every time i added to cart 
     let totalitems = document.getElementById("cart_items")
     let items = document.getElementById("cart");
 cartData = JSON.parse(localStorage.getItem("cart")) || [];
 console.log(cartData)
   if(cartData!==""){
     items.style.backgroundColor = "black";
     items.style.color = "white";
    items.innerHTML = "Checkout";
    totalitems.innerText = cartData.length;
   }
 }
 


})
img.addEventListener("click",()=>{
  popular++;
  let popularity = {
    id:ele.id,
    popular:popular,
    gender:ele.gender,
  }
  mostview.push(popularity)
  localStorage.setItem("popular",JSON.stringify(mostview))
  // console.log(popularData);
})
img.addEventListener("mouseover",()=>{
  img.src = ele.bimg
})
img.addEventListener("mouseleave",()=>{
  img.src = ele.img;
})
let name = document.createElement("h5");
name.textContent = ele.name;
pricediv = document.createElement("div")
pricediv.setAttribute("class","gray")
let price = document.createElement
("span");
price.textContent = "₹"+ele.price+" ";
price.setAttribute("class","underline")
let discount = document.createElement("span");
discount.textContent=  "₹ "+ele.discount;
pricediv.append(price,discount)
discount.setAttribute("class","red")
card.append(img,addtocart ,name,pricediv);
if(ind<3) {
  divDisplay.append(card);
} else {
  datappend.append(card);
}

})
tot.textContent = data.length;
}

let filter = document.getElementById("filter");
// console.log(appData)
filter.addEventListener("change",()=>{
console.log(filter.value)
if(filter.value=="discount") {
  let discountItems = appData[0].filter((ele)=> {
    let value =  (ele.price-ele.discount)
     discount =   (ele.price-value)/100
      if(discount.toFixed()>=20) {
        // console.log(discount)
        return ele;
      }
  })
  display(discountItems)
}else if(filter.value=='LTH') {
  let lowest = appData[0].sort(function(a,b){
    return a.discount-b.discount
  })
  // console.log(lowest)
  display(lowest);
}else if(filter.value=='higest') {
  let lowest = appData[0].sort(function(a,b){
    return b.discount-a.discount
  })
//   console.log(lowest)
  display(lowest);
}else if(filter.value=='popular') {
    if(cart[0]===undefined){
        let img = document.createElement("img")
        img.src="https://www.freeiconspng.com/thumbs/error-icon/round-error-icon-16.jpg"
        datappend.innerHTML = null;
         divDisplay.innerHTML = null;
         divDisplay.textContent = "Sorry! May be you are the 1st user" 
         divDisplay.append(img)
    }else{
    let popular = cart.filter((ele,ind) =>{
            return ele.gender=="women"
    })
    display(popular)
    }
   
}else if(filter.value=="mostviewed"){
  let arr = []
let view = appData[0].filter((ele,ind)=>{
    for (let i=0; i<mostview.length; i++) {
      //  console.log(ele.id==cart[i].id)
      if(ele.id==mostview[i].id){
        // console.log(ele);
         arr.push({...ele,popular:mostview[i].popular});
         continue;
      }
    }
})
// console.log(mostview)
let idsort = [...arr]
let array = [];
idsort.sort(function(a,b)
{return a.id-b.id})
// console.log(idsort);
let j=0;
for (let i=0; i<idsort.length-1; i++){
   if(idsort[i].id!=idsort[i+1].id) {
    idsort[j]=idsort[i];
        j++;
   }
   idsort[j]=idsort[idsort.length-1];
   }
   for (let k=0;k<=j; k++) {
    array.push(idsort[k])
} // sort the array as per click per element 
    array.sort(function(a,b)
    {return b.popular-a.popular})

        console.log(array)
        display(array)
    } 

})



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
    items.style.backgroundColor = "black";
    items.style.color = "white";
   items.innerHTML = "Checkout";
   totalitems.innerText = cartData.length;
  }

}


function check(ele) {
  for (let i=0; i<cartData.length; i++) {
    if(ele.id==cartData[i].id){
      return true;
    }
  } return false;
}

