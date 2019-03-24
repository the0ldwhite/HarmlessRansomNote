var harmlessRansomNote2 = function harmlessRansomNote2(noteText, magzineText){
    var noteArray = [];
    var magzineArray = [];
    var counter=0;
    noteArray=noteText.split(" ");
    magzineArray=magzineText.split(" ")
    for (var ii=0; ii<noteArray.length; ii++){
        for (var iii=0; iii<magzineArray.length ;iii++){
            if(noteArray[ii]===magzineArray[iii]){
                magzineArray.splice(iii,1);
                counter++;
            }
        }
        
    }
    if(counter==noteArray.length)
        return true;
    return false;
}

console.log(harmlessRansomNote2("a b c", "a b c d"))