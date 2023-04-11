const data = require('../data/zoo_data');

const { species, employees } = data;

const getEmployeesCoverageNoInfo = employees.map((empl) => {
  const obj = {
    id: empl.id,
    fullName: `${empl.firstName} ${empl.lastName}`,
    species: empl.responsibleFor.map((ident) => species.find((spec) => spec.id === ident).name),
    locations: empl.responsibleFor.map((ident) => species.find((spec) =>
      spec.id === ident).location),
  };
  return obj;
});

const getEmployeesCoverage = (employeeInfo) => {
  if (!employeeInfo) return getEmployeesCoverageNoInfo;
  const validation = getEmployeesCoverageNoInfo
    .find((element) => element.fullName.includes(Object.values(employeeInfo))
      || element.id.includes(Object.values(employeeInfo)));
  if (validation === undefined) {
    throw new Error('Informações inválidas');
  }
  return validation;
};

module.exports = getEmployeesCoverage;
