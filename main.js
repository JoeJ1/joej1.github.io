function hideSidebarButtons(){
  sidebarButtons = document.getElementsByClassName('sidebarButton');
  for(i=0;i<sidebarButtons.length;i++){
    sidebarButtons[i].style.padding = "0px";
	  sidebarButtons[i].style.left = "-250px"
  }
}
function showSidebarButtons(){
  sidebarButtons = document.getElementsByClassName('sidebarButton');
  for(i=0;i<sidebarButtons.length;i++){
	  sidebarButtons[i].style.left = "0px"
  }
}

