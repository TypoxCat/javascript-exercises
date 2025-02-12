const repeatString = function(string, num) {
    kata = "";
    if (num < 0){
        return "ERROR";
    }
    while (num > 0){
        kata = kata + string;
        num--;
    }
    return kata;
};

// Do not edit below this line
module.exports = repeatString;
