const reverseString = function(str) {
    //NO PRESSURE! ALL I HAVE TO DO IS REVERSE THE INPUT!
    if (str === '') {
        return '';
    } else {
    let reverse = "";
    for (let i = str.length -1; i >= 0; i--) {
        console.log(i);
        reverse += str.charAt(i);
        console.log(reverse);
    };
    return reverse;
    }
};

module.exports = reverseString;
