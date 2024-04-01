/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//this is for book dropdown.
let addbooK = document.querySelector(".option");
let disappear = document.querySelector(".main");
let appear = "none";
addbooK .addEventListener("click",()=>{
  if (appear==="none"){
    appear= "flex";
    document.querySelector("#forbook").style.display="flex";
  }
 
  else{
    appear="none";
    document.querySelector("#forbook").style.display="none";
  }
})
disappear.addEventListener("click",()=>{
  if (appear==="flex"){
    appear = "none";
    document.querySelector("#forbook").style.display="none";
  }
 
 })

 //this dropdown is ,for magazine option.
 let Magazine = document.querySelector("#magazine");
 let nonVisible = document.querySelector(".main");
 let appears = "none";
Magazine.addEventListener("click",()=>{
  
  if (appears==="none"){
    appears= "flex";
    document.querySelector("#formagazine").style.display="flex";
    
  }
 
  else{
    appears="none";
    document.querySelector("#formagazine").style.display="none";
  }
})
disappear.addEventListener("click",()=>{
  if (appears==="flex"){
    appears = "none";
    document.querySelector("#formagazine").style.display="none";
  }
 
 })

 let Contact = document.querySelector("#contact");
 let abc = document.querySelector(".main");
 let Visible = "none";
Contact.addEventListener("click",()=>{
  
  if (appears==="none"){
    appears= "flex";
    document.querySelector("#forcontact").style.display="flex";
    
  }
 
  else{
    appears="none";
    document.querySelector("#forcontact").style.display="none";
  }
})

// abc.addEventListener("click",()=>{
//   if (appears==="flex"){
//     appears = "none";
//     document.querySelector("#forcontact").style.display="none";
//   }
// console.log("hello"); 
//  })


 
 

  