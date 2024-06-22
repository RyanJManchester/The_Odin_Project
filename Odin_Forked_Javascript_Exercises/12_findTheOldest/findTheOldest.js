let date = new Date();
let thisYear = date.getFullYear();
console.log(thisYear);

let findTheOldest = (array) => {
  let answer = array.sort(function (a, b) {
    let aAge = a.yearOfDeath - a.yearOfBirth;
    let bAge = b.yearOfDeath - b.yearOfBirth;
    if (a.yearOfDeath == undefined) {
      aAge = thisYear - a.yearOfBirth;
    }
    if (b.yearOfDeath == undefined) {
      bAge = thisYear - b.yearOfBirth;
    }
    console.log(aAge, bAge);
    aAge <= bAge ? 1 : -1;
  });
  return answer;
};

let people = [
  {
    name: "Carly",
    yearOfBirth: 2018,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];
//module.exports = findTheOldest;
