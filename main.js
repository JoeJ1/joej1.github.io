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
  document.getElementsByClassName('closeIcon')[0].style.left="212px";
}
