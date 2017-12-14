function hideSidebarButtons(){
  sidebarButtons = document.getElementsByClassName('sidebarButton');
  for(i=0;i<sidebarButtons.length;i++){
    sidebarButtons[i].style.width = "0px";
    sidebarButtons[i].style.padding = "0px";
  }
}
function showSidebarButtons(){
  sidebarButtons = document.getElementsByClassName('sidebarButton');
  for(i=0;i<sidebarButtons.length;i++){
    sidebarButtons[i].style.width = "245px";
  }
}
