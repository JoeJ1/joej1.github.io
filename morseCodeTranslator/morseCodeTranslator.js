      function run(){
        var text = "";
        text = document.getElementById('textInput').value;
        var textArray = [];
        textArray = text.split('');
        var morseArray = [];
        for(i = 0;i<textArray.length; i++){
          if(textArray[i] == ' '){
            morseArray.push('/');
          }else if(textArray[i].toLowerCase() == "a"){
            morseArray.push('._');
          }else if(textArray[i].toLowerCase() == "b"){
            morseArray.push('_...');
          }else if(textArray[i].toLowerCase() == "c"){
            morseArray.push('_._.');
          }else if(textArray[i].toLowerCase() == "d"){
            morseArray.push('_..');
          }else if(textArray[i].toLowerCase() == "e"){
            morseArray.push('.');
          }else if(textArray[i].toLowerCase() == "f"){
            morseArray.push('.._.');
          }else if(textArray[i].toLowerCase() == "g"){
            morseArray.push('__.');
          }else if(textArray[i].toLowerCase() == "h"){
            morseArray.push('....');
          }else if(textArray[i].toLowerCase() == "i"){
            morseArray.push('..');
          }else if(textArray[i].toLowerCase() == "j"){
            morseArray.push('.___');
          }else if(textArray[i].toLowerCase() == "k"){
            morseArray.push('_._');
          }else if(textArray[i].toLowerCase() == "l"){
            morseArray.push('._..');
          }else if(textArray[i].toLowerCase() == "m"){
            morseArray.push('__');
          }else if(textArray[i].toLowerCase() == "n"){
            morseArray.push('_.');
          }else if(textArray[i].toLowerCase() == "o"){
            morseArray.push('___');
          }else if(textArray[i].toLowerCase() == "p"){
            morseArray.push('.__.');
          }else if(textArray[i].toLowerCase() == "q"){
            morseArray.push('__._');
          }else if(textArray[i].toLowerCase() == "r"){
            morseArray.push('._.');
          }else if(textArray[i].toLowerCase() == "s"){
            morseArray.push('...');
          }else if(textArray[i].toLowerCase() == "t"){
            morseArray.push('_');
          }else if(textArray[i].toLowerCase() == "u"){
            morseArray.push('.._');
          }else if(textArray[i].toLowerCase() == "v"){
            morseArray.push('..._');
          }else if(textArray[i].toLowerCase() == "w"){
            morseArray.push('.__');
          }else if(textArray[i].toLowerCase() == "x"){
            morseArray.push('_.._');
          }else if(textArray[i].toLowerCase() == "y"){
            morseArray.push('_.__');
          }else if(textArray[i].toLowerCase() == "z"){
            morseArray.push('__..');
          }else if(textArray[i].toLowerCase() == "0"){
            morseArray.push('_____');
          }else if(textArray[i].toLowerCase() == "1"){
            morseArray.push('.____');
          }else if(textArray[i].toLowerCase() == "2"){
            morseArray.push('..___');
          }else if(textArray[i].toLowerCase() == "3"){
            morseArray.push('...__');
          }else if(textArray[i].toLowerCase() == "4"){
            morseArray.push('...._');
          }else if(textArray[i].toLowerCase() == "5"){
            morseArray.push('.....');
          }else if(textArray[i].toLowerCase() == "6"){
            morseArray.push('_....');
          }else if(textArray[i].toLowerCase() == "7"){
            morseArray.push('__...');
          }else if(textArray[i].toLowerCase() == "8"){
            morseArray.push('___..');
          }else if(textArray[i].toLowerCase() == "9"){
            morseArray.push('____.');
          }else if(textArray[i].toLowerCase() == "."){
            morseArray.push('._._._')
          }else if(textArray[i].toLowerCase() == ","){
            morseArray.push('__..__')
          }else if(textArray[i].toLowerCase() == "?"){
            morseArray.push('..__..')  
          }else if(textArray[i].toLowerCase() == "\'"){
            morseArray.push('.____.')
          }else if(textArray[i].toLowerCase() == "!"){
            morseArray.push('_._.__')
          }else{
            morseArray.push('!');
          }
        }
        document.getElementById('textOutput').innerHTML = morseArray.join(' ');
      }
