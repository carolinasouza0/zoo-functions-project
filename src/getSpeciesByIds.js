const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  let animal = [];
  if (ids.length === 0) {
    animal = [];
  } else {
    ids.forEach((id) => {
      animal.push(data.species.find((animals) => animals.id === id));
    });
  }
  return animal;
};
module.exports = getSpeciesByIds;
