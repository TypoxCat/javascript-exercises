const findTheOldest = function(array) {
    let name, age, birth, death, noDeathName;
    let maxAgeName, maxAge = 0, maxBirth = 0;
    let noDeathData = false;

    // condition if there is undefined death year
    array.forEach(element => {
        if (element.yearOfDeath == undefined){
            maxBirth = element.yearOfBirth;
            noDeathData = true;
            noDeathName = element.name;
            console.log(maxBirth);
        }
    });
    // main algorithm
    if (noDeathData){
        compareBirthYear();
        if (maxAgeName != noDeathName){
            compareAges();
        }
    } else {
        compareAges();
    }

    // functions
    function compareBirthYear(){
        array.forEach(element => {
            defineVariable(element.name, element.yearOfBirth, element.yearOfDeath);
            console.log(name, birth, death, age);
            if (birth <= maxBirth){
                newOldest(name, age, birth);
            }
            console.log(maxAgeName);
        });
    }

    function compareAges (){
        array.forEach(element => {
            defineVariable(element.name, element.yearOfBirth, element.yearOfDeath);
            // console.log(name, birth, death, age);
            if (age > maxAge){
                newOldest(name, age, birth);
            }
            // console.log(maxAgeName);
    });
    }

    function defineVariable(N, B, D){
        name = N;
        birth = B;
        death = D;
        age = death-birth;
    }

    function newOldest(n, a, b){
        maxAgeName = n;
        maxAge = a;
        maxBirth = b;
    }

    // to output
    const oldest = {
        name: maxAgeName
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
