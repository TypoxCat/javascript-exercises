const removeFromArray = function() {
    // store the main array
    let lengkap = arguments[0];
    const hapus = [];
    let i = 1;
    // check if there's any value to remove
    while (i < arguments.length){
        hapus[i-1] = arguments[i];
        let string = hapus[i-1];
        // check if the to be removed value is existing multiple times
        while(lengkap.indexOf(string) >= 0){
            let index = lengkap.indexOf(string);
            lengkap.splice(index, 1);
        }
        i++;
    };
    return lengkap;
};

// Do not edit below this line
module.exports = removeFromArray;
