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
const dayVerification = () => {
  const nowDay = Object.keys(plateData).find((item) => item === "3");
  console.log(nowDay);

  console.log("siiiiiiiiii");
  console.log(plateData[nowDay].includes(lastDigit("pda-2675")));
};
dayVerification();
