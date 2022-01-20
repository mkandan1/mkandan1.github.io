//Navbar styling

window.onscroll = scrollShowNav;
function scrollShowNav() {
	if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		//Logo on Navigation
		document.getElementById("nav").style.boxShadow = "0px 0px 15px 0px var(--user-card-bg)";
		document.getElementById("navbar-wrapper").style.padding = "10px";
    }
	else{
		//Logo on Navigation
		document.getElementById("nav").style.boxShadow = "0px 0px 0px 0px";
		document.getElementById("navbar-wrapper").style.paddingTop = "30px";
	}
	
}