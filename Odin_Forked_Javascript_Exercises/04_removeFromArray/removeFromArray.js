const removeFromArray = function(array,...values) {
let argArray = [...values];
let num;
for (let i = argArray.length; i > -1;i--) {
    num = array.indexOf(argArray[i]);
    if (num > -1) {
    array.splice(num,1);
    } else {
    continue;
    }}
return array;
}


module.exports = removeFromArray;




