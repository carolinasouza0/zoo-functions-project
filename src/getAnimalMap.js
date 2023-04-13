const data = require('../data/zoo_data');

const { species } = data;

const getAnimalMapByRegion = () => species.reduce((acc, { location, name }) => {
  if (!acc[location]) {
    acc[location] = [];
    acc[location].push(name);
  } else {
    acc[location].push(name);
  }
  return acc;
}, {});

const getAnimalMapByName = (obj) => species.reduce((acc, { location, residents, name }) => {
  let animal = residents;
  if (!acc[location]) acc[location] = [];
  if (obj.sex) animal = residents.filter(({ sex }) => sex === obj.sex);

  const animalName = animal.map((anim) => anim.name);

  if (obj.sorted) animalName.sort();

  acc[location].push({ [name]: animalName });

  return acc;
}, {});

const getAnimalMap = (options) => {
  if (!options || !options.includeNames) {
    return getAnimalMapByRegion();
  }
  return getAnimalMapByName(options);
};

module.exports = getAnimalMap;
