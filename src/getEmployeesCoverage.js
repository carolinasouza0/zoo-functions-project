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

const getEmployeesCoverage = (employeeInfo) => {
//   let objReturned = {};
//   if (!employeeInfo) {
//     data.employees.map((person) => {
//       objReturned[id] = person.id;
//       objReturned[fullName] = `${person.firstName} ${person.lastName}`;
//       objReturned[species] = getSpecies(person);
//       objReturned[locations] = getLocation(person);
//     });
//   } else {
//     objReturned[id] = getEmployee(employeeInfo).id;
//     objReturned[fullName] = `${getEmployee(employeeInfo).firstName} 
//       ${getEmployee(employeeInfo).lastName}`;
//     objReturned[species] = getSpecies(employeeInfo);
//     objReturned[locations] = getLocation(employeeInfo);
//   }
//   return objReturned;
};

module.exports = getEmployeesCoverage;
