const data = require('../data/zoo_data');

const getEmployee = (obj) => {
  const employee = data.employees.find((worker) => worker.firstName === obj.name
      || worker.lastName === obj.name
      || worker.id === obj.id);

  if (!employee) {
    throw new Error('Informações inválidas');
  }
  return employee;
};

const getSpecies = (employee) => {
  const animals = [];
  const employeeResponsible = getEmployee(employee).responsibleFor;
  data.species.forEach((species) => {
    if (employeeResponsible.includes(species.id)) {
      animals.push(species.name);
    }
  });
  return animals;
};

const getLocation = (employee) => {
  const location = [];
  const animals = getSpecies(employee);
  data.species.forEach((species) => {
    if (animals.includes(species.name)) {
      location.push(species.location);
    }
  });
  return location;
};
// REVER ESSAS FUNÇÕES

// const getEmployeesCoverageNoInfo = () => data.employees.forEach((person) => {
//   const { id } = person;
//   const fullName = `${person.firstName} ${person.lastName}`;
//   const species = getSpecies(person);
//   const locations = getLocation(person);
//   return {
//     id,
//     fullName,
//     species,
//     locations,
//   };
// });

// console.log(getEmployeesCoverageNoInfo());

// const getEmployeesCoverage = (employeeInfo) => {
//   let objReturned = {};
//   if (!employeeInfo) {
//     objReturned = getEmployeesCoverageNoInfo();
//   } else {
//   id = getEmployee(employeeInfo).id;
//   fullName = `${getEmployee(employeeInfo).firstName} ${getEmployee(employeeInfo).lastName}`;
//   species = getSpecies(employeeInfo);
//   locations = getLocation(employeeInfo);
//   return objReturned;
//   }
// }

// console.log(getEmployeesCoverage());
module.exports = getEmployeesCoverage;
