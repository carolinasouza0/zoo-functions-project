const data = require('../data/zoo_data');

const { employees } = data;

const isManager = (id) => employees.some((employee) =>
  employee.managers.some((manager) => manager === id));

const getRelatedEmployees = (managerId) => {
  let workers = [];
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } else {
    workers = (employees.filter((employee) =>
      employee.managers.find((manager) => manager === managerId))).map((worker) =>
      `${worker.firstName} ${worker.lastName}`);
  }
  return workers;
};

module.exports = { isManager, getRelatedEmployees };
