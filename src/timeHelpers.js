export const isRestrictedByHours = (time) => {
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
    return true;
  } else return false;
};
export const getDayNumber = (date) => parseInt(new Date(date).getDay()) + 1;
