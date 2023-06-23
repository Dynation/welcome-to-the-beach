

  
function showMore() {
    var x = document.getElementById("show-more");
    if (navigator.userActivation.isActive) {
         x.onclick.window.navigator.vibrate(500);
     }
    
   
    if (x.style.display === "none") {
      return x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };