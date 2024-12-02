function calculateYearsFrom(dateString) {
  const startDate = new Date(dateString);
  const currentDate = new Date();

  // Calculate the difference in milliseconds
  const differenceInMilliseconds = currentDate - startDate;

  // Convert milliseconds to years
  const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25; // Includes leap years
  const yearsInDecimal = differenceInMilliseconds / millisecondsInYear;

  return yearsInDecimal.toFixed(2); // Returns the result rounded to 2 decimal places
}

export default calculateYearsFrom;
