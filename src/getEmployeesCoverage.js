const data = require('../data/zoo_data');

const { species, employees } = data;

const getEmployee = (obj) => {
  const employee = employees.find((worker) => worker.firstName === obj.name
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
  species.forEach((specie) => {
    if (employeeResponsible.includes(specie.id)) {
      animals.push(specie.name);
    }
  });
  return animals;
};

const getLocation = (employee) => {
  const location = [];
  const animals = getSpecies(employee);
  species.forEach((specie) => {
    if (animals.includes(specie.name)) {
      location.push(specie.location);
    }
  });
  return location;
};

// const getEmployeesCoverageNoInfo = () => {
//   const allEmployes = [];
//   employees.forEach((emp) => {
//     const animals = getSpecies(emp.id);
//     const locations = getLocation(emp.id);
//     allEmployes.push({
//       id: emp.id,
//       fullName: `${emp.firstName} ${emp.lastName}`,
//       species: animals,
//       locations,
//     });
//   });
//   return allEmployes;
// };

const getEmployeesCoverage = (employeeInfo = {}) => {
  if (employeeInfo) {
    const worker = getEmployee(employeeInfo);
    const { id } = worker;
    const specie = getSpecies(employeeInfo);
    const locations = getLocation(employeeInfo);
    return {
      id,
      fullName: `${worker.firstName} ${worker.lastName}`,
      species: specie,
      locations,
    };
  // } else {
  //   return getEmployeesCoverageNoInfo();
  // }
  }
};
console.log(getEmployeesCoverage({ name: 'Spry' }));
module.exports = getEmployeesCoverage;
