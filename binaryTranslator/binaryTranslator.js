var englishArray = [" ","!","&quot;","#","$","%","&amp;","&#x27;","(",")","*","+", ",","-",".","&#x2F;","0","1","2","3","4","5","6","7","8","9",":",";","&lt;","=","&gt;","?","@","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","[","\\","]","^","_","`","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","{","|","}","~"]

//Takes text as input and returns array of corresponding ascii values
function textToAscii(input){
  console.log('textToAscii function called')
  inputArray = input.split('')
  asciiArray = [];
  for(i = 0;i<inputArray.length;i++){
    asciiArray.push(englishArray.indexOf(inputArray[i].toString())+33)
  }
  console.log(asciiArray)
  return(asciiArray)
}

//Takes an array of numbers less than 256 and converts them to 8 Bit binary.
function asciiToBinary(inputArray){
  console.log('asciiToBinary function called')
  binaryArray = [];
  for(i=0;i<inputArray.length;i++){
    binaryArray.push([]);
    for(j=7;j>=0;j--){
      if(2**j<inputArray[i]){
        inputArray[i] = inputArray[i] - 2**j;
        binaryArray[i].push("1");
      }else{
        binaryArray[i].push("0");
      }
    }
    binaryArray[i] = binaryArray[i].join('');
  }
  return(binaryArray.join(''));
}

function binaryToAscii(input){ //input must be string of 8 bit binary
  inputArray = input.match(/.{1,8}/g);
  console.log(inputArray)
  outputArray = [];
  for(i = 0;i<inputArray.length;i++){
    inputArray[i] = inputArray[i].split('');
    currentVal = 0;
    var j = 7;
    for(j = 0;j<=7;j++){
      if(inputArray[i][j] == "1"){
        currentVal = currentVal + 2**(7-j);
        console.log(2**j)
      }
    }
    outputArray.push(currentVal);
  }
  return(outputArray)
}

function asciiToText(inputArray){
  console.log('asciiToText function called')
  console.log(inputArray)
  outputArray = []
  for(i = 0;i<inputArray.length;i++){
    outputArray.push(englishArray[inputArray[i]-32])
  }
  return(outputArray.join(''))
}

function toggleMode(){
  console.log('toggleMode function called')
  var toggleButton = document.getElementById('toggleButton');
  if(toggleButton.innerHTML == 'English to Binary'){
    toggleButton.innerHTML = 'Binary to English';
  }else{
    toggleButton.innerHTML = 'English to Binary';
  }
}

function run(){
  console.log('run function called')
  if(document.getElementById('toggleButton').innerHTML == "English to Binary"){
    document.getElementById('textOutput').innerHTML = asciiToBinary(textToAscii(document.getElementById('textInput').value));
  }else{
    document.getElementById('textOutput').innerHTML = asciiToText(binaryToAscii(document.getElementById('textInput').value));
  }
}
