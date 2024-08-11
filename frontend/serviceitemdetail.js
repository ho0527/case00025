let page=localStorage.getItem(WEBLSNAME+"serviceitem")??1

function clearall(){
	document.getElementById("tab1").style.display="none"
	document.getElementById("tab2").style.display="none"
	document.getElementById("tab3").style.display="none"
	document.getElementById("tab4").style.display="none"
	document.getElementById("servicedetailbutton1").classList.remove("servicedetailbuttonactive")
	document.getElementById("servicedetailbutton2").classList.remove("servicedetailbuttonactive")
	document.getElementById("servicedetailbutton3").classList.remove("servicedetailbuttonactive")
	document.getElementById("servicedetailbutton4").classList.remove("servicedetailbuttonactive")
	document.getElementById("tab"+page).style.display="block"
	document.getElementById("servicedetailbutton"+page).classList.add("servicedetailbuttonactive")
}

document.querySelectorAll(".servicedetailbutton").forEach(function(event){
	event.onclick=function(){
		page=event.dataset.id
		localStorage.setItem(WEBLSNAME+"serviceitem",page)
		clearall()
	}
})


clearall()