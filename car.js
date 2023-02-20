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
const dayVerification = (date, plate) => {
  numberDay = parseInt(new Date(date).getDay()) + 1;
  console.log(numberDay);

  const nowDay = Object.keys(plateData).find(
    (item) => parseInt(item) === numberDay
  );

  return !plateData[nowDay]?.includes(lastDigit(plate));
};
