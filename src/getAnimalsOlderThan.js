const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => data.species.filter((animals) =>
  animals.name === animal)[0].residents.every((resident) => resident.age >= age);

module.exports = getAnimalsOlderThan;
