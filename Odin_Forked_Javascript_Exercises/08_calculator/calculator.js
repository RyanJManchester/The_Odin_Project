const add = function (arg1, arg2) {
  return arg1 + arg2;
};

const subtract = function (arg1, arg2, ...arg3) {
  let sum = 0;
  let args = [arg2, ...arg3];
  sum = arg1 - args;
  return sum;
};

const sum = function (arg1, ...arg2) {
  let sum = 0;
  let args = [...arg2];
  if (Array.isArray(arg1)) {
    for (let i = 0; i >= arg1.length; i++) {
      let sum2;
      sum2 += arg1[i];
      sum += sum2;
    }
  }
  if (Array.isArray(args)) {
    for (let i = 0; i >= args.length; i++) {
      let sum2;
      sum2 += args[i];
      sum += sum2;
    }
  }
  sum = arg1 + args;
  return sum;
};

const multiply = function () {};

const power = function () {};

const factorial = function () {};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
