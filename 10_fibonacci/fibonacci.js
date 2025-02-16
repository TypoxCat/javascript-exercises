const fibonacci = function(num) {
    num = Number(num);
    if (num < 0){
        return "OOPS";
    }
    let sum = [0, 1];
    for (i = 0; i <= num; i++){
        if (i == num){
            return sum[i];
        }
        sum[i+2] = sum[i] + sum[i+1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
