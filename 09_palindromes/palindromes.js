const palindromes = function (text) {
    text = text.toLowerCase();
    let text2 = "";
    let panjang = text.length;
    let bool = "";

    // only store letter and number
    for (i = 0; i < panjang; i++){
        charOfLetter = text.charCodeAt(i);
        if ((charOfLetter > 96 && charOfLetter < 123) || (charOfLetter > 47 && charOfLetter < 58)){
            console.log(text[i]);
            text2 = text2.concat(text[i]);
        }
    }

    panjang = text2.length;
    // exclude middle char for odd lengthed text
    if (panjang % 2 == 0){
        let tengah = panjang/2;
    } let tengah = (panjang-1)/2;

    for (i = 0; i < tengah; i++){
        rightLetterIndex = panjang-1-i;
        if(text2[i] == text2[rightLetterIndex]){
            continue;
        } else {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
