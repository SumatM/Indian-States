let userdata = JSON.parse(localStorage.getItem("userData")) || [];
console.log(userdata);

let name = document.getElementById("cxname")
    
    name.textContent = userdata[0].name;