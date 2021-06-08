//Trigger button
var btn = document.getElementById("contact_me_btn");

// Get Popup
var modal = document.getElementById("contact_me");

//Get close button
var closeBtn = document.getElementsByClassName("close")[0];

//When user click the button, Popup will open
btn.onclick = function() {
    modal.style.display = "block";
  }
//When user click the close button (x), Popup will close
closeBtn.onclick = function(){
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

 //Trigger button
var btn = document.getElementById("projects_btn");

// Get Popup
var modal = document.getElementById("projects_popup");

//Get close button
var closeBtn = document.getElementsByClassName("close_pro")[0];

//When user click the button, Popup will open
btn.onclick = function() {
    modal.style.display = "block";
  }
//When user click the close button (x), Popup will close
closeBtn.onclick = function(){
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  } 