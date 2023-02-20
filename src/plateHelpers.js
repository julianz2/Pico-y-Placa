const plateData = {
  1: [1, 2],
  2: [3, 4],
  3: [5, 6],
  4: [7, 8],
  5: [9, 0],
};
export const getLastDigit = (plate) => {
  const plateSplit = plate.split("");
  return parseInt(plateSplit[plateSplit.length - 1]);
};
export const getDayNumber = (date) => parseInt(new Date(date).getDay()) + 1;
export const isRestrictedByDay = (plateDigit, dayNumber) => {
  const nowDay = Object.keys(plateData).find(
    (item) => parseInt(item) === dayNumber
  );
  return plateData[nowDay]?.includes(plateDigit);
};
