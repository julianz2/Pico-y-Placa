import { isRestrictedByHours } from "../plateHelpers";
import { validatePlateInput, validateDate, validateTime } from "../validations";
import { getLastDigit, isRestrictedByDay } from "./plateHelpers";
import { getDayNumber } from "./timeHelpers";

const picoPlacaValidator = (plate, date, time) => {
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
  const dayNumber = getDayNumber(date);
  return isRestrictedByDay(lastDigit, dayNumber) && isRestrictedByHours(time);
};
