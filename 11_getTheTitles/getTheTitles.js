const getTheTitles = function(array) {
    newArray = [];
    array.forEach((element) => {
        newArray.push(element.title);
    })
    return newArray;
};

// Do not edit below this line
module.exports = getTheTitles;
