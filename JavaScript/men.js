
let api = ("/json/men.json")
    let appData = []
   async function fetchdata(){
    try{
        let request = await fetch(api);
    // console.log(request)
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


  let divDisplay = document.getElementById("displayData")
  function display(data) {
    // divDisplay.textContent = null;
    data.forEach((ele,ind) =>{
    let card = document.createElement("div");
    let img = document.createElement("img");
    img.class = "change";
    img.src = ele.img;
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
    card.append(img,name,pricediv);
    divDisplay.append(card);
    })
    let tot  = document.getElementById("totalitems")
    tot.textContent = data.length;
  }

  let filter = document.getElementById("filter");
  // console.log(appData)
  filter.addEventListener("change",()=>{
    console.log(filter.value)
    if(filter.value=="LTH") {
       let lowest = appData.sort(function (a,b){
        return b-a
       })
        console.log(lowest)
        display(lowest);
    }
    
  })

