cartData = JSON.parse(localStorage.getItem("cart")) || [];
// console.log(cartData)
let address = JSON.parse(localStorage.getItem("address")) || [];
let userdata = JSON.parse(localStorage.getItem("userData")) || [];
let userKey = JSON.parse(localStorage.getItem("userKey")) || [];

let datashow = document.getElementById("siginornot");
let emptycart = document.getElementById("emptycart");
let show = document.getElementById("container");
    // console.log(show)

if(userKey[0] == "sr4d34") {
  if(cartData[0]==undefined){
    show.innerHTML = null;
  }else { 
    emptycart.innerHTML = null;

 let cartitemshow = document.getElementById("cartitemshow")

 function append(data){
     cartitemshow.innerHTML = null;
  data.forEach((ele,ind)=>{
    let card = document.createElement("div")
        card.setAttribute("class","cartCard")
        let div1 = document.createElement("div")
        let div2 = document.createElement("div")
        let img = document.createElement("img");
       img.src = ele.img;
   let title = document.createElement("h5");
        title.textContent = ele.name;
   let price = document.createElement("span");
        price.textContent ="₹"+ ele.discount;
   let discount = document.createElement("span");
        discount.textContent="₹"+ ele.price;
        discount.setAttribute("class","underlinediscount")
   let span = document.createElement("span");
    let totaldis = ((ele.price-ele.discount)/ele.price)*100
        span.textContent = totaldis.toFixed() +"%OFF";
        span.style.color="red"
   let p = document.createElement("p");
        p.textContent = "Color:White"
        //remove or increase the quantiy;
    let addbutton = document.createElement("button")
        addbutton.innerText = "+"
        addbutton.addEventListener("click",()=>{
            ele.number++;
            localStorage.setItem("cart",JSON.stringify(cartData))
            // console.log(cartData)
            append(cartData)
        })
        addbutton.setAttribute("class","size")
    let dec_button = document.createElement("button")
        dec_button.innerText = "-";
        dec_button.addEventListener("click",()=>{
            ele.number--;
            if(ele.number==0){
              data.splice(ind,1)
            //   console.log(data);
            append(data)
            }
            localStorage.setItem("cart",JSON.stringify(cartData))
            // console.log(cartData)
            append(cartData)
        })
        dec_button.setAttribute("class","size")
    let quantiy = document.createElement("span");
        quantiy.innerText = ele.number;
        quantiy.setAttribute("class","quantityshow")
        let div3 = document.createElement("div")
            div3.append(addbutton,quantiy,dec_button)
        div1.append(img)
        div1.append(title,price,discount,span,p,div3)
    card.append(div1,div2,div3)
    cartitemshow.append(card)
  })
  totalprice = 0;
totaldiscount = 0;
for (let i=0; i<cartData.length; i++) {
    totalprice+=cartData[i].price*cartData[i].number;
    totaldiscount+=cartData[i].discount*cartData[i].number;
}
//  console.log(totalvalue)
let showTotalValue = document.getElementById("totalValue");
showTotalValue.innerHTML = totaldiscount;
ordervalue = document.getElementById("orderValue");
ordervalue.innerText = totalprice
orderDiscount = document.getElementById("orderDiscount");
// console.log(totalprice,totaldiscount)
orderDiscount.innerText = totalprice-totaldiscount
Totalvalue = document.getElementById("total");
Totalvalue.innerText = totaldiscount;

 }

 append(cartData)


 let upibutton = document.getElementById("upibutton");

 upibutton.addEventListener("click",(e)=>{
    e.preventDefault()
    let input = document.getElementById("UPIid").value;
    if(input==""){
        // console.log("H")
        error = document.getElementById("error");
        error.style.color = "red"
        error.innerText = "PLEASE DON'T SUBMIT THE EMPTY INPUT"
    }else if(input.includes("@")){
        setTimeout(function(){
        show = document.getElementById("error");
        show.style.color = "green"
        show.innerText = "Congratulation You Have made a Payment of " +"₹"+totaldiscount;
        // localStorage.clear() 
        setTimeout(function(){
            let cartData = [];
            localStorage.setItem("cart",JSON.stringify(cartData))
             location.replace("/HTML/last.html");
        },2000)
         },2000)
         show = document.getElementById("error");
        show.style.color = "gray"
        show.innerText = "Verifying Payment..."
    }else{
        show = document.getElementById("error");
        show.style.color = "red"
        show.innerText = "PLEASE ENTER THE VALID UPI ID"
    }
    

 })
 // displaying address in cart 

shippingaddress =document.getElementById("shippingaddressappend")
if(address[0].verify=="adfjd"){
            // console.log("H")
            // console.log(address,"he")
            shippingaddress.innerHTML=null;
    address.forEach((ele,ind)=>{
        let name = document.createElement("h4");
        name.textContent = ele.name +" "+ ele.lastname;
        let address1 = document.createElement("p"); 
        address1.textContent = ele.address1 +"," + ele.landmark +","+ele.pincode;
        let mobile = document.createElement("p");
        mobile.textContent = "Mobile: "+ ele.number;
        mobile.setAttribute("id","mobile")
        let text = document.createElement("p");
            text.textContent = "Estimated delivery within 3 days"
            text.setAttribute("id","shippingtext")
        let button = document.createElement("button");
           button.innerText = "Add or Change";
           button.setAttribute("id","shippingbutton")
           shippingaddress.append(name,address1,mobile,text,button)
    })
}


}

} else{
    show = document.getElementById("container");
    show.innerHTML = null;
}

 address = JSON.parse(localStorage.getItem("address")) || [];

 userdata = JSON.parse(localStorage.getItem("userData")) || [];





  
 
