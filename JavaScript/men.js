
let api = ("/json/men.json")
    let appData = []
   async function fetchdata(){
    try{
        let request = await fetch(api);
    let data =  await request.json();
    // console.log(data);
    appData[0]=data;
    display(data);
    }
    catch(error){
        console.log(error)
    }
  }
  fetchdata()

  // backside image data to chage over the hover


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
     let cart = JSON.parse(localStorage.getItem("cart")) || [];
      addtocart.addEventListener("click",()=>{
        cartorder = data.filter((e,i)=>{
          return i==ind
        })
        cart.push(cartorder[0])
        localStorage.setItem("cart",JSON.stringify(cart))
        console.log(cart)
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
    let tot  = document.getElementById("totalitems")
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
          if(discount.toFixed()>=24) {
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
      console.log(lowest)
      display(lowest);
    }
    
  })

