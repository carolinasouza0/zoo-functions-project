const data = require('../data/zoo_data');

const { species } = data;

const countAnimals = (animal = {}) => {
  let obj = {};
  if (animal.species && !animal.sex) {
    obj = species.find((ani) => ani.name === animal.species).residents.length;
  } else if (animal.species && animal.sex) {
    obj = species.find((anim) => anim.name === animal.species).residents.filter((resident) =>
      resident.sex === animal.sex).length;
  } else {
    species.forEach((specie) => {
      obj[specie.name] = specie.residents.length;
    });
  }
  return obj;
};
module.exports = countAnimals;
