const sumAll = function(init, end) {
    let jumlah = 0;
    // init always smaller than end 
    if (end < init){
        let temp = init;
        init = end;
        end = temp;
    }
    // input MUST integer
    if (init < 0 || end < 0 || !Number.isInteger(init)|| !Number.isInteger(end)){
        return "ERROR";
    }

    for(i = init; i <= end; i++){
        jumlah += i;
    }
    return jumlah;
};

// Do not edit below this line
module.exports = sumAll;
