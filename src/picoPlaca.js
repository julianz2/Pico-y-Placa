import {
  validatePlateInput,
  validateDate,
  validateTime,
  isWeekDay,
} from "./validations.js";
import { getLastDigit, isRestrictedByDay } from "./plateHelpers";
import { getDayNumber, isRestrictedByHours } from "./timeHelpers";

export const picoPlacaValidator = (plate, date, time) => {
  if (!validatePlateInput(plate)) {
    throw new Error("Invalid Plate");
  }
  if (!validateDate(new Date(date))) {
    throw new Error("Invalid Date");
  }

  if (!validateTime(time)) {
    throw new Error("Invalid Time format");
  }
  const lastDigit = getLastDigit(plate);
  if (isNaN(lastDigit)) {
    throw new Error("Last Digit is not a number");
  }
  const dayNumber = getDayNumber(date);
  if (!isWeekDay(dayNumber)) {
    throw new Error("The inserted date is a weekend");
  }
  console.log(lastDigit);
  console.log(dayNumber);
  return isRestrictedByDay(lastDigit, dayNumber) && isRestrictedByHours(time);
};
