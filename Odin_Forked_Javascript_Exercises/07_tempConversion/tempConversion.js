const ftoc = function(num) {
//farenheit to celcius
let celcius = ((num-32) * (5/9));
return (Math.round(celcius * 10)/10);
};

const ctof = function(num) {
//celcius to farenheit
let farenheit = (num * (9/5)) + 32;
return (Math.round(farenheit * 10)/10);
};

module.exports = {
  ftoc,
  ctof
};
