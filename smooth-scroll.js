let nav = document.querySelector("#nav-bar");
window.onscroll = function() 
{
    if (document.documentElement.scrollTop > 20){
		nav.classList.add("scroll-on");
	} else if(document.documentElement.scrollTop < 20) {
		nav.classList.remove("scroll-on");
	}

}
