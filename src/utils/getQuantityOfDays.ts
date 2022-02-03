function getQuantityOfDays(month: number, year: number) {
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  const quantityOfDays = [
    31,
    isLeapYear ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];

  return quantityOfDays[month];
}

export default getQuantityOfDays;
