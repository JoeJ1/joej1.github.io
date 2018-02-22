function hideSidebarButtons(){
  sidebarButtons = document.getElementsByClassName('sidebarButton');
  for(i=0;i<sidebarButtons.length;i++){
    sidebarButtons[i].style.padding = "0px";
	  sidebarButtons[i].style.left = "-250px";
  }
  document.getElementsByClassName('closeIcon')[0].style.left="-30px";
}
function showSidebarButtons(){
  sidebarButtons = document.getElementsByClassName('sidebarButton');
  for(i=0;i<sidebarButtons.length;i++){
	  sidebarButtons[i].style.left = "0px"
  }
  document.getElementsByClassName('closeIcon')[0].style.left="226px";
}

function showAbout(){
  about = document.getElementById('aboutContent');
  closeIcon = document.getElementsByClassName('closeIcon')[0];
  closeIcon.style.display= "block";
  about.style.opacity = "1";
  about.style.width = "100%";
}

function hideAbout(){
  about = document.getElementById('aboutContent');
  closeIcon = document.getElementsByClassName('closeIcon')[0];
  closeIcon.style.display= "none";
  about.style.opacity = "0";
  setTimeout(function(){about.style.width ="0";},300)
}
