const validatePlateInput = (plate) => {
  return plate ? !isNaN(plate) : false;
};
