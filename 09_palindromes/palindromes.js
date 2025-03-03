const palindromes = function (text) {
    text = text.toLowerCase()
    .split('')
    .filter(item => ((item >= 'a' && item <= 'z') || (item >= '0' && item <= '9')));

    let reverse = text
    .reverse()
    .join('');

    let textOri = text
    .reverse()
    .join('');

    console.log(textOri);
    console.log(reverse);
    return textOri == reverse ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
