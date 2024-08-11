document.querySelectorAll(".serviceitem").forEach(function(event){
	event.onclick=function(){
		localStorage.setItem(WEBLSNAME+"serviceitem",event.dataset.id)
		location.href="frontend/serviceitemdetail.html"
	}
})