const validatePlateInput = (plate) => (plate ? !isNaN(plate) : false);
const validateDate = (date) => date instanceof Date && !isNaN(date.valueOf());
const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
const validateTime = (time) => timeRegex.test(time);
