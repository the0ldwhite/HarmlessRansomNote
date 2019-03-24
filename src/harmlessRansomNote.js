var harmlessRansomNote = function(noteText,magzineText){
    var noteZeroIndexArray = [];
    var noteWordArray = [];
    var magzineZeroIndexArray = [];
    var magzineWordArray = [];
    var indexOfnote0 = 0;
    var indexOfmagzine0 = 0;
    var magzineI=0;
    while(indexOfnote0<noteText.length){
        indexOfnote0=noteText.substring(indexOfnote0+1).indexOf(" ");
        if(indexOfnote0==-1){
            // break;
            indexOfnote0=noteText.length;
        }
        else{
            noteZeroIndexArray.push(indexOfnote0);

        }
    }
    noteWordArray[0]=noteText.substring(0,noteZeroIndexArray[0]+1);
    for (var iii=1; iii<=noteZeroIndexArray.length; iii++){
        noteWordArray[iii]=noteText.substring(noteZeroIndexArray[iii-1], noteZeroIndexArray[iii])
    }
    noteWordArray[noteZeroIndexArray.length+1]=noteText.substring(noteZeroIndexArray[noteZeroIndexArray.length-1]);
    
    while(indexOfmagzine0<magzineText.length){
        indexOfmagzine0=magzineText.substring(indexOfmagzine0+1).indexOf(" ");
        if(indexOfmagzine0==-1){
            // break;
            indexOfmagzine0=magzineText.length;
        }
        else{
            magzineZeroIndexArray.push(indexOfmagzine0);
        }
    }
    magzineWordArray[0]=magzineText.substring(0,magzineZeroIndexArray[0]+1);
    for (var iii=1; iii<=magzineZeroIndexArray.length; iii++){
        magzineWordArray[iii]=magzineText.substring(magzineZeroIndexArray[iii-1], magzineZeroIndexArray[iii])
    }
    magzineWordArray[magzineZeroIndexArray.length+1]=magzineText.substring(magzineZeroIndexArray[magzineZeroIndexArray.length-1]);

    for (var noteIndex = 0; noteIndex<noteText.length; noteIndex++){
        for(var check = 0; check<magzineWordArray.length; check++){
            if(noteWordArray[noteIndex]!==magzineWordArray[check])
                return false;
            else
                magzineWordArray.remove(check);
        }
    }
 
    return true;
    
}

harmlessRansomNote("a b c", "a b c d")