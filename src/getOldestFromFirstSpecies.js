const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const idAnimal = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const sortedByAge = data.species.find((animal) =>
    idAnimal === animal.id).residents.sort((a, b) => b.age - a.age);
  return Object.values(sortedByAge[0]);
};

module.exports = getOldestFromFirstSpecies;
