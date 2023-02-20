export const validatePlateInput = (plate) => (plate ? plate : false);
export const validateDate = (date) =>
  date instanceof Date && !isNaN(date.valueOf());
const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
export const validateTime = (time) => timeRegex.test(time);
export const isWeekDay = (day) => !(day === 0 || day == 6);
