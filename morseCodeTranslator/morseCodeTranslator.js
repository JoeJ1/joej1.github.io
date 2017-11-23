      function run(){
        var text = "";
        text = document.getElementById('textInput').value;
        var textArray = [];
        textArray = text.split('');
        var morseArray = [];
        var morseTranslateArray = ['/','._','_...','_._.','_..','.','.._.','__.','....','..','.___','_._','._..','__','_.','___','.__.','__._','._.','...','_','.._','..._','.__','_.._','_.__','__..','_____','.____','..___','...__','...._','.....','_....','__...','___..','____.','._._._','__..__','..__..','.____.','_._.__'];
        var englishTranslateArray = [' ','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','6','7','8','9','.',',','?','\'','!'];
        for(i = 0;i<textArray.length; i++){
            try{
                  morseArray.push(morseTranslateArray[englishTranslateArray.indexOf(textArray.toString())])
            }catch(err){
                  morseArray.push('!')
            }
        }
        document.getElementById('textOutput').innerHTML = morseArray.join(' ');
      }
