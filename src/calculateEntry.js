const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const obj = {
    child: entrants.filter((person) => person.age < 18).length,
    adult: entrants.filter((person) => person.age >= 18 && person.age < 50).length,
    senior: entrants.filter((person) => person.age >= 50).length,
  };
  return obj;
};
const calculateEntry = (entrants) => {
  let sum = 0;
  if (entrants) {
    const { child, adult, senior } = countEntrants(entrants);
    sum = (child * 20.99) + (adult * 49.99) + (senior * 24.99);
  } else {
    sum = 0;
  }
  return sum;
};

module.exports = { calculateEntry, countEntrants };
