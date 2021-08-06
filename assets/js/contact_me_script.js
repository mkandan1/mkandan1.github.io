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