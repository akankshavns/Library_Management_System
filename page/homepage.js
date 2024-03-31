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
let addbooK = document.querySelector("#option");
let disappear = document.querySelector("body");
let appear = "none";
addbooK .addEventListener("click",()=>{
  if (appear==="none"){
    appear= "flex";
    document.querySelector(".dropdown").style.display="flex";
    
  }
  // if (appear==="flex"){
  //   appear= "none";
  //   document.querySelector(".dropdown").style.display="none";
  // }
  else{
    appear="none";
    document.querySelector(".dropdown").style.display="none";
  }
})

  