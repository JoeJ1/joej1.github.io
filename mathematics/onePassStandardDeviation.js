function onePass(){
  output = ""
  textInput = document.getElementsByClassName('textInput')[0].value;
  textInput = textInput.split(',');
  for(i=0;i<textInput.length;i++){
    if(!Number(textInput[i])){
      output = "Invalid Input";
      break;
    }
  }
  document.getElementsByClassName('textOutput')[0].innerHTML = output;
  if(output != "Invalid Input"){
    console.log("Input Valid")
    sigmaX = 0;
    sigmaX2 = 0;
    n = textInput.length;
    for(i=0;i<textInput.length;i++){
      sigmaX = sigmaX + Number(textInput[i]);
      sigmaX2 = sigmaX2 + (Number(textInput[i])*Number(textInput[i]))
    }
    console.log(sigmaX)
    console.log(sigmaX2)
    console.log(n)
    console.log()
    document.getElementsByClassName('textOutput')[0].innerHTML = Math.sqrt((sigmaX2 - sigmaX**2/n)/(n-1))
  }
}
