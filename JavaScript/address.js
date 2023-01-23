    let address = new Array(1)
         address = JSON.parse(localStorage.getItem("address")) || [];

let button = document.querySelector("button");
//  console.log(button)
button.addEventListener("click",(e)=>{
    e.preventDefault()
  let pincode = document.getElementById("pincode").value;
  let name = document.getElementById("name").value;
  let lastname = document.getElementById("lastname").value;
  let number = document.getElementById("number").value;
  let address1 = document.getElementById("address1").value;
  let landmark = document.getElementById("landmark").value;
  let city = document.getElementById("city").value;
  let state = document.getElementById("state").value;
//   console.log(pincode,name,lastname,number,address1,landmark,city,state)
 let obj = {
    verify:"adfjd",
    pincode:pincode,
    name:name,
    lastname:lastname,
    number:number,
    address1:address1,
    landmark:landmark,
    city:city,
    state:state,
 }
  address[0]=obj;
localStorage.setItem("address",JSON.stringify(address))
    window.location.href = "/HTML/cart.html"

})