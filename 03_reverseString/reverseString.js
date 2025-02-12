const reverseString = function(kata) {
    // Input string to array and reverse the index
    const arrayKata = [];
    const lengthKata = kata.length;
    let letter = 0;
    for (i = lengthKata-1; i >= 0; i--){
        arrayKata[i] = kata.substr(letter, 1);
        letter++;
    }
    return arrayKata.join("");
};

// Do not edit below this line
module.exports = reverseString;
