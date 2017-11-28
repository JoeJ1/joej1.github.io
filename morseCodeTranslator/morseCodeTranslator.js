function run(){
  var text = document.getElementById('textInput').value;
  var toggleButtonState = document.getElementById('toggleButton').innerHTML;
  var textArray = [];
  if(toggleButtonState == 'English to Morse'){ //If this is the case it must currently be translating english to morse.
    textArray = text.split('');
  }else{
    textArray = text.split(' ');
  }
  var outputArray = [];
  var morseTranslateArray = ['/','._','_...','_._.','_..','.','.._.','__.','....','..','.___','_._','._..','__','_.','___','.__.','__._','._.','...','_','.._','..._','.__','_.._','_.__','__..','_____','.____','..___','...__','...._','.....','_....','__...','___..','____.','._._._','__..__','..__..','.____.','_._.__'];
  var englishTranslateArray = [' ','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','6','7','8','9','.',',','?','\'','!'];
  for(i = 0;i<textArray.length; i++){
      try{
        if(toggleButtonState == 'English to Morse'){
          outputArray.push(morseTranslateArray[englishTranslateArray.indexOf(textArray[i].toString().toLowerCase())]);
        }else{
          outputArray.push(englishTranslateArray[morseTranslateArray.indexOf(textArray[i].toString().toLowerCase())]);
        }
      }
      catch(err){
        outputArray.push('');
      }
  }
  if(toggleButtonState == 'English to Morse'){
    document.getElementById('textOutput').innerHTML = outputArray.join(' ');
  }else{
    document.getElementById('textOutput').innerHTML = outputArray.join('');
  }
}

function toggleMode(){
  var toggleButton = document.getElementById('toggleButton');
  if(toggleButton.innerHTML == 'English to Morse'){
    toggleButton.innerHTML = 'Morse to English';
  }else{
    toggleButton.innerHTML = 'English to Morse';
  }
}
