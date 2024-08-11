const WEBLSNAME="case00025-"
const AJAXURL=""

document.querySelectorAll("base")[0].href="https://ho0527.github.io/case00025/"

document.getElementById("lineservice").onpointerover=function(){
	document.getElementById("lineimagehover").style.display="block"
	document.getElementById("lineimagenothover").style.display="none"
}

document.getElementById("lineservice").onpointerleave=function(){
	document.getElementById("lineimagehover").style.display="none"
	document.getElementById("lineimagenothover").style.display="block"
}

AOS.init()