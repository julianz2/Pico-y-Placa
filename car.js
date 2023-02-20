const plateData = {
  1: [1, 2],
  2: [3, 4],
  3: [5, 6],
  4: [7, 8],
  5: [9, 0],
};
const lastDigit = (plate) => {
  const plateSplit = plate.split("");
  return parseInt(plateSplit[plateSplit.length - 1]);
};
export const numberDay = (date) => {
  return parseInt(new Date(date).getDay()) + 1;
};
export const dayVerification = (plate, date) => {
  const nowDay = Object.keys(plateData).find(
    (item) => parseInt(item) === numberDay(date)
  );

  return !plateData[nowDay]?.includes(lastDigit(plate));
};
export const timeVerification = (time) => {
  const morningHours = {
    start: new Date().setHours(7, 0),
    end: new Date().setHours(9, 30),
  };
  const eveningHours = {
    start: new Date().setHours(16, 0),
    end: new Date().setHours(19, 30),
  };
  const [hours, minutes] = time.split(":").map(Number);
  const nowDate = new Date().setHours(hours, minutes);
  if (
    (nowDate >= morningHours.start && nowDate <= morningHours.end) ||
    (nowDate >= eveningHours.start && nowDate <= eveningHours.end)
  ) {
    return false;
  } else return true;
};
