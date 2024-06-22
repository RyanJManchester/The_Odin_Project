const repeatString = function(string,num) {
    if (num <0) {
        return "ERROR";
    }
    let finalString = "";
    for (let i = 0; i <= num -1; i++) {
        finalString += string;
    }
    return finalString;
    };

module.exports = repeatString;
