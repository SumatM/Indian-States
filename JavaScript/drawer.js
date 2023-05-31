// drawer for mid and small screen 

let drawerContainer = document.getElementById('drawer-container')
let drawer = document.getElementById('drawer')

drawerContainer.addEventListener('click',()=>{
    // console.log(drawer.getAttribute('class'))
     if(drawer.getAttribute('class')==='draweropen'){
      drawer.setAttribute('class','drawerclose')
     }else{
      drawer.setAttribute('class','draweropen')
     }
    
   })