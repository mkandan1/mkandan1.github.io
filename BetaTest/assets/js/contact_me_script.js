 /*//Trigger button
 var btn_contact_me = document.getElementById("contact_me_btn");

 // Get Popup
 var modal_contact_me = document.getElementsByClassName("contact_popup")[0];
 
 //Get close button
 var closeBtn_contact_me = document.getElementsByClassName("close")[0];
 
 //When user click the button, Popup will open
 btn_contact_me.onclick = function() {
   modal_contact_me.style.display = "block";
   }
 //When user click the close button (x), Popup will close
 closeBtn_contact_me.onclick = function(){
   modal_contact_me.style.display = "none";
 }
 
 window.onclick = function(event) {
     if (event.target == modal_contact_me) {
       modal_contact_me.style.display = "none";
     }
   } */

   //Button
   var contactMeBtn = document.getElementById("contact_me_btn");

   //Contact Popup
   var contactMeModal = document.getElementById("contact_me_popup");
   
   //Popup close button
   var contactMeCloseBtn = document.getElementsByClassName("contact_me_popup_close_btn")[0];

   //Show contact me popup
   contactMeBtn.onclick = function() {
     contactMeModal.style.display = "block";
   }
   contactMeCloseBtn.onclick = function() {
     contactMeModal.style.display = "none";
   }

   window.onclick = function(event) {
     if (event.target == contactMeModal) {
       contactMeModal.style.display = "none";
     }
   }