const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  let theEmployee = data.employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
  if (theEmployee === undefined) {
    theEmployee = {};
  }
  return theEmployee;
};

console.log(getEmployeeByName());
module.exports = getEmployeeByName;
