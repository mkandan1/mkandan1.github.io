
 //Trigger button
 var btn_project = document.getElementById("projects_btn");

 // Get Popup
 var modal_project = document.getElementById("projects_popup");
 
 //Get close button
 var closeBtn_project = document.getElementsByClassName("close_btn")[0];
 
 //When user click the button, Popup will open
 btn_project.onclick = function() {
   modal_project.style.display = "block";
   }
 //When user click the close button (x), Popup will close
 closeBtn_project.onclick = function(){
   modal_project.style.display = "none";
 }
 
 window.onclick = function(event) {
     if (event.target == modal_project) {
       modal_project.style.display = "none";
     }
   }
