const data = require('../data/zoo_data');

const { species, hours } = data;

const daysOfTheWeek = Object.keys(hours);

const getScheduleNoInfo = () => {
  const obj = daysOfTheWeek.reduce((acc, weekDay) => {
    acc[weekDay] = {
      officeHour: `Open from ${hours[weekDay].open}am until ${hours[weekDay].close}pm`,
      exhibition: species.filter((specie) =>
        specie.availability.includes(weekDay)).map((ani) => ani.name),
    };
    return acc;
  }, {});
  obj.Monday = {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  };
  return obj;
};

const getScheduleByDay = (day) => {
  const obj = {
    [day]: getScheduleNoInfo()[day],
  };
  return obj;
};

const validDay = (nameDay) => daysOfTheWeek.includes(nameDay);

const getSchedule = (scheduleTarget) => {
  if (!scheduleTarget) return getScheduleNoInfo();
  if (validDay(scheduleTarget)) return getScheduleByDay(scheduleTarget);

  const animal = species.find((anim) =>
    anim.name === scheduleTarget);
  return animal ? animal.availability : getScheduleNoInfo();
};
module.exports = getSchedule;
