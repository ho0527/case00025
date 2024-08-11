const WEBLSNAME="case00025-"
const AJAXURL=""

document.getElementById("lineservice").onpointerover=function(){
	document.getElementById("lineimagehover").style.display="block"
	document.getElementById("lineimagenothover").style.display="none"
}

document.getElementById("lineservice").onpointerleave=function(){
	document.getElementById("lineimagehover").style.display="none"
	document.getElementById("lineimagenothover").style.display="block"
}

AOS.init()