const sumAll = function(a,b) {
if (a <= 0 || b <= 0 ) {
    return "ERROR";
} else if
((typeof a != "number") || (typeof b != "number")) {
    return "ERROR";
} else {
let max = Math.max(a,b);
let min = Math.min(a,b);
let result= 0;
console.log(result);
for (let i = min; i <= max; i ++) {
result += i;
}
return result;
}};

module.exports = sumAll;


/* Implement a function that takes 2 integers
 and returns the sum of every number between
 (and including) them:*/